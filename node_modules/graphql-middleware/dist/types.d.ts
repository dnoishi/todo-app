import { GraphQLResolveInfo, GraphQLFieldResolver } from 'graphql';
export declare type IMiddlewareFunction = (resolve: GraphQLFieldResolver<any, any>, parent: any, args: any, context: any, info: GraphQLResolveInfo) => Promise<any>;
export interface IMiddlewareTypeMap {
    [key: string]: IMiddlewareFunction | IMiddlewareFieldMap;
}
export interface IMiddlewareFieldMap {
    [key: string]: IMiddlewareFunction;
}
export declare type IMiddleware = IMiddlewareFunction | IMiddlewareTypeMap;
