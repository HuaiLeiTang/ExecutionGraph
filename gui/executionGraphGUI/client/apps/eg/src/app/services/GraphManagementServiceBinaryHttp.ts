// =========================================================================================
//  ExecutionGraph
//  Copyright (C) 2014 by Gabriel Nützi <gnuetzi (at) gmail (døt) com>
//
//  @date Sun Jul 29 2018
//  @author Simon Spoerri, simon (døt) spoerri (at) gmail (døt) com
//
//  This Source Code Form is subject to the terms of the Mozilla Public
//  License, v. 2.0. If a copy of the MPL was not distributed with this
//  file, You can obtain one at http://mozilla.org/MPL/2.0/.
// =========================================================================================

import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { flatbuffers } from 'flatbuffers';
import { GraphManagementService, sz } from './GraphManagementService';
import { BinaryHttpRouterService } from './BinaryHttpRouterService';
import { ILogger, LoggerFactory } from '@eg/logger'
import { VERBOSE_LOG_TOKEN } from '../tokens';

@Injectable()
export class GraphManagementServiceBinaryHttp extends GraphManagementService {

  private logger: ILogger;

  constructor(loggerFactory: LoggerFactory, private readonly binaryRouter: BinaryHttpRouterService, @Inject(VERBOSE_LOG_TOKEN) private readonly verboseLog = true) {
    super();
    this.logger = loggerFactory.create("GraphManagementServiceBinaryHttp");
  }

  public async addGraph(graphTypeId: string): Promise<string> {

    // Build the AddGraph request
    let builder = new flatbuffers.Builder(16);
    let offGraphTypeId = builder.createString(graphTypeId);

    sz.AddGraphRequest.startAddGraphRequest(builder);
    sz.AddGraphRequest.addGraphTypeId(builder, offGraphTypeId);
    let off = sz.AddGraphRequest.endAddGraphRequest(builder);
    builder.finish(off);

    let requestPayload = builder.asUint8Array();

    // Send the request
    const result = await this.binaryRouter.post('general/addGraph', requestPayload);
    const buf = new flatbuffers.ByteBuffer(result);
    const response = sz.AddGraphResponse.getRootAsAddGraphResponse(buf);

    let graphId = response.graphId();
    this.logger.logInfo(`Added new graph with id: '${graphId}' and type id: '${graphTypeId}'`);

    return graphId;
  }

  public async removeGraph(graphId: string): Promise<void> {

    // Build the RemoveGraph request
    let builder = new flatbuffers.Builder(16);
    let offGraphId = builder.createString(graphId);

    sz.RemoveGraphRequest.startRemoveGraphRequest(builder);
    sz.RemoveGraphRequest.addGraphId(builder, offGraphId);
    let off = sz.RemoveGraphRequest.endRemoveGraphRequest(builder);
    builder.finish(off);

    let requestPayload = builder.asUint8Array();

    // Send the request
    await this.binaryRouter.post('general/removeGraph', requestPayload);

    this.logger.logInfo(`Removed graph with id: '${graphId}'`);
  }
}