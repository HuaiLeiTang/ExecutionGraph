import { AppAction, AppActionTypes } from './app.actions';
import { Graph, GraphTypeDescription, Node, Connection } from '../model';
import { Id, isDefined } from '@eg/common';
import { AppState } from "./app.state";

export const initialState: AppState = new AppState();

export function appReducer(immutableState: AppState = initialState, action: AppAction): AppState {
  let state = Object.assign(new AppState(), immutableState);
  switch (action.type) {
    case AppActionTypes.AppLoaded: {
      action.graphs.forEach((graph: Graph) => {
        state.graphs[graph.id.toString()] = graph;
      });
      action.graphDescriptions.forEach((graphDesc: GraphTypeDescription) => {
        state.graphDescriptions[graphDesc.id.toString()] = graphDesc;
      })
      state.loaded = true;
      break;
    }
    case AppActionTypes.SelectGraph: {
      state.selectedGraphId = action.id
      break;
    }
    case AppActionTypes.NodeAdded: {
      const graph = state.getSelectedGraph();
      if (isDefined(graph)) {
        graph.nodes.push(action.node);
      }
      break;
    }
    case AppActionTypes.NodeRemoved: {
      const graph = state.getSelectedGraph();
      if (isDefined(graph)) {
        graph.nodes.filter((node: Node) => node.id.equals(action.id));
      }
      break;
    }
    case AppActionTypes.ConnectionAdded: {
      const graph = state.getSelectedGraph();
      if (isDefined(graph)) {
        graph.connections.push(action.connection);
      }
      break;
    }
    case AppActionTypes.ConnectionRemoved: {
      const graph = state.getSelectedGraph()
      if (isDefined(graph)) {
        graph.connections.filter((connection: Connection) => connection.id.equal(action.connectionId));
      }
      break;
    }
  }
  return state
}