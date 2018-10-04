import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { LoggerFactory, ILogger } from '@eg/logger';

import * as fromGraph from '../actions/graph.actions';

import { createConnection } from '../../model';
import { GeneralInfoService, GraphManipulationService, GraphManagementService } from '../../services';

@Injectable()
export class GraphEffects {
    private readonly log: ILogger;

    constructor(
        private actions$: Actions,
        private readonly generalInfoService: GeneralInfoService,
        private readonly graphManipulationService: GraphManipulationService,
        private readonly graphManagementService: GraphManagementService,
        loggerFactory: LoggerFactory,
    ) {
        this.log = loggerFactory.create('AppEffects');
    }


    @Effect()
    loadGraphs$ = this.actions$.ofType<fromGraph.LoadGraphs>(fromGraph.LOAD_GRAPHS)
        .pipe(
            switchMap((action, state) => this.createDummyGraph()),
            catchError(error => {
                this.log.error(`Failed to load graphs`, error);
                return of(new fromGraph.GraphLoadError(error))
            })
        );

    @Effect()
    moveNode$ = this.actions$.ofType<fromGraph.MoveNode>(fromGraph.MOVE_NODE)
    .pipe(
        map((action, state) => new fromGraph.NodeMoved(action.node, action.newPosition))
    );

    @Effect()
    addConnection$ = this.actions$.ofType<fromGraph.AddConnection>(fromGraph.ADD_CONNECTION)
        .pipe(
            map((action, state) => new fromGraph.ConnectionAdded(createConnection(action.source, action.target)))
        );

    private async createDummyGraph(): Promise<fromGraph.GraphsLoaded> {
        // Get Graph Infos
        const graphDescs = await this.generalInfoService.getAllGraphTypeDescriptions();
        const graphDesc = graphDescs[0];
        const graphTypeId = graphDesc.id;
        const nodeType = graphDesc.nodeTypeDescritptions[0].type;

        // Add a graph
        const graph = await this.graphManagementService.addGraph(graphTypeId);

        // Add nodes
        for (let i = 0; i < 3; ++i) {
            const node = await this.graphManipulationService.addNode(graph.id, nodeType, `${nodeType}-${i}`);
            graph.addNode(node);
        }

        return new fromGraph.GraphsLoaded([graph]);
    }
}
