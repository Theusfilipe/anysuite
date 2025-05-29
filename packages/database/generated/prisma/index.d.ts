
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Access
 * 
 */
export type Access = $Result.DefaultSelection<Prisma.$AccessPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model SparePart
 * 
 */
export type SparePart = $Result.DefaultSelection<Prisma.$SparePartPayload>
/**
 * Model ServiceRequest
 * 
 */
export type ServiceRequest = $Result.DefaultSelection<Prisma.$ServiceRequestPayload>
/**
 * Model ServiceOrder
 * 
 */
export type ServiceOrder = $Result.DefaultSelection<Prisma.$ServiceOrderPayload>
/**
 * Model RepairService
 * 
 */
export type RepairService = $Result.DefaultSelection<Prisma.$RepairServicePayload>
/**
 * Model Checklist
 * 
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model ChecklistTask
 * 
 */
export type ChecklistTask = $Result.DefaultSelection<Prisma.$ChecklistTaskPayload>
/**
 * Model ChecklistResult
 * 
 */
export type ChecklistResult = $Result.DefaultSelection<Prisma.$ChecklistResultPayload>
/**
 * Model InspectionSchedule
 * 
 */
export type InspectionSchedule = $Result.DefaultSelection<Prisma.$InspectionSchedulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Department: {
  Stockroom: 'Stockroom',
  Maintenance: 'Maintenance',
  Personnel: 'Personnel'
};

export type Department = (typeof Department)[keyof typeof Department]


export const AccessLevel: {
  NONE: 'NONE',
  READ_ONLY: 'READ_ONLY',
  READ_WRITE: 'READ_WRITE',
  SUPERVISOR: 'SUPERVISOR',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel]

}

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

export type AccessLevel = $Enums.AccessLevel

export const AccessLevel: typeof $Enums.AccessLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.access`: Exposes CRUD operations for the **Access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesses
    * const accesses = await prisma.access.findMany()
    * ```
    */
  get access(): Prisma.AccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sparePart`: Exposes CRUD operations for the **SparePart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpareParts
    * const spareParts = await prisma.sparePart.findMany()
    * ```
    */
  get sparePart(): Prisma.SparePartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRequest`: Exposes CRUD operations for the **ServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequests
    * const serviceRequests = await prisma.serviceRequest.findMany()
    * ```
    */
  get serviceRequest(): Prisma.ServiceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceOrder`: Exposes CRUD operations for the **ServiceOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceOrders
    * const serviceOrders = await prisma.serviceOrder.findMany()
    * ```
    */
  get serviceOrder(): Prisma.ServiceOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairService`: Exposes CRUD operations for the **RepairService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairServices
    * const repairServices = await prisma.repairService.findMany()
    * ```
    */
  get repairService(): Prisma.RepairServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist`: Exposes CRUD operations for the **Checklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklists
    * const checklists = await prisma.checklist.findMany()
    * ```
    */
  get checklist(): Prisma.ChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklistTask`: Exposes CRUD operations for the **ChecklistTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistTasks
    * const checklistTasks = await prisma.checklistTask.findMany()
    * ```
    */
  get checklistTask(): Prisma.ChecklistTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklistResult`: Exposes CRUD operations for the **ChecklistResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistResults
    * const checklistResults = await prisma.checklistResult.findMany()
    * ```
    */
  get checklistResult(): Prisma.ChecklistResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inspectionSchedule`: Exposes CRUD operations for the **InspectionSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InspectionSchedules
    * const inspectionSchedules = await prisma.inspectionSchedule.findMany()
    * ```
    */
  get inspectionSchedule(): Prisma.InspectionScheduleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Access: 'Access',
    Equipment: 'Equipment',
    SparePart: 'SparePart',
    ServiceRequest: 'ServiceRequest',
    ServiceOrder: 'ServiceOrder',
    RepairService: 'RepairService',
    Checklist: 'Checklist',
    ChecklistTask: 'ChecklistTask',
    ChecklistResult: 'ChecklistResult',
    InspectionSchedule: 'InspectionSchedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "access" | "equipment" | "sparePart" | "serviceRequest" | "serviceOrder" | "repairService" | "checklist" | "checklistTask" | "checklistResult" | "inspectionSchedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Access: {
        payload: Prisma.$AccessPayload<ExtArgs>
        fields: Prisma.AccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          findFirst: {
            args: Prisma.AccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          findMany: {
            args: Prisma.AccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          create: {
            args: Prisma.AccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          createMany: {
            args: Prisma.AccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          delete: {
            args: Prisma.AccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          update: {
            args: Prisma.AccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          deleteMany: {
            args: Prisma.AccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          upsert: {
            args: Prisma.AccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          aggregate: {
            args: Prisma.AccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccess>
          }
          groupBy: {
            args: Prisma.AccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessCountArgs<ExtArgs>
            result: $Utils.Optional<AccessCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      SparePart: {
        payload: Prisma.$SparePartPayload<ExtArgs>
        fields: Prisma.SparePartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SparePartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SparePartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          findFirst: {
            args: Prisma.SparePartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SparePartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          findMany: {
            args: Prisma.SparePartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          create: {
            args: Prisma.SparePartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          createMany: {
            args: Prisma.SparePartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SparePartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          delete: {
            args: Prisma.SparePartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          update: {
            args: Prisma.SparePartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          deleteMany: {
            args: Prisma.SparePartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SparePartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SparePartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>[]
          }
          upsert: {
            args: Prisma.SparePartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SparePartPayload>
          }
          aggregate: {
            args: Prisma.SparePartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSparePart>
          }
          groupBy: {
            args: Prisma.SparePartGroupByArgs<ExtArgs>
            result: $Utils.Optional<SparePartGroupByOutputType>[]
          }
          count: {
            args: Prisma.SparePartCountArgs<ExtArgs>
            result: $Utils.Optional<SparePartCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequest: {
        payload: Prisma.$ServiceRequestPayload<ExtArgs>
        fields: Prisma.ServiceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findFirst: {
            args: Prisma.ServiceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findMany: {
            args: Prisma.ServiceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          create: {
            args: Prisma.ServiceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          createMany: {
            args: Prisma.ServiceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          delete: {
            args: Prisma.ServiceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          update: {
            args: Prisma.ServiceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          upsert: {
            args: Prisma.ServiceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          aggregate: {
            args: Prisma.ServiceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRequest>
          }
          groupBy: {
            args: Prisma.ServiceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestCountAggregateOutputType> | number
          }
        }
      }
      ServiceOrder: {
        payload: Prisma.$ServiceOrderPayload<ExtArgs>
        fields: Prisma.ServiceOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          findFirst: {
            args: Prisma.ServiceOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          findMany: {
            args: Prisma.ServiceOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          create: {
            args: Prisma.ServiceOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          createMany: {
            args: Prisma.ServiceOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          delete: {
            args: Prisma.ServiceOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          update: {
            args: Prisma.ServiceOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          deleteMany: {
            args: Prisma.ServiceOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          upsert: {
            args: Prisma.ServiceOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          aggregate: {
            args: Prisma.ServiceOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceOrder>
          }
          groupBy: {
            args: Prisma.ServiceOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderCountAggregateOutputType> | number
          }
        }
      }
      RepairService: {
        payload: Prisma.$RepairServicePayload<ExtArgs>
        fields: Prisma.RepairServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>
          }
          findFirst: {
            args: Prisma.RepairServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>
          }
          findMany: {
            args: Prisma.RepairServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>[]
          }
          create: {
            args: Prisma.RepairServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>
          }
          createMany: {
            args: Prisma.RepairServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>[]
          }
          delete: {
            args: Prisma.RepairServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>
          }
          update: {
            args: Prisma.RepairServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>
          }
          deleteMany: {
            args: Prisma.RepairServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>[]
          }
          upsert: {
            args: Prisma.RepairServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairServicePayload>
          }
          aggregate: {
            args: Prisma.RepairServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairService>
          }
          groupBy: {
            args: Prisma.RepairServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairServiceCountArgs<ExtArgs>
            result: $Utils.Optional<RepairServiceCountAggregateOutputType> | number
          }
        }
      }
      Checklist: {
        payload: Prisma.$ChecklistPayload<ExtArgs>
        fields: Prisma.ChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findFirst: {
            args: Prisma.ChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findMany: {
            args: Prisma.ChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          create: {
            args: Prisma.ChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          createMany: {
            args: Prisma.ChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          delete: {
            args: Prisma.ChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          update: {
            args: Prisma.ChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          aggregate: {
            args: Prisma.ChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist>
          }
          groupBy: {
            args: Prisma.ChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCountAggregateOutputType> | number
          }
        }
      }
      ChecklistTask: {
        payload: Prisma.$ChecklistTaskPayload<ExtArgs>
        fields: Prisma.ChecklistTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>
          }
          findFirst: {
            args: Prisma.ChecklistTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>
          }
          findMany: {
            args: Prisma.ChecklistTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>[]
          }
          create: {
            args: Prisma.ChecklistTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>
          }
          createMany: {
            args: Prisma.ChecklistTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>[]
          }
          delete: {
            args: Prisma.ChecklistTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>
          }
          update: {
            args: Prisma.ChecklistTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistTaskPayload>
          }
          aggregate: {
            args: Prisma.ChecklistTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistTask>
          }
          groupBy: {
            args: Prisma.ChecklistTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistTaskCountAggregateOutputType> | number
          }
        }
      }
      ChecklistResult: {
        payload: Prisma.$ChecklistResultPayload<ExtArgs>
        fields: Prisma.ChecklistResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>
          }
          findFirst: {
            args: Prisma.ChecklistResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>
          }
          findMany: {
            args: Prisma.ChecklistResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>[]
          }
          create: {
            args: Prisma.ChecklistResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>
          }
          createMany: {
            args: Prisma.ChecklistResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>[]
          }
          delete: {
            args: Prisma.ChecklistResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>
          }
          update: {
            args: Prisma.ChecklistResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistResultPayload>
          }
          aggregate: {
            args: Prisma.ChecklistResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistResult>
          }
          groupBy: {
            args: Prisma.ChecklistResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistResultCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistResultCountAggregateOutputType> | number
          }
        }
      }
      InspectionSchedule: {
        payload: Prisma.$InspectionSchedulePayload<ExtArgs>
        fields: Prisma.InspectionScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspectionScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspectionScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>
          }
          findFirst: {
            args: Prisma.InspectionScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspectionScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>
          }
          findMany: {
            args: Prisma.InspectionScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>[]
          }
          create: {
            args: Prisma.InspectionScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>
          }
          createMany: {
            args: Prisma.InspectionScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InspectionScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>[]
          }
          delete: {
            args: Prisma.InspectionScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>
          }
          update: {
            args: Prisma.InspectionScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>
          }
          deleteMany: {
            args: Prisma.InspectionScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspectionScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InspectionScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>[]
          }
          upsert: {
            args: Prisma.InspectionScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionSchedulePayload>
          }
          aggregate: {
            args: Prisma.InspectionScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspectionSchedule>
          }
          groupBy: {
            args: Prisma.InspectionScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspectionScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.InspectionScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<InspectionScheduleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    access?: AccessOmit
    equipment?: EquipmentOmit
    sparePart?: SparePartOmit
    serviceRequest?: ServiceRequestOmit
    serviceOrder?: ServiceOrderOmit
    repairService?: RepairServiceOmit
    checklist?: ChecklistOmit
    checklistTask?: ChecklistTaskOmit
    checklistResult?: ChecklistResultOmit
    inspectionSchedule?: InspectionScheduleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    access: number
    createdEquipment: number
    createdChecklists: number
    createdTasks: number
    createdResults: number
    createdRequests: number
    createdOrders: number
    createdRepairs: number
    createdSchedules: number
    repairs: number
    requests: number
    SparePart: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access?: boolean | UserCountOutputTypeCountAccessArgs
    createdEquipment?: boolean | UserCountOutputTypeCountCreatedEquipmentArgs
    createdChecklists?: boolean | UserCountOutputTypeCountCreatedChecklistsArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    createdResults?: boolean | UserCountOutputTypeCountCreatedResultsArgs
    createdRequests?: boolean | UserCountOutputTypeCountCreatedRequestsArgs
    createdOrders?: boolean | UserCountOutputTypeCountCreatedOrdersArgs
    createdRepairs?: boolean | UserCountOutputTypeCountCreatedRepairsArgs
    createdSchedules?: boolean | UserCountOutputTypeCountCreatedSchedulesArgs
    repairs?: boolean | UserCountOutputTypeCountRepairsArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    SparePart?: boolean | UserCountOutputTypeCountSparePartArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRepairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSparePartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparePartWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    serviceOrders: number
    repairServices: number
    checklists: number
    inspectionSchedules: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrders?: boolean | EquipmentCountOutputTypeCountServiceOrdersArgs
    repairServices?: boolean | EquipmentCountOutputTypeCountRepairServicesArgs
    checklists?: boolean | EquipmentCountOutputTypeCountChecklistsArgs
    inspectionSchedules?: boolean | EquipmentCountOutputTypeCountInspectionSchedulesArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountServiceOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountRepairServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairServiceWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountInspectionSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionScheduleWhereInput
  }


  /**
   * Count Type SparePartCountOutputType
   */

  export type SparePartCountOutputType = {
    usedIn: number
  }

  export type SparePartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usedIn?: boolean | SparePartCountOutputTypeCountUsedInArgs
  }

  // Custom InputTypes
  /**
   * SparePartCountOutputType without action
   */
  export type SparePartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePartCountOutputType
     */
    select?: SparePartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SparePartCountOutputType without action
   */
  export type SparePartCountOutputTypeCountUsedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairServiceWhereInput
  }


  /**
   * Count Type ServiceOrderCountOutputType
   */

  export type ServiceOrderCountOutputType = {
    repairServices: number
    inspectionSchedules: number
  }

  export type ServiceOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairServices?: boolean | ServiceOrderCountOutputTypeCountRepairServicesArgs
    inspectionSchedules?: boolean | ServiceOrderCountOutputTypeCountInspectionSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderCountOutputType
     */
    select?: ServiceOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeCountRepairServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairServiceWhereInput
  }

  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeCountInspectionSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionScheduleWhereInput
  }


  /**
   * Count Type RepairServiceCountOutputType
   */

  export type RepairServiceCountOutputType = {
    partsUsed: number
    checklistResults: number
  }

  export type RepairServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partsUsed?: boolean | RepairServiceCountOutputTypeCountPartsUsedArgs
    checklistResults?: boolean | RepairServiceCountOutputTypeCountChecklistResultsArgs
  }

  // Custom InputTypes
  /**
   * RepairServiceCountOutputType without action
   */
  export type RepairServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairServiceCountOutputType
     */
    select?: RepairServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairServiceCountOutputType without action
   */
  export type RepairServiceCountOutputTypeCountPartsUsedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparePartWhereInput
  }

  /**
   * RepairServiceCountOutputType without action
   */
  export type RepairServiceCountOutputTypeCountChecklistResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistResultWhereInput
  }


  /**
   * Count Type ChecklistCountOutputType
   */

  export type ChecklistCountOutputType = {
    tasks: number
    inspectionSchedules: number
  }

  export type ChecklistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ChecklistCountOutputTypeCountTasksArgs
    inspectionSchedules?: boolean | ChecklistCountOutputTypeCountInspectionSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCountOutputType
     */
    select?: ChecklistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistTaskWhereInput
  }

  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeCountInspectionSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionScheduleWhereInput
  }


  /**
   * Count Type ChecklistTaskCountOutputType
   */

  export type ChecklistTaskCountOutputType = {
    results: number
  }

  export type ChecklistTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ChecklistTaskCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ChecklistTaskCountOutputType without action
   */
  export type ChecklistTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTaskCountOutputType
     */
    select?: ChecklistTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistTaskCountOutputType without action
   */
  export type ChecklistTaskCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    access?: boolean | User$accessArgs<ExtArgs>
    createdEquipment?: boolean | User$createdEquipmentArgs<ExtArgs>
    createdChecklists?: boolean | User$createdChecklistsArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    createdResults?: boolean | User$createdResultsArgs<ExtArgs>
    createdRequests?: boolean | User$createdRequestsArgs<ExtArgs>
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    createdRepairs?: boolean | User$createdRepairsArgs<ExtArgs>
    createdSchedules?: boolean | User$createdSchedulesArgs<ExtArgs>
    repairs?: boolean | User$repairsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    SparePart?: boolean | User$SparePartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access?: boolean | User$accessArgs<ExtArgs>
    createdEquipment?: boolean | User$createdEquipmentArgs<ExtArgs>
    createdChecklists?: boolean | User$createdChecklistsArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    createdResults?: boolean | User$createdResultsArgs<ExtArgs>
    createdRequests?: boolean | User$createdRequestsArgs<ExtArgs>
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    createdRepairs?: boolean | User$createdRepairsArgs<ExtArgs>
    createdSchedules?: boolean | User$createdSchedulesArgs<ExtArgs>
    repairs?: boolean | User$repairsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    SparePart?: boolean | User$SparePartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      access: Prisma.$AccessPayload<ExtArgs>[]
      createdEquipment: Prisma.$EquipmentPayload<ExtArgs>[]
      createdChecklists: Prisma.$ChecklistPayload<ExtArgs>[]
      createdTasks: Prisma.$ChecklistTaskPayload<ExtArgs>[]
      createdResults: Prisma.$ChecklistResultPayload<ExtArgs>[]
      createdRequests: Prisma.$ServiceRequestPayload<ExtArgs>[]
      createdOrders: Prisma.$ServiceOrderPayload<ExtArgs>[]
      createdRepairs: Prisma.$RepairServicePayload<ExtArgs>[]
      createdSchedules: Prisma.$InspectionSchedulePayload<ExtArgs>[]
      repairs: Prisma.$RepairServicePayload<ExtArgs>[]
      requests: Prisma.$ServiceRequestPayload<ExtArgs>[]
      SparePart: Prisma.$SparePartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    access<T extends User$accessArgs<ExtArgs> = {}>(args?: Subset<T, User$accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdEquipment<T extends User$createdEquipmentArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEquipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdChecklists<T extends User$createdChecklistsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdChecklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdResults<T extends User$createdResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRequests<T extends User$createdRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdOrders<T extends User$createdOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRepairs<T extends User$createdRepairsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRepairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSchedules<T extends User$createdSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repairs<T extends User$repairsArgs<ExtArgs> = {}>(args?: Subset<T, User$repairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SparePart<T extends User$SparePartArgs<ExtArgs> = {}>(args?: Subset<T, User$SparePartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.access
   */
  export type User$accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    where?: AccessWhereInput
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    cursor?: AccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * User.createdEquipment
   */
  export type User$createdEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * User.createdChecklists
   */
  export type User$createdChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    where?: ChecklistTaskWhereInput
    orderBy?: ChecklistTaskOrderByWithRelationInput | ChecklistTaskOrderByWithRelationInput[]
    cursor?: ChecklistTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistTaskScalarFieldEnum | ChecklistTaskScalarFieldEnum[]
  }

  /**
   * User.createdResults
   */
  export type User$createdResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    where?: ChecklistResultWhereInput
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    cursor?: ChecklistResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistResultScalarFieldEnum | ChecklistResultScalarFieldEnum[]
  }

  /**
   * User.createdRequests
   */
  export type User$createdRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * User.createdOrders
   */
  export type User$createdOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    cursor?: ServiceOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * User.createdRepairs
   */
  export type User$createdRepairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    where?: RepairServiceWhereInput
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    cursor?: RepairServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * User.createdSchedules
   */
  export type User$createdSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    where?: InspectionScheduleWhereInput
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    cursor?: InspectionScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * User.repairs
   */
  export type User$repairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    where?: RepairServiceWhereInput
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    cursor?: RepairServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * User.SparePart
   */
  export type User$SparePartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    where?: SparePartWhereInput
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    cursor?: SparePartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Access
   */

  export type AggregateAccess = {
    _count: AccessCountAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  export type AccessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    department: $Enums.Department | null
    level: $Enums.AccessLevel | null
    createdAt: Date | null
  }

  export type AccessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    department: $Enums.Department | null
    level: $Enums.AccessLevel | null
    createdAt: Date | null
  }

  export type AccessCountAggregateOutputType = {
    id: number
    userId: number
    department: number
    level: number
    createdAt: number
    _all: number
  }


  export type AccessMinAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    level?: true
    createdAt?: true
  }

  export type AccessMaxAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    level?: true
    createdAt?: true
  }

  export type AccessCountAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type AccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Access to aggregate.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accesses
    **/
    _count?: true | AccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessMaxAggregateInputType
  }

  export type GetAccessAggregateType<T extends AccessAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess[P]>
      : GetScalarType<T[P], AggregateAccess[P]>
  }




  export type AccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessWhereInput
    orderBy?: AccessOrderByWithAggregationInput | AccessOrderByWithAggregationInput[]
    by: AccessScalarFieldEnum[] | AccessScalarFieldEnum
    having?: AccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessCountAggregateInputType | true
    _min?: AccessMinAggregateInputType
    _max?: AccessMaxAggregateInputType
  }

  export type AccessGroupByOutputType = {
    id: string
    userId: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt: Date
    _count: AccessCountAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  type GetAccessGroupByPayload<T extends AccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessGroupByOutputType[P]>
            : GetScalarType<T[P], AccessGroupByOutputType[P]>
        }
      >
    >


  export type AccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    level?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access"]>

  export type AccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    level?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access"]>

  export type AccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    level?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access"]>

  export type AccessSelectScalar = {
    id?: boolean
    userId?: boolean
    department?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type AccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "department" | "level" | "createdAt", ExtArgs["result"]["access"]>
  export type AccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Access"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      department: $Enums.Department
      level: $Enums.AccessLevel
      createdAt: Date
    }, ExtArgs["result"]["access"]>
    composites: {}
  }

  type AccessGetPayload<S extends boolean | null | undefined | AccessDefaultArgs> = $Result.GetResult<Prisma.$AccessPayload, S>

  type AccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessCountAggregateInputType | true
    }

  export interface AccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Access'], meta: { name: 'Access' } }
    /**
     * Find zero or one Access that matches the filter.
     * @param {AccessFindUniqueArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessFindUniqueArgs>(args: SelectSubset<T, AccessFindUniqueArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Access that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessFindUniqueOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindFirstArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessFindFirstArgs>(args?: SelectSubset<T, AccessFindFirstArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindFirstOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesses
     * const accesses = await prisma.access.findMany()
     * 
     * // Get first 10 Accesses
     * const accesses = await prisma.access.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessWithIdOnly = await prisma.access.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessFindManyArgs>(args?: SelectSubset<T, AccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Access.
     * @param {AccessCreateArgs} args - Arguments to create a Access.
     * @example
     * // Create one Access
     * const Access = await prisma.access.create({
     *   data: {
     *     // ... data to create a Access
     *   }
     * })
     * 
     */
    create<T extends AccessCreateArgs>(args: SelectSubset<T, AccessCreateArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accesses.
     * @param {AccessCreateManyArgs} args - Arguments to create many Accesses.
     * @example
     * // Create many Accesses
     * const access = await prisma.access.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessCreateManyArgs>(args?: SelectSubset<T, AccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accesses and returns the data saved in the database.
     * @param {AccessCreateManyAndReturnArgs} args - Arguments to create many Accesses.
     * @example
     * // Create many Accesses
     * const access = await prisma.access.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accesses and only return the `id`
     * const accessWithIdOnly = await prisma.access.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Access.
     * @param {AccessDeleteArgs} args - Arguments to delete one Access.
     * @example
     * // Delete one Access
     * const Access = await prisma.access.delete({
     *   where: {
     *     // ... filter to delete one Access
     *   }
     * })
     * 
     */
    delete<T extends AccessDeleteArgs>(args: SelectSubset<T, AccessDeleteArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Access.
     * @param {AccessUpdateArgs} args - Arguments to update one Access.
     * @example
     * // Update one Access
     * const access = await prisma.access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessUpdateArgs>(args: SelectSubset<T, AccessUpdateArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accesses.
     * @param {AccessDeleteManyArgs} args - Arguments to filter Accesses to delete.
     * @example
     * // Delete a few Accesses
     * const { count } = await prisma.access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessDeleteManyArgs>(args?: SelectSubset<T, AccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessUpdateManyArgs>(args: SelectSubset<T, AccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses and returns the data updated in the database.
     * @param {AccessUpdateManyAndReturnArgs} args - Arguments to update many Accesses.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accesses and only return the `id`
     * const accessWithIdOnly = await prisma.access.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Access.
     * @param {AccessUpsertArgs} args - Arguments to update or create a Access.
     * @example
     * // Update or create a Access
     * const access = await prisma.access.upsert({
     *   create: {
     *     // ... data to create a Access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access we want to update
     *   }
     * })
     */
    upsert<T extends AccessUpsertArgs>(args: SelectSubset<T, AccessUpsertArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCountArgs} args - Arguments to filter Accesses to count.
     * @example
     * // Count the number of Accesses
     * const count = await prisma.access.count({
     *   where: {
     *     // ... the filter for the Accesses we want to count
     *   }
     * })
    **/
    count<T extends AccessCountArgs>(
      args?: Subset<T, AccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessAggregateArgs>(args: Subset<T, AccessAggregateArgs>): Prisma.PrismaPromise<GetAccessAggregateType<T>>

    /**
     * Group by Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessGroupByArgs['orderBy'] }
        : { orderBy?: AccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Access model
   */
  readonly fields: AccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Access model
   */
  interface AccessFieldRefs {
    readonly id: FieldRef<"Access", 'String'>
    readonly userId: FieldRef<"Access", 'String'>
    readonly department: FieldRef<"Access", 'Department'>
    readonly level: FieldRef<"Access", 'AccessLevel'>
    readonly createdAt: FieldRef<"Access", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Access findUnique
   */
  export type AccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access findUniqueOrThrow
   */
  export type AccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access findFirst
   */
  export type AccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * Access findFirstOrThrow
   */
  export type AccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * Access findMany
   */
  export type AccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Accesses to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * Access create
   */
  export type AccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The data needed to create a Access.
     */
    data: XOR<AccessCreateInput, AccessUncheckedCreateInput>
  }

  /**
   * Access createMany
   */
  export type AccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accesses.
     */
    data: AccessCreateManyInput | AccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Access createManyAndReturn
   */
  export type AccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * The data used to create many Accesses.
     */
    data: AccessCreateManyInput | AccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Access update
   */
  export type AccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The data needed to update a Access.
     */
    data: XOR<AccessUpdateInput, AccessUncheckedUpdateInput>
    /**
     * Choose, which Access to update.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access updateMany
   */
  export type AccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accesses.
     */
    data: XOR<AccessUpdateManyMutationInput, AccessUncheckedUpdateManyInput>
    /**
     * Filter which Accesses to update
     */
    where?: AccessWhereInput
    /**
     * Limit how many Accesses to update.
     */
    limit?: number
  }

  /**
   * Access updateManyAndReturn
   */
  export type AccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * The data used to update Accesses.
     */
    data: XOR<AccessUpdateManyMutationInput, AccessUncheckedUpdateManyInput>
    /**
     * Filter which Accesses to update
     */
    where?: AccessWhereInput
    /**
     * Limit how many Accesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Access upsert
   */
  export type AccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The filter to search for the Access to update in case it exists.
     */
    where: AccessWhereUniqueInput
    /**
     * In case the Access found by the `where` argument doesn't exist, create a new Access with this data.
     */
    create: XOR<AccessCreateInput, AccessUncheckedCreateInput>
    /**
     * In case the Access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessUpdateInput, AccessUncheckedUpdateInput>
  }

  /**
   * Access delete
   */
  export type AccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter which Access to delete.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access deleteMany
   */
  export type AccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accesses to delete
     */
    where?: AccessWhereInput
    /**
     * Limit how many Accesses to delete.
     */
    limit?: number
  }

  /**
   * Access without action
   */
  export type AccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    daysBetweenRepairs: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    daysBetweenRepairs: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastRepairDate: Date | null
    nextRepairDate: Date | null
    daysBetweenRepairs: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastRepairDate: Date | null
    nextRepairDate: Date | null
    daysBetweenRepairs: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    lastRepairDate: number
    nextRepairDate: number
    daysBetweenRepairs: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    daysBetweenRepairs?: true
  }

  export type EquipmentSumAggregateInputType = {
    daysBetweenRepairs?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    lastRepairDate?: true
    nextRepairDate?: true
    daysBetweenRepairs?: true
    createdBy?: true
    createdAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    lastRepairDate?: true
    nextRepairDate?: true
    daysBetweenRepairs?: true
    createdBy?: true
    createdAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    lastRepairDate?: true
    nextRepairDate?: true
    daysBetweenRepairs?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    name: string
    lastRepairDate: Date | null
    nextRepairDate: Date | null
    daysBetweenRepairs: number | null
    createdBy: string
    createdAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastRepairDate?: boolean
    nextRepairDate?: boolean
    daysBetweenRepairs?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    serviceOrders?: boolean | Equipment$serviceOrdersArgs<ExtArgs>
    repairServices?: boolean | Equipment$repairServicesArgs<ExtArgs>
    checklists?: boolean | Equipment$checklistsArgs<ExtArgs>
    inspectionSchedules?: boolean | Equipment$inspectionSchedulesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastRepairDate?: boolean
    nextRepairDate?: boolean
    daysBetweenRepairs?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastRepairDate?: boolean
    nextRepairDate?: boolean
    daysBetweenRepairs?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    lastRepairDate?: boolean
    nextRepairDate?: boolean
    daysBetweenRepairs?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastRepairDate" | "nextRepairDate" | "daysBetweenRepairs" | "createdBy" | "createdAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    serviceOrders?: boolean | Equipment$serviceOrdersArgs<ExtArgs>
    repairServices?: boolean | Equipment$repairServicesArgs<ExtArgs>
    checklists?: boolean | Equipment$checklistsArgs<ExtArgs>
    inspectionSchedules?: boolean | Equipment$inspectionSchedulesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      serviceOrders: Prisma.$ServiceOrderPayload<ExtArgs>[]
      repairServices: Prisma.$RepairServicePayload<ExtArgs>[]
      checklists: Prisma.$ChecklistPayload<ExtArgs>[]
      inspectionSchedules: Prisma.$InspectionSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastRepairDate: Date | null
      nextRepairDate: Date | null
      daysBetweenRepairs: number | null
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    serviceOrders<T extends Equipment$serviceOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$serviceOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repairServices<T extends Equipment$repairServicesArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$repairServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklists<T extends Equipment$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspectionSchedules<T extends Equipment$inspectionSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$inspectionSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly lastRepairDate: FieldRef<"Equipment", 'DateTime'>
    readonly nextRepairDate: FieldRef<"Equipment", 'DateTime'>
    readonly daysBetweenRepairs: FieldRef<"Equipment", 'Int'>
    readonly createdBy: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.serviceOrders
   */
  export type Equipment$serviceOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    cursor?: ServiceOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * Equipment.repairServices
   */
  export type Equipment$repairServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    where?: RepairServiceWhereInput
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    cursor?: RepairServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * Equipment.checklists
   */
  export type Equipment$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Equipment.inspectionSchedules
   */
  export type Equipment$inspectionSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    where?: InspectionScheduleWhereInput
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    cursor?: InspectionScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model SparePart
   */

  export type AggregateSparePart = {
    _count: SparePartCountAggregateOutputType | null
    _avg: SparePartAvgAggregateOutputType | null
    _sum: SparePartSumAggregateOutputType | null
    _min: SparePartMinAggregateOutputType | null
    _max: SparePartMaxAggregateOutputType | null
  }

  export type SparePartAvgAggregateOutputType = {
    weight: number | null
    unitCost: number | null
    quantity: number | null
  }

  export type SparePartSumAggregateOutputType = {
    weight: number | null
    unitCost: number | null
    quantity: number | null
  }

  export type SparePartMinAggregateOutputType = {
    id: string | null
    name: string | null
    weight: number | null
    material: string | null
    unitCost: number | null
    quantity: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type SparePartMaxAggregateOutputType = {
    id: string | null
    name: string | null
    weight: number | null
    material: string | null
    unitCost: number | null
    quantity: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type SparePartCountAggregateOutputType = {
    id: number
    name: number
    weight: number
    material: number
    unitCost: number
    quantity: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type SparePartAvgAggregateInputType = {
    weight?: true
    unitCost?: true
    quantity?: true
  }

  export type SparePartSumAggregateInputType = {
    weight?: true
    unitCost?: true
    quantity?: true
  }

  export type SparePartMinAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    material?: true
    unitCost?: true
    quantity?: true
    createdBy?: true
    createdAt?: true
  }

  export type SparePartMaxAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    material?: true
    unitCost?: true
    quantity?: true
    createdBy?: true
    createdAt?: true
  }

  export type SparePartCountAggregateInputType = {
    id?: true
    name?: true
    weight?: true
    material?: true
    unitCost?: true
    quantity?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type SparePartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SparePart to aggregate.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpareParts
    **/
    _count?: true | SparePartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SparePartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SparePartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SparePartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SparePartMaxAggregateInputType
  }

  export type GetSparePartAggregateType<T extends SparePartAggregateArgs> = {
        [P in keyof T & keyof AggregateSparePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSparePart[P]>
      : GetScalarType<T[P], AggregateSparePart[P]>
  }




  export type SparePartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SparePartWhereInput
    orderBy?: SparePartOrderByWithAggregationInput | SparePartOrderByWithAggregationInput[]
    by: SparePartScalarFieldEnum[] | SparePartScalarFieldEnum
    having?: SparePartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SparePartCountAggregateInputType | true
    _avg?: SparePartAvgAggregateInputType
    _sum?: SparePartSumAggregateInputType
    _min?: SparePartMinAggregateInputType
    _max?: SparePartMaxAggregateInputType
  }

  export type SparePartGroupByOutputType = {
    id: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdBy: string
    createdAt: Date
    _count: SparePartCountAggregateOutputType | null
    _avg: SparePartAvgAggregateOutputType | null
    _sum: SparePartSumAggregateOutputType | null
    _min: SparePartMinAggregateOutputType | null
    _max: SparePartMaxAggregateOutputType | null
  }

  type GetSparePartGroupByPayload<T extends SparePartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SparePartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SparePartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SparePartGroupByOutputType[P]>
            : GetScalarType<T[P], SparePartGroupByOutputType[P]>
        }
      >
    >


  export type SparePartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    material?: boolean
    unitCost?: boolean
    quantity?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    usedIn?: boolean | SparePart$usedInArgs<ExtArgs>
    _count?: boolean | SparePartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    material?: boolean
    unitCost?: boolean
    quantity?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    weight?: boolean
    material?: boolean
    unitCost?: boolean
    quantity?: boolean
    createdBy?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sparePart"]>

  export type SparePartSelectScalar = {
    id?: boolean
    name?: boolean
    weight?: boolean
    material?: boolean
    unitCost?: boolean
    quantity?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type SparePartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "weight" | "material" | "unitCost" | "quantity" | "createdBy" | "createdAt", ExtArgs["result"]["sparePart"]>
  export type SparePartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    usedIn?: boolean | SparePart$usedInArgs<ExtArgs>
    _count?: boolean | SparePartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SparePartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SparePartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SparePartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SparePart"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      usedIn: Prisma.$RepairServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      weight: number
      material: string
      unitCost: number
      quantity: number
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["sparePart"]>
    composites: {}
  }

  type SparePartGetPayload<S extends boolean | null | undefined | SparePartDefaultArgs> = $Result.GetResult<Prisma.$SparePartPayload, S>

  type SparePartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SparePartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SparePartCountAggregateInputType | true
    }

  export interface SparePartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SparePart'], meta: { name: 'SparePart' } }
    /**
     * Find zero or one SparePart that matches the filter.
     * @param {SparePartFindUniqueArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SparePartFindUniqueArgs>(args: SelectSubset<T, SparePartFindUniqueArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SparePart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SparePartFindUniqueOrThrowArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SparePartFindUniqueOrThrowArgs>(args: SelectSubset<T, SparePartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparePart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindFirstArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SparePartFindFirstArgs>(args?: SelectSubset<T, SparePartFindFirstArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SparePart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindFirstOrThrowArgs} args - Arguments to find a SparePart
     * @example
     * // Get one SparePart
     * const sparePart = await prisma.sparePart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SparePartFindFirstOrThrowArgs>(args?: SelectSubset<T, SparePartFindFirstOrThrowArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpareParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpareParts
     * const spareParts = await prisma.sparePart.findMany()
     * 
     * // Get first 10 SpareParts
     * const spareParts = await prisma.sparePart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SparePartFindManyArgs>(args?: SelectSubset<T, SparePartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SparePart.
     * @param {SparePartCreateArgs} args - Arguments to create a SparePart.
     * @example
     * // Create one SparePart
     * const SparePart = await prisma.sparePart.create({
     *   data: {
     *     // ... data to create a SparePart
     *   }
     * })
     * 
     */
    create<T extends SparePartCreateArgs>(args: SelectSubset<T, SparePartCreateArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpareParts.
     * @param {SparePartCreateManyArgs} args - Arguments to create many SpareParts.
     * @example
     * // Create many SpareParts
     * const sparePart = await prisma.sparePart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SparePartCreateManyArgs>(args?: SelectSubset<T, SparePartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpareParts and returns the data saved in the database.
     * @param {SparePartCreateManyAndReturnArgs} args - Arguments to create many SpareParts.
     * @example
     * // Create many SpareParts
     * const sparePart = await prisma.sparePart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpareParts and only return the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SparePartCreateManyAndReturnArgs>(args?: SelectSubset<T, SparePartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SparePart.
     * @param {SparePartDeleteArgs} args - Arguments to delete one SparePart.
     * @example
     * // Delete one SparePart
     * const SparePart = await prisma.sparePart.delete({
     *   where: {
     *     // ... filter to delete one SparePart
     *   }
     * })
     * 
     */
    delete<T extends SparePartDeleteArgs>(args: SelectSubset<T, SparePartDeleteArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SparePart.
     * @param {SparePartUpdateArgs} args - Arguments to update one SparePart.
     * @example
     * // Update one SparePart
     * const sparePart = await prisma.sparePart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SparePartUpdateArgs>(args: SelectSubset<T, SparePartUpdateArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpareParts.
     * @param {SparePartDeleteManyArgs} args - Arguments to filter SpareParts to delete.
     * @example
     * // Delete a few SpareParts
     * const { count } = await prisma.sparePart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SparePartDeleteManyArgs>(args?: SelectSubset<T, SparePartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpareParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpareParts
     * const sparePart = await prisma.sparePart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SparePartUpdateManyArgs>(args: SelectSubset<T, SparePartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpareParts and returns the data updated in the database.
     * @param {SparePartUpdateManyAndReturnArgs} args - Arguments to update many SpareParts.
     * @example
     * // Update many SpareParts
     * const sparePart = await prisma.sparePart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpareParts and only return the `id`
     * const sparePartWithIdOnly = await prisma.sparePart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SparePartUpdateManyAndReturnArgs>(args: SelectSubset<T, SparePartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SparePart.
     * @param {SparePartUpsertArgs} args - Arguments to update or create a SparePart.
     * @example
     * // Update or create a SparePart
     * const sparePart = await prisma.sparePart.upsert({
     *   create: {
     *     // ... data to create a SparePart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SparePart we want to update
     *   }
     * })
     */
    upsert<T extends SparePartUpsertArgs>(args: SelectSubset<T, SparePartUpsertArgs<ExtArgs>>): Prisma__SparePartClient<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpareParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartCountArgs} args - Arguments to filter SpareParts to count.
     * @example
     * // Count the number of SpareParts
     * const count = await prisma.sparePart.count({
     *   where: {
     *     // ... the filter for the SpareParts we want to count
     *   }
     * })
    **/
    count<T extends SparePartCountArgs>(
      args?: Subset<T, SparePartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SparePartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SparePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SparePartAggregateArgs>(args: Subset<T, SparePartAggregateArgs>): Prisma.PrismaPromise<GetSparePartAggregateType<T>>

    /**
     * Group by SparePart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SparePartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SparePartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SparePartGroupByArgs['orderBy'] }
        : { orderBy?: SparePartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SparePartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSparePartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SparePart model
   */
  readonly fields: SparePartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SparePart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SparePartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usedIn<T extends SparePart$usedInArgs<ExtArgs> = {}>(args?: Subset<T, SparePart$usedInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SparePart model
   */
  interface SparePartFieldRefs {
    readonly id: FieldRef<"SparePart", 'String'>
    readonly name: FieldRef<"SparePart", 'String'>
    readonly weight: FieldRef<"SparePart", 'Float'>
    readonly material: FieldRef<"SparePart", 'String'>
    readonly unitCost: FieldRef<"SparePart", 'Float'>
    readonly quantity: FieldRef<"SparePart", 'Int'>
    readonly createdBy: FieldRef<"SparePart", 'String'>
    readonly createdAt: FieldRef<"SparePart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SparePart findUnique
   */
  export type SparePartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart findUniqueOrThrow
   */
  export type SparePartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart findFirst
   */
  export type SparePartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpareParts.
     */
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * SparePart findFirstOrThrow
   */
  export type SparePartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SparePart to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpareParts.
     */
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * SparePart findMany
   */
  export type SparePartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter, which SpareParts to fetch.
     */
    where?: SparePartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpareParts to fetch.
     */
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpareParts.
     */
    cursor?: SparePartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpareParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpareParts.
     */
    skip?: number
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * SparePart create
   */
  export type SparePartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * The data needed to create a SparePart.
     */
    data: XOR<SparePartCreateInput, SparePartUncheckedCreateInput>
  }

  /**
   * SparePart createMany
   */
  export type SparePartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpareParts.
     */
    data: SparePartCreateManyInput | SparePartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SparePart createManyAndReturn
   */
  export type SparePartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * The data used to create many SpareParts.
     */
    data: SparePartCreateManyInput | SparePartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparePart update
   */
  export type SparePartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * The data needed to update a SparePart.
     */
    data: XOR<SparePartUpdateInput, SparePartUncheckedUpdateInput>
    /**
     * Choose, which SparePart to update.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart updateMany
   */
  export type SparePartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpareParts.
     */
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyInput>
    /**
     * Filter which SpareParts to update
     */
    where?: SparePartWhereInput
    /**
     * Limit how many SpareParts to update.
     */
    limit?: number
  }

  /**
   * SparePart updateManyAndReturn
   */
  export type SparePartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * The data used to update SpareParts.
     */
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyInput>
    /**
     * Filter which SpareParts to update
     */
    where?: SparePartWhereInput
    /**
     * Limit how many SpareParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SparePart upsert
   */
  export type SparePartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * The filter to search for the SparePart to update in case it exists.
     */
    where: SparePartWhereUniqueInput
    /**
     * In case the SparePart found by the `where` argument doesn't exist, create a new SparePart with this data.
     */
    create: XOR<SparePartCreateInput, SparePartUncheckedCreateInput>
    /**
     * In case the SparePart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SparePartUpdateInput, SparePartUncheckedUpdateInput>
  }

  /**
   * SparePart delete
   */
  export type SparePartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    /**
     * Filter which SparePart to delete.
     */
    where: SparePartWhereUniqueInput
  }

  /**
   * SparePart deleteMany
   */
  export type SparePartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpareParts to delete
     */
    where?: SparePartWhereInput
    /**
     * Limit how many SpareParts to delete.
     */
    limit?: number
  }

  /**
   * SparePart.usedIn
   */
  export type SparePart$usedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    where?: RepairServiceWhereInput
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    cursor?: RepairServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * SparePart without action
   */
  export type SparePartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
  }


  /**
   * Model ServiceRequest
   */

  export type AggregateServiceRequest = {
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  export type ServiceRequestAvgAggregateOutputType = {
    cost: number | null
  }

  export type ServiceRequestSumAggregateOutputType = {
    cost: number | null
  }

  export type ServiceRequestMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    orderDate: Date | null
    requestDate: Date | null
    cost: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ServiceRequestMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    orderDate: Date | null
    requestDate: Date | null
    cost: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ServiceRequestCountAggregateOutputType = {
    id: number
    requesterId: number
    orderDate: number
    requestDate: number
    cost: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ServiceRequestAvgAggregateInputType = {
    cost?: true
  }

  export type ServiceRequestSumAggregateInputType = {
    cost?: true
  }

  export type ServiceRequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    orderDate?: true
    requestDate?: true
    cost?: true
    createdBy?: true
    createdAt?: true
  }

  export type ServiceRequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    orderDate?: true
    requestDate?: true
    cost?: true
    createdBy?: true
    createdAt?: true
  }

  export type ServiceRequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    orderDate?: true
    requestDate?: true
    cost?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequest to aggregate.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequests
    **/
    _count?: true | ServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type GetServiceRequestAggregateType<T extends ServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequest[P]>
      : GetScalarType<T[P], AggregateServiceRequest[P]>
  }




  export type ServiceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithAggregationInput | ServiceRequestOrderByWithAggregationInput[]
    by: ServiceRequestScalarFieldEnum[] | ServiceRequestScalarFieldEnum
    having?: ServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequestCountAggregateInputType | true
    _avg?: ServiceRequestAvgAggregateInputType
    _sum?: ServiceRequestSumAggregateInputType
    _min?: ServiceRequestMinAggregateInputType
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type ServiceRequestGroupByOutputType = {
    id: string
    requesterId: string
    orderDate: Date
    requestDate: Date
    cost: number
    createdBy: string
    createdAt: Date
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  type GetServiceRequestGroupByPayload<T extends ServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    orderDate?: boolean
    requestDate?: boolean
    cost?: boolean
    createdBy?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    serviceOrder?: boolean | ServiceRequest$serviceOrderArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>

  export type ServiceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    orderDate?: boolean
    requestDate?: boolean
    cost?: boolean
    createdBy?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>

  export type ServiceRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    orderDate?: boolean
    requestDate?: boolean
    cost?: boolean
    createdBy?: boolean
    createdAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>

  export type ServiceRequestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    orderDate?: boolean
    requestDate?: boolean
    cost?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ServiceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "orderDate" | "requestDate" | "cost" | "createdBy" | "createdAt", ExtArgs["result"]["serviceRequest"]>
  export type ServiceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    serviceOrder?: boolean | ServiceRequest$serviceOrderArgs<ExtArgs>
  }
  export type ServiceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServiceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequest"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      serviceOrder: Prisma.$ServiceOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      orderDate: Date
      requestDate: Date
      cost: number
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["serviceRequest"]>
    composites: {}
  }

  type ServiceRequestGetPayload<S extends boolean | null | undefined | ServiceRequestDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequestPayload, S>

  type ServiceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRequestCountAggregateInputType | true
    }

  export interface ServiceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequest'], meta: { name: 'ServiceRequest' } }
    /**
     * Find zero or one ServiceRequest that matches the filter.
     * @param {ServiceRequestFindUniqueArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRequestFindUniqueArgs>(args: SelectSubset<T, ServiceRequestFindUniqueArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRequestFindFirstArgs>(args?: SelectSubset<T, ServiceRequestFindFirstArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany()
     * 
     * // Get first 10 ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRequestWithIdOnly = await prisma.serviceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceRequestFindManyArgs>(args?: SelectSubset<T, ServiceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRequest.
     * @param {ServiceRequestCreateArgs} args - Arguments to create a ServiceRequest.
     * @example
     * // Create one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.create({
     *   data: {
     *     // ... data to create a ServiceRequest
     *   }
     * })
     * 
     */
    create<T extends ServiceRequestCreateArgs>(args: SelectSubset<T, ServiceRequestCreateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRequests.
     * @param {ServiceRequestCreateManyArgs} args - Arguments to create many ServiceRequests.
     * @example
     * // Create many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRequestCreateManyArgs>(args?: SelectSubset<T, ServiceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceRequests and returns the data saved in the database.
     * @param {ServiceRequestCreateManyAndReturnArgs} args - Arguments to create many ServiceRequests.
     * @example
     * // Create many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceRequests and only return the `id`
     * const serviceRequestWithIdOnly = await prisma.serviceRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceRequest.
     * @param {ServiceRequestDeleteArgs} args - Arguments to delete one ServiceRequest.
     * @example
     * // Delete one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequest
     *   }
     * })
     * 
     */
    delete<T extends ServiceRequestDeleteArgs>(args: SelectSubset<T, ServiceRequestDeleteArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRequest.
     * @param {ServiceRequestUpdateArgs} args - Arguments to update one ServiceRequest.
     * @example
     * // Update one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRequestUpdateArgs>(args: SelectSubset<T, ServiceRequestUpdateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRequests.
     * @param {ServiceRequestDeleteManyArgs} args - Arguments to filter ServiceRequests to delete.
     * @example
     * // Delete a few ServiceRequests
     * const { count } = await prisma.serviceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRequestDeleteManyArgs>(args?: SelectSubset<T, ServiceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRequestUpdateManyArgs>(args: SelectSubset<T, ServiceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests and returns the data updated in the database.
     * @param {ServiceRequestUpdateManyAndReturnArgs} args - Arguments to update many ServiceRequests.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceRequests and only return the `id`
     * const serviceRequestWithIdOnly = await prisma.serviceRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceRequest.
     * @param {ServiceRequestUpsertArgs} args - Arguments to update or create a ServiceRequest.
     * @example
     * // Update or create a ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.upsert({
     *   create: {
     *     // ... data to create a ServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequest we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRequestUpsertArgs>(args: SelectSubset<T, ServiceRequestUpsertArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestCountArgs} args - Arguments to filter ServiceRequests to count.
     * @example
     * // Count the number of ServiceRequests
     * const count = await prisma.serviceRequest.count({
     *   where: {
     *     // ... the filter for the ServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequestCountArgs>(
      args?: Subset<T, ServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequestAggregateArgs>(args: Subset<T, ServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestAggregateType<T>>

    /**
     * Group by ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequest model
   */
  readonly fields: ServiceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    serviceOrder<T extends ServiceRequest$serviceOrderArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$serviceOrderArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceRequest model
   */
  interface ServiceRequestFieldRefs {
    readonly id: FieldRef<"ServiceRequest", 'String'>
    readonly requesterId: FieldRef<"ServiceRequest", 'String'>
    readonly orderDate: FieldRef<"ServiceRequest", 'DateTime'>
    readonly requestDate: FieldRef<"ServiceRequest", 'DateTime'>
    readonly cost: FieldRef<"ServiceRequest", 'Float'>
    readonly createdBy: FieldRef<"ServiceRequest", 'String'>
    readonly createdAt: FieldRef<"ServiceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRequest findUnique
   */
  export type ServiceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findUniqueOrThrow
   */
  export type ServiceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findFirst
   */
  export type ServiceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findFirstOrThrow
   */
  export type ServiceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findMany
   */
  export type ServiceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequests to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest create
   */
  export type ServiceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequest.
     */
    data: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
  }

  /**
   * ServiceRequest createMany
   */
  export type ServiceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequests.
     */
    data: ServiceRequestCreateManyInput | ServiceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRequest createManyAndReturn
   */
  export type ServiceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceRequests.
     */
    data: ServiceRequestCreateManyInput | ServiceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceRequest update
   */
  export type ServiceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequest.
     */
    data: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequest to update.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest updateMany
   */
  export type ServiceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to update.
     */
    limit?: number
  }

  /**
   * ServiceRequest updateManyAndReturn
   */
  export type ServiceRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceRequest upsert
   */
  export type ServiceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequest to update in case it exists.
     */
    where: ServiceRequestWhereUniqueInput
    /**
     * In case the ServiceRequest found by the `where` argument doesn't exist, create a new ServiceRequest with this data.
     */
    create: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
    /**
     * In case the ServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
  }

  /**
   * ServiceRequest delete
   */
  export type ServiceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequest to delete.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest deleteMany
   */
  export type ServiceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequests to delete
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to delete.
     */
    limit?: number
  }

  /**
   * ServiceRequest.serviceOrder
   */
  export type ServiceRequest$serviceOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
  }

  /**
   * ServiceRequest without action
   */
  export type ServiceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
  }


  /**
   * Model ServiceOrder
   */

  export type AggregateServiceOrder = {
    _count: ServiceOrderCountAggregateOutputType | null
    _avg: ServiceOrderAvgAggregateOutputType | null
    _sum: ServiceOrderSumAggregateOutputType | null
    _min: ServiceOrderMinAggregateOutputType | null
    _max: ServiceOrderMaxAggregateOutputType | null
  }

  export type ServiceOrderAvgAggregateOutputType = {
    totalCost: number | null
  }

  export type ServiceOrderSumAggregateOutputType = {
    totalCost: number | null
  }

  export type ServiceOrderMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    equipmentId: string | null
    orderDate: Date | null
    startDate: Date | null
    endDate: Date | null
    totalCost: number | null
    type: boolean | null
    notes: string | null
    isOpen: boolean | null
    isOperational: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ServiceOrderMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    equipmentId: string | null
    orderDate: Date | null
    startDate: Date | null
    endDate: Date | null
    totalCost: number | null
    type: boolean | null
    notes: string | null
    isOpen: boolean | null
    isOperational: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ServiceOrderCountAggregateOutputType = {
    id: number
    requestId: number
    equipmentId: number
    orderDate: number
    startDate: number
    endDate: number
    totalCost: number
    type: number
    notes: number
    isOpen: number
    isOperational: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ServiceOrderAvgAggregateInputType = {
    totalCost?: true
  }

  export type ServiceOrderSumAggregateInputType = {
    totalCost?: true
  }

  export type ServiceOrderMinAggregateInputType = {
    id?: true
    requestId?: true
    equipmentId?: true
    orderDate?: true
    startDate?: true
    endDate?: true
    totalCost?: true
    type?: true
    notes?: true
    isOpen?: true
    isOperational?: true
    createdBy?: true
    createdAt?: true
  }

  export type ServiceOrderMaxAggregateInputType = {
    id?: true
    requestId?: true
    equipmentId?: true
    orderDate?: true
    startDate?: true
    endDate?: true
    totalCost?: true
    type?: true
    notes?: true
    isOpen?: true
    isOperational?: true
    createdBy?: true
    createdAt?: true
  }

  export type ServiceOrderCountAggregateInputType = {
    id?: true
    requestId?: true
    equipmentId?: true
    orderDate?: true
    startDate?: true
    endDate?: true
    totalCost?: true
    type?: true
    notes?: true
    isOpen?: true
    isOperational?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrder to aggregate.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceOrders
    **/
    _count?: true | ServiceOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceOrderMaxAggregateInputType
  }

  export type GetServiceOrderAggregateType<T extends ServiceOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceOrder[P]>
      : GetScalarType<T[P], AggregateServiceOrder[P]>
  }




  export type ServiceOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithAggregationInput | ServiceOrderOrderByWithAggregationInput[]
    by: ServiceOrderScalarFieldEnum[] | ServiceOrderScalarFieldEnum
    having?: ServiceOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceOrderCountAggregateInputType | true
    _avg?: ServiceOrderAvgAggregateInputType
    _sum?: ServiceOrderSumAggregateInputType
    _min?: ServiceOrderMinAggregateInputType
    _max?: ServiceOrderMaxAggregateInputType
  }

  export type ServiceOrderGroupByOutputType = {
    id: string
    requestId: string
    equipmentId: string
    orderDate: Date
    startDate: Date | null
    endDate: Date | null
    totalCost: number
    type: boolean
    notes: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt: Date
    _count: ServiceOrderCountAggregateOutputType | null
    _avg: ServiceOrderAvgAggregateOutputType | null
    _sum: ServiceOrderSumAggregateOutputType | null
    _min: ServiceOrderMinAggregateOutputType | null
    _max: ServiceOrderMaxAggregateOutputType | null
  }

  type GetServiceOrderGroupByPayload<T extends ServiceOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceOrderGroupByOutputType[P]>
        }
      >
    >


  export type ServiceOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    equipmentId?: boolean
    orderDate?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    type?: boolean
    notes?: boolean
    isOpen?: boolean
    isOperational?: boolean
    createdBy?: boolean
    createdAt?: boolean
    request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    repairServices?: boolean | ServiceOrder$repairServicesArgs<ExtArgs>
    inspectionSchedules?: boolean | ServiceOrder$inspectionSchedulesArgs<ExtArgs>
    _count?: boolean | ServiceOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    equipmentId?: boolean
    orderDate?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    type?: boolean
    notes?: boolean
    isOpen?: boolean
    isOperational?: boolean
    createdBy?: boolean
    createdAt?: boolean
    request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    equipmentId?: boolean
    orderDate?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    type?: boolean
    notes?: boolean
    isOpen?: boolean
    isOperational?: boolean
    createdBy?: boolean
    createdAt?: boolean
    request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectScalar = {
    id?: boolean
    requestId?: boolean
    equipmentId?: boolean
    orderDate?: boolean
    startDate?: boolean
    endDate?: boolean
    totalCost?: boolean
    type?: boolean
    notes?: boolean
    isOpen?: boolean
    isOperational?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ServiceOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "equipmentId" | "orderDate" | "startDate" | "endDate" | "totalCost" | "type" | "notes" | "isOpen" | "isOperational" | "createdBy" | "createdAt", ExtArgs["result"]["serviceOrder"]>
  export type ServiceOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    repairServices?: boolean | ServiceOrder$repairServicesArgs<ExtArgs>
    inspectionSchedules?: boolean | ServiceOrder$inspectionSchedulesArgs<ExtArgs>
    _count?: boolean | ServiceOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServiceOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceOrder"
    objects: {
      request: Prisma.$ServiceRequestPayload<ExtArgs>
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      repairServices: Prisma.$RepairServicePayload<ExtArgs>[]
      inspectionSchedules: Prisma.$InspectionSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      equipmentId: string
      orderDate: Date
      startDate: Date | null
      endDate: Date | null
      totalCost: number
      type: boolean
      notes: string | null
      isOpen: boolean
      isOperational: boolean
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["serviceOrder"]>
    composites: {}
  }

  type ServiceOrderGetPayload<S extends boolean | null | undefined | ServiceOrderDefaultArgs> = $Result.GetResult<Prisma.$ServiceOrderPayload, S>

  type ServiceOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceOrderCountAggregateInputType | true
    }

  export interface ServiceOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceOrder'], meta: { name: 'ServiceOrder' } }
    /**
     * Find zero or one ServiceOrder that matches the filter.
     * @param {ServiceOrderFindUniqueArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceOrderFindUniqueArgs>(args: SelectSubset<T, ServiceOrderFindUniqueArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceOrderFindUniqueOrThrowArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindFirstArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceOrderFindFirstArgs>(args?: SelectSubset<T, ServiceOrderFindFirstArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindFirstOrThrowArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceOrders
     * const serviceOrders = await prisma.serviceOrder.findMany()
     * 
     * // Get first 10 ServiceOrders
     * const serviceOrders = await prisma.serviceOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceOrderFindManyArgs>(args?: SelectSubset<T, ServiceOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceOrder.
     * @param {ServiceOrderCreateArgs} args - Arguments to create a ServiceOrder.
     * @example
     * // Create one ServiceOrder
     * const ServiceOrder = await prisma.serviceOrder.create({
     *   data: {
     *     // ... data to create a ServiceOrder
     *   }
     * })
     * 
     */
    create<T extends ServiceOrderCreateArgs>(args: SelectSubset<T, ServiceOrderCreateArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceOrders.
     * @param {ServiceOrderCreateManyArgs} args - Arguments to create many ServiceOrders.
     * @example
     * // Create many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceOrderCreateManyArgs>(args?: SelectSubset<T, ServiceOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceOrders and returns the data saved in the database.
     * @param {ServiceOrderCreateManyAndReturnArgs} args - Arguments to create many ServiceOrders.
     * @example
     * // Create many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceOrders and only return the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceOrder.
     * @param {ServiceOrderDeleteArgs} args - Arguments to delete one ServiceOrder.
     * @example
     * // Delete one ServiceOrder
     * const ServiceOrder = await prisma.serviceOrder.delete({
     *   where: {
     *     // ... filter to delete one ServiceOrder
     *   }
     * })
     * 
     */
    delete<T extends ServiceOrderDeleteArgs>(args: SelectSubset<T, ServiceOrderDeleteArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceOrder.
     * @param {ServiceOrderUpdateArgs} args - Arguments to update one ServiceOrder.
     * @example
     * // Update one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceOrderUpdateArgs>(args: SelectSubset<T, ServiceOrderUpdateArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceOrders.
     * @param {ServiceOrderDeleteManyArgs} args - Arguments to filter ServiceOrders to delete.
     * @example
     * // Delete a few ServiceOrders
     * const { count } = await prisma.serviceOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceOrderDeleteManyArgs>(args?: SelectSubset<T, ServiceOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceOrderUpdateManyArgs>(args: SelectSubset<T, ServiceOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrders and returns the data updated in the database.
     * @param {ServiceOrderUpdateManyAndReturnArgs} args - Arguments to update many ServiceOrders.
     * @example
     * // Update many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceOrders and only return the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceOrder.
     * @param {ServiceOrderUpsertArgs} args - Arguments to update or create a ServiceOrder.
     * @example
     * // Update or create a ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.upsert({
     *   create: {
     *     // ... data to create a ServiceOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceOrder we want to update
     *   }
     * })
     */
    upsert<T extends ServiceOrderUpsertArgs>(args: SelectSubset<T, ServiceOrderUpsertArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderCountArgs} args - Arguments to filter ServiceOrders to count.
     * @example
     * // Count the number of ServiceOrders
     * const count = await prisma.serviceOrder.count({
     *   where: {
     *     // ... the filter for the ServiceOrders we want to count
     *   }
     * })
    **/
    count<T extends ServiceOrderCountArgs>(
      args?: Subset<T, ServiceOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceOrderAggregateArgs>(args: Subset<T, ServiceOrderAggregateArgs>): Prisma.PrismaPromise<GetServiceOrderAggregateType<T>>

    /**
     * Group by ServiceOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceOrderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceOrder model
   */
  readonly fields: ServiceOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends ServiceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequestDefaultArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairServices<T extends ServiceOrder$repairServicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrder$repairServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspectionSchedules<T extends ServiceOrder$inspectionSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrder$inspectionSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceOrder model
   */
  interface ServiceOrderFieldRefs {
    readonly id: FieldRef<"ServiceOrder", 'String'>
    readonly requestId: FieldRef<"ServiceOrder", 'String'>
    readonly equipmentId: FieldRef<"ServiceOrder", 'String'>
    readonly orderDate: FieldRef<"ServiceOrder", 'DateTime'>
    readonly startDate: FieldRef<"ServiceOrder", 'DateTime'>
    readonly endDate: FieldRef<"ServiceOrder", 'DateTime'>
    readonly totalCost: FieldRef<"ServiceOrder", 'Float'>
    readonly type: FieldRef<"ServiceOrder", 'Boolean'>
    readonly notes: FieldRef<"ServiceOrder", 'String'>
    readonly isOpen: FieldRef<"ServiceOrder", 'Boolean'>
    readonly isOperational: FieldRef<"ServiceOrder", 'Boolean'>
    readonly createdBy: FieldRef<"ServiceOrder", 'String'>
    readonly createdAt: FieldRef<"ServiceOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceOrder findUnique
   */
  export type ServiceOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder findUniqueOrThrow
   */
  export type ServiceOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder findFirst
   */
  export type ServiceOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrders.
     */
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder findFirstOrThrow
   */
  export type ServiceOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrders.
     */
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder findMany
   */
  export type ServiceOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrders to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder create
   */
  export type ServiceOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceOrder.
     */
    data: XOR<ServiceOrderCreateInput, ServiceOrderUncheckedCreateInput>
  }

  /**
   * ServiceOrder createMany
   */
  export type ServiceOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceOrders.
     */
    data: ServiceOrderCreateManyInput | ServiceOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceOrder createManyAndReturn
   */
  export type ServiceOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceOrders.
     */
    data: ServiceOrderCreateManyInput | ServiceOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrder update
   */
  export type ServiceOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceOrder.
     */
    data: XOR<ServiceOrderUpdateInput, ServiceOrderUncheckedUpdateInput>
    /**
     * Choose, which ServiceOrder to update.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder updateMany
   */
  export type ServiceOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceOrders.
     */
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrders to update
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to update.
     */
    limit?: number
  }

  /**
   * ServiceOrder updateManyAndReturn
   */
  export type ServiceOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * The data used to update ServiceOrders.
     */
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrders to update
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrder upsert
   */
  export type ServiceOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceOrder to update in case it exists.
     */
    where: ServiceOrderWhereUniqueInput
    /**
     * In case the ServiceOrder found by the `where` argument doesn't exist, create a new ServiceOrder with this data.
     */
    create: XOR<ServiceOrderCreateInput, ServiceOrderUncheckedCreateInput>
    /**
     * In case the ServiceOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceOrderUpdateInput, ServiceOrderUncheckedUpdateInput>
  }

  /**
   * ServiceOrder delete
   */
  export type ServiceOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter which ServiceOrder to delete.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder deleteMany
   */
  export type ServiceOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrders to delete
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to delete.
     */
    limit?: number
  }

  /**
   * ServiceOrder.repairServices
   */
  export type ServiceOrder$repairServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    where?: RepairServiceWhereInput
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    cursor?: RepairServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * ServiceOrder.inspectionSchedules
   */
  export type ServiceOrder$inspectionSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    where?: InspectionScheduleWhereInput
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    cursor?: InspectionScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * ServiceOrder without action
   */
  export type ServiceOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
  }


  /**
   * Model RepairService
   */

  export type AggregateRepairService = {
    _count: RepairServiceCountAggregateOutputType | null
    _avg: RepairServiceAvgAggregateOutputType | null
    _sum: RepairServiceSumAggregateOutputType | null
    _min: RepairServiceMinAggregateOutputType | null
    _max: RepairServiceMaxAggregateOutputType | null
  }

  export type RepairServiceAvgAggregateOutputType = {
    cost: number | null
  }

  export type RepairServiceSumAggregateOutputType = {
    cost: number | null
  }

  export type RepairServiceMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orderId: string | null
    usedEquipmentId: string | null
    startDate: Date | null
    endDate: Date | null
    cost: number | null
    orderDate: Date | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type RepairServiceMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orderId: string | null
    usedEquipmentId: string | null
    startDate: Date | null
    endDate: Date | null
    cost: number | null
    orderDate: Date | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type RepairServiceCountAggregateOutputType = {
    id: number
    employeeId: number
    orderId: number
    usedEquipmentId: number
    startDate: number
    endDate: number
    cost: number
    orderDate: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type RepairServiceAvgAggregateInputType = {
    cost?: true
  }

  export type RepairServiceSumAggregateInputType = {
    cost?: true
  }

  export type RepairServiceMinAggregateInputType = {
    id?: true
    employeeId?: true
    orderId?: true
    usedEquipmentId?: true
    startDate?: true
    endDate?: true
    cost?: true
    orderDate?: true
    createdBy?: true
    createdAt?: true
  }

  export type RepairServiceMaxAggregateInputType = {
    id?: true
    employeeId?: true
    orderId?: true
    usedEquipmentId?: true
    startDate?: true
    endDate?: true
    cost?: true
    orderDate?: true
    createdBy?: true
    createdAt?: true
  }

  export type RepairServiceCountAggregateInputType = {
    id?: true
    employeeId?: true
    orderId?: true
    usedEquipmentId?: true
    startDate?: true
    endDate?: true
    cost?: true
    orderDate?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type RepairServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairService to aggregate.
     */
    where?: RepairServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairServices to fetch.
     */
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairServices
    **/
    _count?: true | RepairServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairServiceMaxAggregateInputType
  }

  export type GetRepairServiceAggregateType<T extends RepairServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairService[P]>
      : GetScalarType<T[P], AggregateRepairService[P]>
  }




  export type RepairServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairServiceWhereInput
    orderBy?: RepairServiceOrderByWithAggregationInput | RepairServiceOrderByWithAggregationInput[]
    by: RepairServiceScalarFieldEnum[] | RepairServiceScalarFieldEnum
    having?: RepairServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairServiceCountAggregateInputType | true
    _avg?: RepairServiceAvgAggregateInputType
    _sum?: RepairServiceSumAggregateInputType
    _min?: RepairServiceMinAggregateInputType
    _max?: RepairServiceMaxAggregateInputType
  }

  export type RepairServiceGroupByOutputType = {
    id: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate: Date | null
    endDate: Date | null
    cost: number
    orderDate: Date
    createdBy: string
    createdAt: Date
    _count: RepairServiceCountAggregateOutputType | null
    _avg: RepairServiceAvgAggregateOutputType | null
    _sum: RepairServiceSumAggregateOutputType | null
    _min: RepairServiceMinAggregateOutputType | null
    _max: RepairServiceMaxAggregateOutputType | null
  }

  type GetRepairServiceGroupByPayload<T extends RepairServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairServiceGroupByOutputType[P]>
            : GetScalarType<T[P], RepairServiceGroupByOutputType[P]>
        }
      >
    >


  export type RepairServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orderId?: boolean
    usedEquipmentId?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    orderDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    usedEquipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    partsUsed?: boolean | RepairService$partsUsedArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    checklistResults?: boolean | RepairService$checklistResultsArgs<ExtArgs>
    _count?: boolean | RepairServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairService"]>

  export type RepairServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orderId?: boolean
    usedEquipmentId?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    orderDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    usedEquipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairService"]>

  export type RepairServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orderId?: boolean
    usedEquipmentId?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    orderDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    usedEquipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairService"]>

  export type RepairServiceSelectScalar = {
    id?: boolean
    employeeId?: boolean
    orderId?: boolean
    usedEquipmentId?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    orderDate?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type RepairServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "orderId" | "usedEquipmentId" | "startDate" | "endDate" | "cost" | "orderDate" | "createdBy" | "createdAt", ExtArgs["result"]["repairService"]>
  export type RepairServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    usedEquipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    partsUsed?: boolean | RepairService$partsUsedArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    checklistResults?: boolean | RepairService$checklistResultsArgs<ExtArgs>
    _count?: boolean | RepairServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepairServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    usedEquipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RepairServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    usedEquipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RepairServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairService"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$ServiceOrderPayload<ExtArgs>
      usedEquipment: Prisma.$EquipmentPayload<ExtArgs>
      partsUsed: Prisma.$SparePartPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      checklistResults: Prisma.$ChecklistResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      orderId: string
      usedEquipmentId: string
      startDate: Date | null
      endDate: Date | null
      cost: number
      orderDate: Date
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["repairService"]>
    composites: {}
  }

  type RepairServiceGetPayload<S extends boolean | null | undefined | RepairServiceDefaultArgs> = $Result.GetResult<Prisma.$RepairServicePayload, S>

  type RepairServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairServiceCountAggregateInputType | true
    }

  export interface RepairServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairService'], meta: { name: 'RepairService' } }
    /**
     * Find zero or one RepairService that matches the filter.
     * @param {RepairServiceFindUniqueArgs} args - Arguments to find a RepairService
     * @example
     * // Get one RepairService
     * const repairService = await prisma.repairService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairServiceFindUniqueArgs>(args: SelectSubset<T, RepairServiceFindUniqueArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairServiceFindUniqueOrThrowArgs} args - Arguments to find a RepairService
     * @example
     * // Get one RepairService
     * const repairService = await prisma.repairService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceFindFirstArgs} args - Arguments to find a RepairService
     * @example
     * // Get one RepairService
     * const repairService = await prisma.repairService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairServiceFindFirstArgs>(args?: SelectSubset<T, RepairServiceFindFirstArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceFindFirstOrThrowArgs} args - Arguments to find a RepairService
     * @example
     * // Get one RepairService
     * const repairService = await prisma.repairService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairServices
     * const repairServices = await prisma.repairService.findMany()
     * 
     * // Get first 10 RepairServices
     * const repairServices = await prisma.repairService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairServiceWithIdOnly = await prisma.repairService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairServiceFindManyArgs>(args?: SelectSubset<T, RepairServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairService.
     * @param {RepairServiceCreateArgs} args - Arguments to create a RepairService.
     * @example
     * // Create one RepairService
     * const RepairService = await prisma.repairService.create({
     *   data: {
     *     // ... data to create a RepairService
     *   }
     * })
     * 
     */
    create<T extends RepairServiceCreateArgs>(args: SelectSubset<T, RepairServiceCreateArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairServices.
     * @param {RepairServiceCreateManyArgs} args - Arguments to create many RepairServices.
     * @example
     * // Create many RepairServices
     * const repairService = await prisma.repairService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairServiceCreateManyArgs>(args?: SelectSubset<T, RepairServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairServices and returns the data saved in the database.
     * @param {RepairServiceCreateManyAndReturnArgs} args - Arguments to create many RepairServices.
     * @example
     * // Create many RepairServices
     * const repairService = await prisma.repairService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairServices and only return the `id`
     * const repairServiceWithIdOnly = await prisma.repairService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairService.
     * @param {RepairServiceDeleteArgs} args - Arguments to delete one RepairService.
     * @example
     * // Delete one RepairService
     * const RepairService = await prisma.repairService.delete({
     *   where: {
     *     // ... filter to delete one RepairService
     *   }
     * })
     * 
     */
    delete<T extends RepairServiceDeleteArgs>(args: SelectSubset<T, RepairServiceDeleteArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairService.
     * @param {RepairServiceUpdateArgs} args - Arguments to update one RepairService.
     * @example
     * // Update one RepairService
     * const repairService = await prisma.repairService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairServiceUpdateArgs>(args: SelectSubset<T, RepairServiceUpdateArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairServices.
     * @param {RepairServiceDeleteManyArgs} args - Arguments to filter RepairServices to delete.
     * @example
     * // Delete a few RepairServices
     * const { count } = await prisma.repairService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairServiceDeleteManyArgs>(args?: SelectSubset<T, RepairServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairServices
     * const repairService = await prisma.repairService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairServiceUpdateManyArgs>(args: SelectSubset<T, RepairServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairServices and returns the data updated in the database.
     * @param {RepairServiceUpdateManyAndReturnArgs} args - Arguments to update many RepairServices.
     * @example
     * // Update many RepairServices
     * const repairService = await prisma.repairService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairServices and only return the `id`
     * const repairServiceWithIdOnly = await prisma.repairService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairService.
     * @param {RepairServiceUpsertArgs} args - Arguments to update or create a RepairService.
     * @example
     * // Update or create a RepairService
     * const repairService = await prisma.repairService.upsert({
     *   create: {
     *     // ... data to create a RepairService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairService we want to update
     *   }
     * })
     */
    upsert<T extends RepairServiceUpsertArgs>(args: SelectSubset<T, RepairServiceUpsertArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceCountArgs} args - Arguments to filter RepairServices to count.
     * @example
     * // Count the number of RepairServices
     * const count = await prisma.repairService.count({
     *   where: {
     *     // ... the filter for the RepairServices we want to count
     *   }
     * })
    **/
    count<T extends RepairServiceCountArgs>(
      args?: Subset<T, RepairServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairServiceAggregateArgs>(args: Subset<T, RepairServiceAggregateArgs>): Prisma.PrismaPromise<GetRepairServiceAggregateType<T>>

    /**
     * Group by RepairService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairServiceGroupByArgs['orderBy'] }
        : { orderBy?: RepairServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairService model
   */
  readonly fields: RepairServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends ServiceOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrderDefaultArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usedEquipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partsUsed<T extends RepairService$partsUsedArgs<ExtArgs> = {}>(args?: Subset<T, RepairService$partsUsedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SparePartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklistResults<T extends RepairService$checklistResultsArgs<ExtArgs> = {}>(args?: Subset<T, RepairService$checklistResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairService model
   */
  interface RepairServiceFieldRefs {
    readonly id: FieldRef<"RepairService", 'String'>
    readonly employeeId: FieldRef<"RepairService", 'String'>
    readonly orderId: FieldRef<"RepairService", 'String'>
    readonly usedEquipmentId: FieldRef<"RepairService", 'String'>
    readonly startDate: FieldRef<"RepairService", 'DateTime'>
    readonly endDate: FieldRef<"RepairService", 'DateTime'>
    readonly cost: FieldRef<"RepairService", 'Float'>
    readonly orderDate: FieldRef<"RepairService", 'DateTime'>
    readonly createdBy: FieldRef<"RepairService", 'String'>
    readonly createdAt: FieldRef<"RepairService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RepairService findUnique
   */
  export type RepairServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * Filter, which RepairService to fetch.
     */
    where: RepairServiceWhereUniqueInput
  }

  /**
   * RepairService findUniqueOrThrow
   */
  export type RepairServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * Filter, which RepairService to fetch.
     */
    where: RepairServiceWhereUniqueInput
  }

  /**
   * RepairService findFirst
   */
  export type RepairServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * Filter, which RepairService to fetch.
     */
    where?: RepairServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairServices to fetch.
     */
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairServices.
     */
    cursor?: RepairServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairServices.
     */
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * RepairService findFirstOrThrow
   */
  export type RepairServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * Filter, which RepairService to fetch.
     */
    where?: RepairServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairServices to fetch.
     */
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairServices.
     */
    cursor?: RepairServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairServices.
     */
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * RepairService findMany
   */
  export type RepairServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * Filter, which RepairServices to fetch.
     */
    where?: RepairServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairServices to fetch.
     */
    orderBy?: RepairServiceOrderByWithRelationInput | RepairServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairServices.
     */
    cursor?: RepairServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairServices.
     */
    skip?: number
    distinct?: RepairServiceScalarFieldEnum | RepairServiceScalarFieldEnum[]
  }

  /**
   * RepairService create
   */
  export type RepairServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairService.
     */
    data: XOR<RepairServiceCreateInput, RepairServiceUncheckedCreateInput>
  }

  /**
   * RepairService createMany
   */
  export type RepairServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairServices.
     */
    data: RepairServiceCreateManyInput | RepairServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairService createManyAndReturn
   */
  export type RepairServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * The data used to create many RepairServices.
     */
    data: RepairServiceCreateManyInput | RepairServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairService update
   */
  export type RepairServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairService.
     */
    data: XOR<RepairServiceUpdateInput, RepairServiceUncheckedUpdateInput>
    /**
     * Choose, which RepairService to update.
     */
    where: RepairServiceWhereUniqueInput
  }

  /**
   * RepairService updateMany
   */
  export type RepairServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairServices.
     */
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyInput>
    /**
     * Filter which RepairServices to update
     */
    where?: RepairServiceWhereInput
    /**
     * Limit how many RepairServices to update.
     */
    limit?: number
  }

  /**
   * RepairService updateManyAndReturn
   */
  export type RepairServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * The data used to update RepairServices.
     */
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyInput>
    /**
     * Filter which RepairServices to update
     */
    where?: RepairServiceWhereInput
    /**
     * Limit how many RepairServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairService upsert
   */
  export type RepairServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairService to update in case it exists.
     */
    where: RepairServiceWhereUniqueInput
    /**
     * In case the RepairService found by the `where` argument doesn't exist, create a new RepairService with this data.
     */
    create: XOR<RepairServiceCreateInput, RepairServiceUncheckedCreateInput>
    /**
     * In case the RepairService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairServiceUpdateInput, RepairServiceUncheckedUpdateInput>
  }

  /**
   * RepairService delete
   */
  export type RepairServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
    /**
     * Filter which RepairService to delete.
     */
    where: RepairServiceWhereUniqueInput
  }

  /**
   * RepairService deleteMany
   */
  export type RepairServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairServices to delete
     */
    where?: RepairServiceWhereInput
    /**
     * Limit how many RepairServices to delete.
     */
    limit?: number
  }

  /**
   * RepairService.partsUsed
   */
  export type RepairService$partsUsedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SparePart
     */
    select?: SparePartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SparePart
     */
    omit?: SparePartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SparePartInclude<ExtArgs> | null
    where?: SparePartWhereInput
    orderBy?: SparePartOrderByWithRelationInput | SparePartOrderByWithRelationInput[]
    cursor?: SparePartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SparePartScalarFieldEnum | SparePartScalarFieldEnum[]
  }

  /**
   * RepairService.checklistResults
   */
  export type RepairService$checklistResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    where?: ChecklistResultWhereInput
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    cursor?: ChecklistResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistResultScalarFieldEnum | ChecklistResultScalarFieldEnum[]
  }

  /**
   * RepairService without action
   */
  export type RepairServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairService
     */
    select?: RepairServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairService
     */
    omit?: RepairServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairServiceInclude<ExtArgs> | null
  }


  /**
   * Model Checklist
   */

  export type AggregateChecklist = {
    _count: ChecklistCountAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    equipmentId: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ChecklistMinAggregateInputType = {
    id?: true
    equipmentId?: true
    createdBy?: true
    createdAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    equipmentId?: true
    createdBy?: true
    createdAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    equipmentId?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklist to aggregate.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checklists
    **/
    _count?: true | ChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistMaxAggregateInputType
  }

  export type GetChecklistAggregateType<T extends ChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist[P]>
      : GetScalarType<T[P], AggregateChecklist[P]>
  }




  export type ChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithAggregationInput | ChecklistOrderByWithAggregationInput[]
    by: ChecklistScalarFieldEnum[] | ChecklistScalarFieldEnum
    having?: ChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCountAggregateInputType | true
    _min?: ChecklistMinAggregateInputType
    _max?: ChecklistMaxAggregateInputType
  }

  export type ChecklistGroupByOutputType = {
    id: string
    equipmentId: string
    createdBy: string
    createdAt: Date
    _count: ChecklistCountAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  type GetChecklistGroupByPayload<T extends ChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Checklist$tasksArgs<ExtArgs>
    inspectionSchedules?: boolean | Checklist$inspectionSchedulesArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>

  export type ChecklistSelectScalar = {
    id?: boolean
    equipmentId?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipmentId" | "createdBy" | "createdAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Checklist$tasksArgs<ExtArgs>
    inspectionSchedules?: boolean | Checklist$inspectionSchedulesArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$ChecklistTaskPayload<ExtArgs>[]
      inspectionSchedules: Prisma.$InspectionSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      equipmentId: string
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["checklist"]>
    composites: {}
  }

  type ChecklistGetPayload<S extends boolean | null | undefined | ChecklistDefaultArgs> = $Result.GetResult<Prisma.$ChecklistPayload, S>

  type ChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCountAggregateInputType | true
    }

  export interface ChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checklist'], meta: { name: 'Checklist' } }
    /**
     * Find zero or one Checklist that matches the filter.
     * @param {ChecklistFindUniqueArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistFindUniqueArgs>(args: SelectSubset<T, ChecklistFindUniqueArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistFindUniqueOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistFindFirstArgs>(args?: SelectSubset<T, ChecklistFindFirstArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklists
     * const checklists = await prisma.checklist.findMany()
     * 
     * // Get first 10 Checklists
     * const checklists = await prisma.checklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistWithIdOnly = await prisma.checklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistFindManyArgs>(args?: SelectSubset<T, ChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist.
     * @param {ChecklistCreateArgs} args - Arguments to create a Checklist.
     * @example
     * // Create one Checklist
     * const Checklist = await prisma.checklist.create({
     *   data: {
     *     // ... data to create a Checklist
     *   }
     * })
     * 
     */
    create<T extends ChecklistCreateArgs>(args: SelectSubset<T, ChecklistCreateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklists.
     * @param {ChecklistCreateManyArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCreateManyArgs>(args?: SelectSubset<T, ChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checklists and returns the data saved in the database.
     * @param {ChecklistCreateManyAndReturnArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checklist.
     * @param {ChecklistDeleteArgs} args - Arguments to delete one Checklist.
     * @example
     * // Delete one Checklist
     * const Checklist = await prisma.checklist.delete({
     *   where: {
     *     // ... filter to delete one Checklist
     *   }
     * })
     * 
     */
    delete<T extends ChecklistDeleteArgs>(args: SelectSubset<T, ChecklistDeleteArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist.
     * @param {ChecklistUpdateArgs} args - Arguments to update one Checklist.
     * @example
     * // Update one Checklist
     * const checklist = await prisma.checklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistUpdateArgs>(args: SelectSubset<T, ChecklistUpdateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklists.
     * @param {ChecklistDeleteManyArgs} args - Arguments to filter Checklists to delete.
     * @example
     * // Delete a few Checklists
     * const { count } = await prisma.checklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistDeleteManyArgs>(args?: SelectSubset<T, ChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistUpdateManyArgs>(args: SelectSubset<T, ChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists and returns the data updated in the database.
     * @param {ChecklistUpdateManyAndReturnArgs} args - Arguments to update many Checklists.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checklists and only return the `id`
     * const checklistWithIdOnly = await prisma.checklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checklist.
     * @param {ChecklistUpsertArgs} args - Arguments to update or create a Checklist.
     * @example
     * // Update or create a Checklist
     * const checklist = await prisma.checklist.upsert({
     *   create: {
     *     // ... data to create a Checklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistUpsertArgs>(args: SelectSubset<T, ChecklistUpsertArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCountArgs} args - Arguments to filter Checklists to count.
     * @example
     * // Count the number of Checklists
     * const count = await prisma.checklist.count({
     *   where: {
     *     // ... the filter for the Checklists we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCountArgs>(
      args?: Subset<T, ChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistAggregateArgs>(args: Subset<T, ChecklistAggregateArgs>): Prisma.PrismaPromise<GetChecklistAggregateType<T>>

    /**
     * Group by Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checklist model
   */
  readonly fields: ChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Checklist$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspectionSchedules<T extends Checklist$inspectionSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$inspectionSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checklist model
   */
  interface ChecklistFieldRefs {
    readonly id: FieldRef<"Checklist", 'String'>
    readonly equipmentId: FieldRef<"Checklist", 'String'>
    readonly createdBy: FieldRef<"Checklist", 'String'>
    readonly createdAt: FieldRef<"Checklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checklist findUnique
   */
  export type ChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findUniqueOrThrow
   */
  export type ChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findFirst
   */
  export type ChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findFirstOrThrow
   */
  export type ChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findMany
   */
  export type ChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklists to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist create
   */
  export type ChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Checklist.
     */
    data: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
  }

  /**
   * Checklist createMany
   */
  export type ChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist createManyAndReturn
   */
  export type ChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist update
   */
  export type ChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Checklist.
     */
    data: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
    /**
     * Choose, which Checklist to update.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist updateMany
   */
  export type ChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist updateManyAndReturn
   */
  export type ChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Checklist upsert
   */
  export type ChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Checklist to update in case it exists.
     */
    where: ChecklistWhereUniqueInput
    /**
     * In case the Checklist found by the `where` argument doesn't exist, create a new Checklist with this data.
     */
    create: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
    /**
     * In case the Checklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
  }

  /**
   * Checklist delete
   */
  export type ChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter which Checklist to delete.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist deleteMany
   */
  export type ChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklists to delete
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to delete.
     */
    limit?: number
  }

  /**
   * Checklist.tasks
   */
  export type Checklist$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    where?: ChecklistTaskWhereInput
    orderBy?: ChecklistTaskOrderByWithRelationInput | ChecklistTaskOrderByWithRelationInput[]
    cursor?: ChecklistTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistTaskScalarFieldEnum | ChecklistTaskScalarFieldEnum[]
  }

  /**
   * Checklist.inspectionSchedules
   */
  export type Checklist$inspectionSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    where?: InspectionScheduleWhereInput
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    cursor?: InspectionScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * Checklist without action
   */
  export type ChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistTask
   */

  export type AggregateChecklistTask = {
    _count: ChecklistTaskCountAggregateOutputType | null
    _avg: ChecklistTaskAvgAggregateOutputType | null
    _sum: ChecklistTaskSumAggregateOutputType | null
    _min: ChecklistTaskMinAggregateOutputType | null
    _max: ChecklistTaskMaxAggregateOutputType | null
  }

  export type ChecklistTaskAvgAggregateOutputType = {
    order: number | null
  }

  export type ChecklistTaskSumAggregateOutputType = {
    order: number | null
  }

  export type ChecklistTaskMinAggregateOutputType = {
    id: string | null
    checklistId: string | null
    order: number | null
    name: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ChecklistTaskMaxAggregateOutputType = {
    id: string | null
    checklistId: string | null
    order: number | null
    name: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ChecklistTaskCountAggregateOutputType = {
    id: number
    checklistId: number
    order: number
    name: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ChecklistTaskAvgAggregateInputType = {
    order?: true
  }

  export type ChecklistTaskSumAggregateInputType = {
    order?: true
  }

  export type ChecklistTaskMinAggregateInputType = {
    id?: true
    checklistId?: true
    order?: true
    name?: true
    createdBy?: true
    createdAt?: true
  }

  export type ChecklistTaskMaxAggregateInputType = {
    id?: true
    checklistId?: true
    order?: true
    name?: true
    createdBy?: true
    createdAt?: true
  }

  export type ChecklistTaskCountAggregateInputType = {
    id?: true
    checklistId?: true
    order?: true
    name?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ChecklistTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistTask to aggregate.
     */
    where?: ChecklistTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistTasks to fetch.
     */
    orderBy?: ChecklistTaskOrderByWithRelationInput | ChecklistTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistTasks
    **/
    _count?: true | ChecklistTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistTaskMaxAggregateInputType
  }

  export type GetChecklistTaskAggregateType<T extends ChecklistTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistTask[P]>
      : GetScalarType<T[P], AggregateChecklistTask[P]>
  }




  export type ChecklistTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistTaskWhereInput
    orderBy?: ChecklistTaskOrderByWithAggregationInput | ChecklistTaskOrderByWithAggregationInput[]
    by: ChecklistTaskScalarFieldEnum[] | ChecklistTaskScalarFieldEnum
    having?: ChecklistTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistTaskCountAggregateInputType | true
    _avg?: ChecklistTaskAvgAggregateInputType
    _sum?: ChecklistTaskSumAggregateInputType
    _min?: ChecklistTaskMinAggregateInputType
    _max?: ChecklistTaskMaxAggregateInputType
  }

  export type ChecklistTaskGroupByOutputType = {
    id: string
    checklistId: string
    order: number
    name: string
    createdBy: string
    createdAt: Date
    _count: ChecklistTaskCountAggregateOutputType | null
    _avg: ChecklistTaskAvgAggregateOutputType | null
    _sum: ChecklistTaskSumAggregateOutputType | null
    _min: ChecklistTaskMinAggregateOutputType | null
    _max: ChecklistTaskMaxAggregateOutputType | null
  }

  type GetChecklistTaskGroupByPayload<T extends ChecklistTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistTaskGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklistId?: boolean
    order?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    results?: boolean | ChecklistTask$resultsArgs<ExtArgs>
    _count?: boolean | ChecklistTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistTask"]>

  export type ChecklistTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklistId?: boolean
    order?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistTask"]>

  export type ChecklistTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklistId?: boolean
    order?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistTask"]>

  export type ChecklistTaskSelectScalar = {
    id?: boolean
    checklistId?: boolean
    order?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ChecklistTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checklistId" | "order" | "name" | "createdBy" | "createdAt", ExtArgs["result"]["checklistTask"]>
  export type ChecklistTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    results?: boolean | ChecklistTask$resultsArgs<ExtArgs>
    _count?: boolean | ChecklistTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChecklistTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChecklistTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChecklistTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistTask"
    objects: {
      checklist: Prisma.$ChecklistPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      results: Prisma.$ChecklistResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checklistId: string
      order: number
      name: string
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["checklistTask"]>
    composites: {}
  }

  type ChecklistTaskGetPayload<S extends boolean | null | undefined | ChecklistTaskDefaultArgs> = $Result.GetResult<Prisma.$ChecklistTaskPayload, S>

  type ChecklistTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistTaskCountAggregateInputType | true
    }

  export interface ChecklistTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistTask'], meta: { name: 'ChecklistTask' } }
    /**
     * Find zero or one ChecklistTask that matches the filter.
     * @param {ChecklistTaskFindUniqueArgs} args - Arguments to find a ChecklistTask
     * @example
     * // Get one ChecklistTask
     * const checklistTask = await prisma.checklistTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistTaskFindUniqueArgs>(args: SelectSubset<T, ChecklistTaskFindUniqueArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChecklistTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistTaskFindUniqueOrThrowArgs} args - Arguments to find a ChecklistTask
     * @example
     * // Get one ChecklistTask
     * const checklistTask = await prisma.checklistTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskFindFirstArgs} args - Arguments to find a ChecklistTask
     * @example
     * // Get one ChecklistTask
     * const checklistTask = await prisma.checklistTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistTaskFindFirstArgs>(args?: SelectSubset<T, ChecklistTaskFindFirstArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskFindFirstOrThrowArgs} args - Arguments to find a ChecklistTask
     * @example
     * // Get one ChecklistTask
     * const checklistTask = await prisma.checklistTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChecklistTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistTasks
     * const checklistTasks = await prisma.checklistTask.findMany()
     * 
     * // Get first 10 ChecklistTasks
     * const checklistTasks = await prisma.checklistTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistTaskWithIdOnly = await prisma.checklistTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistTaskFindManyArgs>(args?: SelectSubset<T, ChecklistTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChecklistTask.
     * @param {ChecklistTaskCreateArgs} args - Arguments to create a ChecklistTask.
     * @example
     * // Create one ChecklistTask
     * const ChecklistTask = await prisma.checklistTask.create({
     *   data: {
     *     // ... data to create a ChecklistTask
     *   }
     * })
     * 
     */
    create<T extends ChecklistTaskCreateArgs>(args: SelectSubset<T, ChecklistTaskCreateArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChecklistTasks.
     * @param {ChecklistTaskCreateManyArgs} args - Arguments to create many ChecklistTasks.
     * @example
     * // Create many ChecklistTasks
     * const checklistTask = await prisma.checklistTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistTaskCreateManyArgs>(args?: SelectSubset<T, ChecklistTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChecklistTasks and returns the data saved in the database.
     * @param {ChecklistTaskCreateManyAndReturnArgs} args - Arguments to create many ChecklistTasks.
     * @example
     * // Create many ChecklistTasks
     * const checklistTask = await prisma.checklistTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChecklistTasks and only return the `id`
     * const checklistTaskWithIdOnly = await prisma.checklistTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChecklistTask.
     * @param {ChecklistTaskDeleteArgs} args - Arguments to delete one ChecklistTask.
     * @example
     * // Delete one ChecklistTask
     * const ChecklistTask = await prisma.checklistTask.delete({
     *   where: {
     *     // ... filter to delete one ChecklistTask
     *   }
     * })
     * 
     */
    delete<T extends ChecklistTaskDeleteArgs>(args: SelectSubset<T, ChecklistTaskDeleteArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChecklistTask.
     * @param {ChecklistTaskUpdateArgs} args - Arguments to update one ChecklistTask.
     * @example
     * // Update one ChecklistTask
     * const checklistTask = await prisma.checklistTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistTaskUpdateArgs>(args: SelectSubset<T, ChecklistTaskUpdateArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChecklistTasks.
     * @param {ChecklistTaskDeleteManyArgs} args - Arguments to filter ChecklistTasks to delete.
     * @example
     * // Delete a few ChecklistTasks
     * const { count } = await prisma.checklistTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistTaskDeleteManyArgs>(args?: SelectSubset<T, ChecklistTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistTasks
     * const checklistTask = await prisma.checklistTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistTaskUpdateManyArgs>(args: SelectSubset<T, ChecklistTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistTasks and returns the data updated in the database.
     * @param {ChecklistTaskUpdateManyAndReturnArgs} args - Arguments to update many ChecklistTasks.
     * @example
     * // Update many ChecklistTasks
     * const checklistTask = await prisma.checklistTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChecklistTasks and only return the `id`
     * const checklistTaskWithIdOnly = await prisma.checklistTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChecklistTask.
     * @param {ChecklistTaskUpsertArgs} args - Arguments to update or create a ChecklistTask.
     * @example
     * // Update or create a ChecklistTask
     * const checklistTask = await prisma.checklistTask.upsert({
     *   create: {
     *     // ... data to create a ChecklistTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistTask we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistTaskUpsertArgs>(args: SelectSubset<T, ChecklistTaskUpsertArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChecklistTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskCountArgs} args - Arguments to filter ChecklistTasks to count.
     * @example
     * // Count the number of ChecklistTasks
     * const count = await prisma.checklistTask.count({
     *   where: {
     *     // ... the filter for the ChecklistTasks we want to count
     *   }
     * })
    **/
    count<T extends ChecklistTaskCountArgs>(
      args?: Subset<T, ChecklistTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistTaskAggregateArgs>(args: Subset<T, ChecklistTaskAggregateArgs>): Prisma.PrismaPromise<GetChecklistTaskAggregateType<T>>

    /**
     * Group by ChecklistTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistTaskGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistTask model
   */
  readonly fields: ChecklistTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checklist<T extends ChecklistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistDefaultArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends ChecklistTask$resultsArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistTask$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChecklistTask model
   */
  interface ChecklistTaskFieldRefs {
    readonly id: FieldRef<"ChecklistTask", 'String'>
    readonly checklistId: FieldRef<"ChecklistTask", 'String'>
    readonly order: FieldRef<"ChecklistTask", 'Int'>
    readonly name: FieldRef<"ChecklistTask", 'String'>
    readonly createdBy: FieldRef<"ChecklistTask", 'String'>
    readonly createdAt: FieldRef<"ChecklistTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistTask findUnique
   */
  export type ChecklistTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistTask to fetch.
     */
    where: ChecklistTaskWhereUniqueInput
  }

  /**
   * ChecklistTask findUniqueOrThrow
   */
  export type ChecklistTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistTask to fetch.
     */
    where: ChecklistTaskWhereUniqueInput
  }

  /**
   * ChecklistTask findFirst
   */
  export type ChecklistTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistTask to fetch.
     */
    where?: ChecklistTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistTasks to fetch.
     */
    orderBy?: ChecklistTaskOrderByWithRelationInput | ChecklistTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistTasks.
     */
    cursor?: ChecklistTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistTasks.
     */
    distinct?: ChecklistTaskScalarFieldEnum | ChecklistTaskScalarFieldEnum[]
  }

  /**
   * ChecklistTask findFirstOrThrow
   */
  export type ChecklistTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistTask to fetch.
     */
    where?: ChecklistTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistTasks to fetch.
     */
    orderBy?: ChecklistTaskOrderByWithRelationInput | ChecklistTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistTasks.
     */
    cursor?: ChecklistTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistTasks.
     */
    distinct?: ChecklistTaskScalarFieldEnum | ChecklistTaskScalarFieldEnum[]
  }

  /**
   * ChecklistTask findMany
   */
  export type ChecklistTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistTasks to fetch.
     */
    where?: ChecklistTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistTasks to fetch.
     */
    orderBy?: ChecklistTaskOrderByWithRelationInput | ChecklistTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistTasks.
     */
    cursor?: ChecklistTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistTasks.
     */
    skip?: number
    distinct?: ChecklistTaskScalarFieldEnum | ChecklistTaskScalarFieldEnum[]
  }

  /**
   * ChecklistTask create
   */
  export type ChecklistTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistTask.
     */
    data: XOR<ChecklistTaskCreateInput, ChecklistTaskUncheckedCreateInput>
  }

  /**
   * ChecklistTask createMany
   */
  export type ChecklistTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistTasks.
     */
    data: ChecklistTaskCreateManyInput | ChecklistTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistTask createManyAndReturn
   */
  export type ChecklistTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ChecklistTasks.
     */
    data: ChecklistTaskCreateManyInput | ChecklistTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistTask update
   */
  export type ChecklistTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistTask.
     */
    data: XOR<ChecklistTaskUpdateInput, ChecklistTaskUncheckedUpdateInput>
    /**
     * Choose, which ChecklistTask to update.
     */
    where: ChecklistTaskWhereUniqueInput
  }

  /**
   * ChecklistTask updateMany
   */
  export type ChecklistTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistTasks.
     */
    data: XOR<ChecklistTaskUpdateManyMutationInput, ChecklistTaskUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistTasks to update
     */
    where?: ChecklistTaskWhereInput
    /**
     * Limit how many ChecklistTasks to update.
     */
    limit?: number
  }

  /**
   * ChecklistTask updateManyAndReturn
   */
  export type ChecklistTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * The data used to update ChecklistTasks.
     */
    data: XOR<ChecklistTaskUpdateManyMutationInput, ChecklistTaskUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistTasks to update
     */
    where?: ChecklistTaskWhereInput
    /**
     * Limit how many ChecklistTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistTask upsert
   */
  export type ChecklistTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistTask to update in case it exists.
     */
    where: ChecklistTaskWhereUniqueInput
    /**
     * In case the ChecklistTask found by the `where` argument doesn't exist, create a new ChecklistTask with this data.
     */
    create: XOR<ChecklistTaskCreateInput, ChecklistTaskUncheckedCreateInput>
    /**
     * In case the ChecklistTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistTaskUpdateInput, ChecklistTaskUncheckedUpdateInput>
  }

  /**
   * ChecklistTask delete
   */
  export type ChecklistTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
    /**
     * Filter which ChecklistTask to delete.
     */
    where: ChecklistTaskWhereUniqueInput
  }

  /**
   * ChecklistTask deleteMany
   */
  export type ChecklistTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistTasks to delete
     */
    where?: ChecklistTaskWhereInput
    /**
     * Limit how many ChecklistTasks to delete.
     */
    limit?: number
  }

  /**
   * ChecklistTask.results
   */
  export type ChecklistTask$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    where?: ChecklistResultWhereInput
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    cursor?: ChecklistResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistResultScalarFieldEnum | ChecklistResultScalarFieldEnum[]
  }

  /**
   * ChecklistTask without action
   */
  export type ChecklistTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistTask
     */
    select?: ChecklistTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistTask
     */
    omit?: ChecklistTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistTaskInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistResult
   */

  export type AggregateChecklistResult = {
    _count: ChecklistResultCountAggregateOutputType | null
    _avg: ChecklistResultAvgAggregateOutputType | null
    _sum: ChecklistResultSumAggregateOutputType | null
    _min: ChecklistResultMinAggregateOutputType | null
    _max: ChecklistResultMaxAggregateOutputType | null
  }

  export type ChecklistResultAvgAggregateOutputType = {
    instance: number | null
  }

  export type ChecklistResultSumAggregateOutputType = {
    instance: number | null
  }

  export type ChecklistResultMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    instance: number | null
    repairId: string | null
    checked: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ChecklistResultMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    instance: number | null
    repairId: string | null
    checked: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ChecklistResultCountAggregateOutputType = {
    id: number
    taskId: number
    instance: number
    repairId: number
    checked: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ChecklistResultAvgAggregateInputType = {
    instance?: true
  }

  export type ChecklistResultSumAggregateInputType = {
    instance?: true
  }

  export type ChecklistResultMinAggregateInputType = {
    id?: true
    taskId?: true
    instance?: true
    repairId?: true
    checked?: true
    createdBy?: true
    createdAt?: true
  }

  export type ChecklistResultMaxAggregateInputType = {
    id?: true
    taskId?: true
    instance?: true
    repairId?: true
    checked?: true
    createdBy?: true
    createdAt?: true
  }

  export type ChecklistResultCountAggregateInputType = {
    id?: true
    taskId?: true
    instance?: true
    repairId?: true
    checked?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ChecklistResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistResult to aggregate.
     */
    where?: ChecklistResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistResults to fetch.
     */
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistResults
    **/
    _count?: true | ChecklistResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistResultMaxAggregateInputType
  }

  export type GetChecklistResultAggregateType<T extends ChecklistResultAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistResult[P]>
      : GetScalarType<T[P], AggregateChecklistResult[P]>
  }




  export type ChecklistResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistResultWhereInput
    orderBy?: ChecklistResultOrderByWithAggregationInput | ChecklistResultOrderByWithAggregationInput[]
    by: ChecklistResultScalarFieldEnum[] | ChecklistResultScalarFieldEnum
    having?: ChecklistResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistResultCountAggregateInputType | true
    _avg?: ChecklistResultAvgAggregateInputType
    _sum?: ChecklistResultSumAggregateInputType
    _min?: ChecklistResultMinAggregateInputType
    _max?: ChecklistResultMaxAggregateInputType
  }

  export type ChecklistResultGroupByOutputType = {
    id: string
    taskId: string
    instance: number
    repairId: string
    checked: boolean
    createdBy: string
    createdAt: Date
    _count: ChecklistResultCountAggregateOutputType | null
    _avg: ChecklistResultAvgAggregateOutputType | null
    _sum: ChecklistResultSumAggregateOutputType | null
    _min: ChecklistResultMinAggregateOutputType | null
    _max: ChecklistResultMaxAggregateOutputType | null
  }

  type GetChecklistResultGroupByPayload<T extends ChecklistResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistResultGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistResultGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    instance?: boolean
    repairId?: boolean
    checked?: boolean
    createdBy?: boolean
    createdAt?: boolean
    task?: boolean | ChecklistTaskDefaultArgs<ExtArgs>
    repair?: boolean | RepairServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistResult"]>

  export type ChecklistResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    instance?: boolean
    repairId?: boolean
    checked?: boolean
    createdBy?: boolean
    createdAt?: boolean
    task?: boolean | ChecklistTaskDefaultArgs<ExtArgs>
    repair?: boolean | RepairServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistResult"]>

  export type ChecklistResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    instance?: boolean
    repairId?: boolean
    checked?: boolean
    createdBy?: boolean
    createdAt?: boolean
    task?: boolean | ChecklistTaskDefaultArgs<ExtArgs>
    repair?: boolean | RepairServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistResult"]>

  export type ChecklistResultSelectScalar = {
    id?: boolean
    taskId?: boolean
    instance?: boolean
    repairId?: boolean
    checked?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ChecklistResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "instance" | "repairId" | "checked" | "createdBy" | "createdAt", ExtArgs["result"]["checklistResult"]>
  export type ChecklistResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ChecklistTaskDefaultArgs<ExtArgs>
    repair?: boolean | RepairServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChecklistResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ChecklistTaskDefaultArgs<ExtArgs>
    repair?: boolean | RepairServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChecklistResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | ChecklistTaskDefaultArgs<ExtArgs>
    repair?: boolean | RepairServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChecklistResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistResult"
    objects: {
      task: Prisma.$ChecklistTaskPayload<ExtArgs>
      repair: Prisma.$RepairServicePayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      instance: number
      repairId: string
      checked: boolean
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["checklistResult"]>
    composites: {}
  }

  type ChecklistResultGetPayload<S extends boolean | null | undefined | ChecklistResultDefaultArgs> = $Result.GetResult<Prisma.$ChecklistResultPayload, S>

  type ChecklistResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistResultCountAggregateInputType | true
    }

  export interface ChecklistResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistResult'], meta: { name: 'ChecklistResult' } }
    /**
     * Find zero or one ChecklistResult that matches the filter.
     * @param {ChecklistResultFindUniqueArgs} args - Arguments to find a ChecklistResult
     * @example
     * // Get one ChecklistResult
     * const checklistResult = await prisma.checklistResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistResultFindUniqueArgs>(args: SelectSubset<T, ChecklistResultFindUniqueArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChecklistResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistResultFindUniqueOrThrowArgs} args - Arguments to find a ChecklistResult
     * @example
     * // Get one ChecklistResult
     * const checklistResult = await prisma.checklistResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultFindFirstArgs} args - Arguments to find a ChecklistResult
     * @example
     * // Get one ChecklistResult
     * const checklistResult = await prisma.checklistResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistResultFindFirstArgs>(args?: SelectSubset<T, ChecklistResultFindFirstArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultFindFirstOrThrowArgs} args - Arguments to find a ChecklistResult
     * @example
     * // Get one ChecklistResult
     * const checklistResult = await prisma.checklistResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChecklistResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistResults
     * const checklistResults = await prisma.checklistResult.findMany()
     * 
     * // Get first 10 ChecklistResults
     * const checklistResults = await prisma.checklistResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistResultWithIdOnly = await prisma.checklistResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistResultFindManyArgs>(args?: SelectSubset<T, ChecklistResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChecklistResult.
     * @param {ChecklistResultCreateArgs} args - Arguments to create a ChecklistResult.
     * @example
     * // Create one ChecklistResult
     * const ChecklistResult = await prisma.checklistResult.create({
     *   data: {
     *     // ... data to create a ChecklistResult
     *   }
     * })
     * 
     */
    create<T extends ChecklistResultCreateArgs>(args: SelectSubset<T, ChecklistResultCreateArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChecklistResults.
     * @param {ChecklistResultCreateManyArgs} args - Arguments to create many ChecklistResults.
     * @example
     * // Create many ChecklistResults
     * const checklistResult = await prisma.checklistResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistResultCreateManyArgs>(args?: SelectSubset<T, ChecklistResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChecklistResults and returns the data saved in the database.
     * @param {ChecklistResultCreateManyAndReturnArgs} args - Arguments to create many ChecklistResults.
     * @example
     * // Create many ChecklistResults
     * const checklistResult = await prisma.checklistResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChecklistResults and only return the `id`
     * const checklistResultWithIdOnly = await prisma.checklistResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChecklistResult.
     * @param {ChecklistResultDeleteArgs} args - Arguments to delete one ChecklistResult.
     * @example
     * // Delete one ChecklistResult
     * const ChecklistResult = await prisma.checklistResult.delete({
     *   where: {
     *     // ... filter to delete one ChecklistResult
     *   }
     * })
     * 
     */
    delete<T extends ChecklistResultDeleteArgs>(args: SelectSubset<T, ChecklistResultDeleteArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChecklistResult.
     * @param {ChecklistResultUpdateArgs} args - Arguments to update one ChecklistResult.
     * @example
     * // Update one ChecklistResult
     * const checklistResult = await prisma.checklistResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistResultUpdateArgs>(args: SelectSubset<T, ChecklistResultUpdateArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChecklistResults.
     * @param {ChecklistResultDeleteManyArgs} args - Arguments to filter ChecklistResults to delete.
     * @example
     * // Delete a few ChecklistResults
     * const { count } = await prisma.checklistResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistResultDeleteManyArgs>(args?: SelectSubset<T, ChecklistResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistResults
     * const checklistResult = await prisma.checklistResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistResultUpdateManyArgs>(args: SelectSubset<T, ChecklistResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistResults and returns the data updated in the database.
     * @param {ChecklistResultUpdateManyAndReturnArgs} args - Arguments to update many ChecklistResults.
     * @example
     * // Update many ChecklistResults
     * const checklistResult = await prisma.checklistResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChecklistResults and only return the `id`
     * const checklistResultWithIdOnly = await prisma.checklistResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChecklistResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChecklistResult.
     * @param {ChecklistResultUpsertArgs} args - Arguments to update or create a ChecklistResult.
     * @example
     * // Update or create a ChecklistResult
     * const checklistResult = await prisma.checklistResult.upsert({
     *   create: {
     *     // ... data to create a ChecklistResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistResult we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistResultUpsertArgs>(args: SelectSubset<T, ChecklistResultUpsertArgs<ExtArgs>>): Prisma__ChecklistResultClient<$Result.GetResult<Prisma.$ChecklistResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChecklistResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultCountArgs} args - Arguments to filter ChecklistResults to count.
     * @example
     * // Count the number of ChecklistResults
     * const count = await prisma.checklistResult.count({
     *   where: {
     *     // ... the filter for the ChecklistResults we want to count
     *   }
     * })
    **/
    count<T extends ChecklistResultCountArgs>(
      args?: Subset<T, ChecklistResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistResultAggregateArgs>(args: Subset<T, ChecklistResultAggregateArgs>): Prisma.PrismaPromise<GetChecklistResultAggregateType<T>>

    /**
     * Group by ChecklistResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistResultGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistResult model
   */
  readonly fields: ChecklistResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends ChecklistTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistTaskDefaultArgs<ExtArgs>>): Prisma__ChecklistTaskClient<$Result.GetResult<Prisma.$ChecklistTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repair<T extends RepairServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairServiceDefaultArgs<ExtArgs>>): Prisma__RepairServiceClient<$Result.GetResult<Prisma.$RepairServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChecklistResult model
   */
  interface ChecklistResultFieldRefs {
    readonly id: FieldRef<"ChecklistResult", 'String'>
    readonly taskId: FieldRef<"ChecklistResult", 'String'>
    readonly instance: FieldRef<"ChecklistResult", 'Int'>
    readonly repairId: FieldRef<"ChecklistResult", 'String'>
    readonly checked: FieldRef<"ChecklistResult", 'Boolean'>
    readonly createdBy: FieldRef<"ChecklistResult", 'String'>
    readonly createdAt: FieldRef<"ChecklistResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistResult findUnique
   */
  export type ChecklistResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistResult to fetch.
     */
    where: ChecklistResultWhereUniqueInput
  }

  /**
   * ChecklistResult findUniqueOrThrow
   */
  export type ChecklistResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistResult to fetch.
     */
    where: ChecklistResultWhereUniqueInput
  }

  /**
   * ChecklistResult findFirst
   */
  export type ChecklistResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistResult to fetch.
     */
    where?: ChecklistResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistResults to fetch.
     */
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistResults.
     */
    cursor?: ChecklistResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistResults.
     */
    distinct?: ChecklistResultScalarFieldEnum | ChecklistResultScalarFieldEnum[]
  }

  /**
   * ChecklistResult findFirstOrThrow
   */
  export type ChecklistResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistResult to fetch.
     */
    where?: ChecklistResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistResults to fetch.
     */
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistResults.
     */
    cursor?: ChecklistResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistResults.
     */
    distinct?: ChecklistResultScalarFieldEnum | ChecklistResultScalarFieldEnum[]
  }

  /**
   * ChecklistResult findMany
   */
  export type ChecklistResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistResults to fetch.
     */
    where?: ChecklistResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistResults to fetch.
     */
    orderBy?: ChecklistResultOrderByWithRelationInput | ChecklistResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistResults.
     */
    cursor?: ChecklistResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistResults.
     */
    skip?: number
    distinct?: ChecklistResultScalarFieldEnum | ChecklistResultScalarFieldEnum[]
  }

  /**
   * ChecklistResult create
   */
  export type ChecklistResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistResult.
     */
    data: XOR<ChecklistResultCreateInput, ChecklistResultUncheckedCreateInput>
  }

  /**
   * ChecklistResult createMany
   */
  export type ChecklistResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistResults.
     */
    data: ChecklistResultCreateManyInput | ChecklistResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistResult createManyAndReturn
   */
  export type ChecklistResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * The data used to create many ChecklistResults.
     */
    data: ChecklistResultCreateManyInput | ChecklistResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistResult update
   */
  export type ChecklistResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistResult.
     */
    data: XOR<ChecklistResultUpdateInput, ChecklistResultUncheckedUpdateInput>
    /**
     * Choose, which ChecklistResult to update.
     */
    where: ChecklistResultWhereUniqueInput
  }

  /**
   * ChecklistResult updateMany
   */
  export type ChecklistResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistResults.
     */
    data: XOR<ChecklistResultUpdateManyMutationInput, ChecklistResultUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistResults to update
     */
    where?: ChecklistResultWhereInput
    /**
     * Limit how many ChecklistResults to update.
     */
    limit?: number
  }

  /**
   * ChecklistResult updateManyAndReturn
   */
  export type ChecklistResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * The data used to update ChecklistResults.
     */
    data: XOR<ChecklistResultUpdateManyMutationInput, ChecklistResultUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistResults to update
     */
    where?: ChecklistResultWhereInput
    /**
     * Limit how many ChecklistResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistResult upsert
   */
  export type ChecklistResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistResult to update in case it exists.
     */
    where: ChecklistResultWhereUniqueInput
    /**
     * In case the ChecklistResult found by the `where` argument doesn't exist, create a new ChecklistResult with this data.
     */
    create: XOR<ChecklistResultCreateInput, ChecklistResultUncheckedCreateInput>
    /**
     * In case the ChecklistResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistResultUpdateInput, ChecklistResultUncheckedUpdateInput>
  }

  /**
   * ChecklistResult delete
   */
  export type ChecklistResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
    /**
     * Filter which ChecklistResult to delete.
     */
    where: ChecklistResultWhereUniqueInput
  }

  /**
   * ChecklistResult deleteMany
   */
  export type ChecklistResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistResults to delete
     */
    where?: ChecklistResultWhereInput
    /**
     * Limit how many ChecklistResults to delete.
     */
    limit?: number
  }

  /**
   * ChecklistResult without action
   */
  export type ChecklistResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistResult
     */
    select?: ChecklistResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistResult
     */
    omit?: ChecklistResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistResultInclude<ExtArgs> | null
  }


  /**
   * Model InspectionSchedule
   */

  export type AggregateInspectionSchedule = {
    _count: InspectionScheduleCountAggregateOutputType | null
    _avg: InspectionScheduleAvgAggregateOutputType | null
    _sum: InspectionScheduleSumAggregateOutputType | null
    _min: InspectionScheduleMinAggregateOutputType | null
    _max: InspectionScheduleMaxAggregateOutputType | null
  }

  export type InspectionScheduleAvgAggregateOutputType = {
    validityDays: number | null
  }

  export type InspectionScheduleSumAggregateOutputType = {
    validityDays: number | null
  }

  export type InspectionScheduleMinAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    checklistId: string | null
    lastOrderId: string | null
    orderDate: Date | null
    validityDays: number | null
    nextDate: Date | null
    seen: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type InspectionScheduleMaxAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    checklistId: string | null
    lastOrderId: string | null
    orderDate: Date | null
    validityDays: number | null
    nextDate: Date | null
    seen: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type InspectionScheduleCountAggregateOutputType = {
    id: number
    equipmentId: number
    checklistId: number
    lastOrderId: number
    orderDate: number
    validityDays: number
    nextDate: number
    seen: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type InspectionScheduleAvgAggregateInputType = {
    validityDays?: true
  }

  export type InspectionScheduleSumAggregateInputType = {
    validityDays?: true
  }

  export type InspectionScheduleMinAggregateInputType = {
    id?: true
    equipmentId?: true
    checklistId?: true
    lastOrderId?: true
    orderDate?: true
    validityDays?: true
    nextDate?: true
    seen?: true
    createdBy?: true
    createdAt?: true
  }

  export type InspectionScheduleMaxAggregateInputType = {
    id?: true
    equipmentId?: true
    checklistId?: true
    lastOrderId?: true
    orderDate?: true
    validityDays?: true
    nextDate?: true
    seen?: true
    createdBy?: true
    createdAt?: true
  }

  export type InspectionScheduleCountAggregateInputType = {
    id?: true
    equipmentId?: true
    checklistId?: true
    lastOrderId?: true
    orderDate?: true
    validityDays?: true
    nextDate?: true
    seen?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type InspectionScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InspectionSchedule to aggregate.
     */
    where?: InspectionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionSchedules to fetch.
     */
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspectionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InspectionSchedules
    **/
    _count?: true | InspectionScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspectionScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspectionScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectionScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectionScheduleMaxAggregateInputType
  }

  export type GetInspectionScheduleAggregateType<T extends InspectionScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateInspectionSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspectionSchedule[P]>
      : GetScalarType<T[P], AggregateInspectionSchedule[P]>
  }




  export type InspectionScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionScheduleWhereInput
    orderBy?: InspectionScheduleOrderByWithAggregationInput | InspectionScheduleOrderByWithAggregationInput[]
    by: InspectionScheduleScalarFieldEnum[] | InspectionScheduleScalarFieldEnum
    having?: InspectionScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectionScheduleCountAggregateInputType | true
    _avg?: InspectionScheduleAvgAggregateInputType
    _sum?: InspectionScheduleSumAggregateInputType
    _min?: InspectionScheduleMinAggregateInputType
    _max?: InspectionScheduleMaxAggregateInputType
  }

  export type InspectionScheduleGroupByOutputType = {
    id: string
    equipmentId: string
    checklistId: string
    lastOrderId: string | null
    orderDate: Date
    validityDays: number
    nextDate: Date | null
    seen: boolean
    createdBy: string
    createdAt: Date
    _count: InspectionScheduleCountAggregateOutputType | null
    _avg: InspectionScheduleAvgAggregateOutputType | null
    _sum: InspectionScheduleSumAggregateOutputType | null
    _min: InspectionScheduleMinAggregateOutputType | null
    _max: InspectionScheduleMaxAggregateOutputType | null
  }

  type GetInspectionScheduleGroupByPayload<T extends InspectionScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectionScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectionScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectionScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], InspectionScheduleGroupByOutputType[P]>
        }
      >
    >


  export type InspectionScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    checklistId?: boolean
    lastOrderId?: boolean
    orderDate?: boolean
    validityDays?: boolean
    nextDate?: boolean
    seen?: boolean
    createdBy?: boolean
    createdAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    lastOrder?: boolean | InspectionSchedule$lastOrderArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionSchedule"]>

  export type InspectionScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    checklistId?: boolean
    lastOrderId?: boolean
    orderDate?: boolean
    validityDays?: boolean
    nextDate?: boolean
    seen?: boolean
    createdBy?: boolean
    createdAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    lastOrder?: boolean | InspectionSchedule$lastOrderArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionSchedule"]>

  export type InspectionScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    checklistId?: boolean
    lastOrderId?: boolean
    orderDate?: boolean
    validityDays?: boolean
    nextDate?: boolean
    seen?: boolean
    createdBy?: boolean
    createdAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    lastOrder?: boolean | InspectionSchedule$lastOrderArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionSchedule"]>

  export type InspectionScheduleSelectScalar = {
    id?: boolean
    equipmentId?: boolean
    checklistId?: boolean
    lastOrderId?: boolean
    orderDate?: boolean
    validityDays?: boolean
    nextDate?: boolean
    seen?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type InspectionScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipmentId" | "checklistId" | "lastOrderId" | "orderDate" | "validityDays" | "nextDate" | "seen" | "createdBy" | "createdAt", ExtArgs["result"]["inspectionSchedule"]>
  export type InspectionScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    lastOrder?: boolean | InspectionSchedule$lastOrderArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InspectionScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    lastOrder?: boolean | InspectionSchedule$lastOrderArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InspectionScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    lastOrder?: boolean | InspectionSchedule$lastOrderArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InspectionSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InspectionSchedule"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      checklist: Prisma.$ChecklistPayload<ExtArgs>
      lastOrder: Prisma.$ServiceOrderPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      equipmentId: string
      checklistId: string
      lastOrderId: string | null
      orderDate: Date
      validityDays: number
      nextDate: Date | null
      seen: boolean
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["inspectionSchedule"]>
    composites: {}
  }

  type InspectionScheduleGetPayload<S extends boolean | null | undefined | InspectionScheduleDefaultArgs> = $Result.GetResult<Prisma.$InspectionSchedulePayload, S>

  type InspectionScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspectionScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspectionScheduleCountAggregateInputType | true
    }

  export interface InspectionScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InspectionSchedule'], meta: { name: 'InspectionSchedule' } }
    /**
     * Find zero or one InspectionSchedule that matches the filter.
     * @param {InspectionScheduleFindUniqueArgs} args - Arguments to find a InspectionSchedule
     * @example
     * // Get one InspectionSchedule
     * const inspectionSchedule = await prisma.inspectionSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspectionScheduleFindUniqueArgs>(args: SelectSubset<T, InspectionScheduleFindUniqueArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InspectionSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspectionScheduleFindUniqueOrThrowArgs} args - Arguments to find a InspectionSchedule
     * @example
     * // Get one InspectionSchedule
     * const inspectionSchedule = await prisma.inspectionSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspectionScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, InspectionScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InspectionSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleFindFirstArgs} args - Arguments to find a InspectionSchedule
     * @example
     * // Get one InspectionSchedule
     * const inspectionSchedule = await prisma.inspectionSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspectionScheduleFindFirstArgs>(args?: SelectSubset<T, InspectionScheduleFindFirstArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InspectionSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleFindFirstOrThrowArgs} args - Arguments to find a InspectionSchedule
     * @example
     * // Get one InspectionSchedule
     * const inspectionSchedule = await prisma.inspectionSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspectionScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, InspectionScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InspectionSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InspectionSchedules
     * const inspectionSchedules = await prisma.inspectionSchedule.findMany()
     * 
     * // Get first 10 InspectionSchedules
     * const inspectionSchedules = await prisma.inspectionSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectionScheduleWithIdOnly = await prisma.inspectionSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspectionScheduleFindManyArgs>(args?: SelectSubset<T, InspectionScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InspectionSchedule.
     * @param {InspectionScheduleCreateArgs} args - Arguments to create a InspectionSchedule.
     * @example
     * // Create one InspectionSchedule
     * const InspectionSchedule = await prisma.inspectionSchedule.create({
     *   data: {
     *     // ... data to create a InspectionSchedule
     *   }
     * })
     * 
     */
    create<T extends InspectionScheduleCreateArgs>(args: SelectSubset<T, InspectionScheduleCreateArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InspectionSchedules.
     * @param {InspectionScheduleCreateManyArgs} args - Arguments to create many InspectionSchedules.
     * @example
     * // Create many InspectionSchedules
     * const inspectionSchedule = await prisma.inspectionSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspectionScheduleCreateManyArgs>(args?: SelectSubset<T, InspectionScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InspectionSchedules and returns the data saved in the database.
     * @param {InspectionScheduleCreateManyAndReturnArgs} args - Arguments to create many InspectionSchedules.
     * @example
     * // Create many InspectionSchedules
     * const inspectionSchedule = await prisma.inspectionSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InspectionSchedules and only return the `id`
     * const inspectionScheduleWithIdOnly = await prisma.inspectionSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InspectionScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, InspectionScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InspectionSchedule.
     * @param {InspectionScheduleDeleteArgs} args - Arguments to delete one InspectionSchedule.
     * @example
     * // Delete one InspectionSchedule
     * const InspectionSchedule = await prisma.inspectionSchedule.delete({
     *   where: {
     *     // ... filter to delete one InspectionSchedule
     *   }
     * })
     * 
     */
    delete<T extends InspectionScheduleDeleteArgs>(args: SelectSubset<T, InspectionScheduleDeleteArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InspectionSchedule.
     * @param {InspectionScheduleUpdateArgs} args - Arguments to update one InspectionSchedule.
     * @example
     * // Update one InspectionSchedule
     * const inspectionSchedule = await prisma.inspectionSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspectionScheduleUpdateArgs>(args: SelectSubset<T, InspectionScheduleUpdateArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InspectionSchedules.
     * @param {InspectionScheduleDeleteManyArgs} args - Arguments to filter InspectionSchedules to delete.
     * @example
     * // Delete a few InspectionSchedules
     * const { count } = await prisma.inspectionSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspectionScheduleDeleteManyArgs>(args?: SelectSubset<T, InspectionScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InspectionSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InspectionSchedules
     * const inspectionSchedule = await prisma.inspectionSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspectionScheduleUpdateManyArgs>(args: SelectSubset<T, InspectionScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InspectionSchedules and returns the data updated in the database.
     * @param {InspectionScheduleUpdateManyAndReturnArgs} args - Arguments to update many InspectionSchedules.
     * @example
     * // Update many InspectionSchedules
     * const inspectionSchedule = await prisma.inspectionSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InspectionSchedules and only return the `id`
     * const inspectionScheduleWithIdOnly = await prisma.inspectionSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InspectionScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, InspectionScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InspectionSchedule.
     * @param {InspectionScheduleUpsertArgs} args - Arguments to update or create a InspectionSchedule.
     * @example
     * // Update or create a InspectionSchedule
     * const inspectionSchedule = await prisma.inspectionSchedule.upsert({
     *   create: {
     *     // ... data to create a InspectionSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InspectionSchedule we want to update
     *   }
     * })
     */
    upsert<T extends InspectionScheduleUpsertArgs>(args: SelectSubset<T, InspectionScheduleUpsertArgs<ExtArgs>>): Prisma__InspectionScheduleClient<$Result.GetResult<Prisma.$InspectionSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InspectionSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleCountArgs} args - Arguments to filter InspectionSchedules to count.
     * @example
     * // Count the number of InspectionSchedules
     * const count = await prisma.inspectionSchedule.count({
     *   where: {
     *     // ... the filter for the InspectionSchedules we want to count
     *   }
     * })
    **/
    count<T extends InspectionScheduleCountArgs>(
      args?: Subset<T, InspectionScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectionScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InspectionSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InspectionScheduleAggregateArgs>(args: Subset<T, InspectionScheduleAggregateArgs>): Prisma.PrismaPromise<GetInspectionScheduleAggregateType<T>>

    /**
     * Group by InspectionSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InspectionScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspectionScheduleGroupByArgs['orderBy'] }
        : { orderBy?: InspectionScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InspectionScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectionScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InspectionSchedule model
   */
  readonly fields: InspectionScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InspectionSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspectionScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklist<T extends ChecklistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistDefaultArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastOrder<T extends InspectionSchedule$lastOrderArgs<ExtArgs> = {}>(args?: Subset<T, InspectionSchedule$lastOrderArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InspectionSchedule model
   */
  interface InspectionScheduleFieldRefs {
    readonly id: FieldRef<"InspectionSchedule", 'String'>
    readonly equipmentId: FieldRef<"InspectionSchedule", 'String'>
    readonly checklistId: FieldRef<"InspectionSchedule", 'String'>
    readonly lastOrderId: FieldRef<"InspectionSchedule", 'String'>
    readonly orderDate: FieldRef<"InspectionSchedule", 'DateTime'>
    readonly validityDays: FieldRef<"InspectionSchedule", 'Int'>
    readonly nextDate: FieldRef<"InspectionSchedule", 'DateTime'>
    readonly seen: FieldRef<"InspectionSchedule", 'Boolean'>
    readonly createdBy: FieldRef<"InspectionSchedule", 'String'>
    readonly createdAt: FieldRef<"InspectionSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InspectionSchedule findUnique
   */
  export type InspectionScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which InspectionSchedule to fetch.
     */
    where: InspectionScheduleWhereUniqueInput
  }

  /**
   * InspectionSchedule findUniqueOrThrow
   */
  export type InspectionScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which InspectionSchedule to fetch.
     */
    where: InspectionScheduleWhereUniqueInput
  }

  /**
   * InspectionSchedule findFirst
   */
  export type InspectionScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which InspectionSchedule to fetch.
     */
    where?: InspectionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionSchedules to fetch.
     */
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InspectionSchedules.
     */
    cursor?: InspectionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InspectionSchedules.
     */
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * InspectionSchedule findFirstOrThrow
   */
  export type InspectionScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which InspectionSchedule to fetch.
     */
    where?: InspectionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionSchedules to fetch.
     */
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InspectionSchedules.
     */
    cursor?: InspectionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InspectionSchedules.
     */
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * InspectionSchedule findMany
   */
  export type InspectionScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * Filter, which InspectionSchedules to fetch.
     */
    where?: InspectionScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionSchedules to fetch.
     */
    orderBy?: InspectionScheduleOrderByWithRelationInput | InspectionScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InspectionSchedules.
     */
    cursor?: InspectionScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionSchedules.
     */
    skip?: number
    distinct?: InspectionScheduleScalarFieldEnum | InspectionScheduleScalarFieldEnum[]
  }

  /**
   * InspectionSchedule create
   */
  export type InspectionScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a InspectionSchedule.
     */
    data: XOR<InspectionScheduleCreateInput, InspectionScheduleUncheckedCreateInput>
  }

  /**
   * InspectionSchedule createMany
   */
  export type InspectionScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InspectionSchedules.
     */
    data: InspectionScheduleCreateManyInput | InspectionScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InspectionSchedule createManyAndReturn
   */
  export type InspectionScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many InspectionSchedules.
     */
    data: InspectionScheduleCreateManyInput | InspectionScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InspectionSchedule update
   */
  export type InspectionScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a InspectionSchedule.
     */
    data: XOR<InspectionScheduleUpdateInput, InspectionScheduleUncheckedUpdateInput>
    /**
     * Choose, which InspectionSchedule to update.
     */
    where: InspectionScheduleWhereUniqueInput
  }

  /**
   * InspectionSchedule updateMany
   */
  export type InspectionScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InspectionSchedules.
     */
    data: XOR<InspectionScheduleUpdateManyMutationInput, InspectionScheduleUncheckedUpdateManyInput>
    /**
     * Filter which InspectionSchedules to update
     */
    where?: InspectionScheduleWhereInput
    /**
     * Limit how many InspectionSchedules to update.
     */
    limit?: number
  }

  /**
   * InspectionSchedule updateManyAndReturn
   */
  export type InspectionScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * The data used to update InspectionSchedules.
     */
    data: XOR<InspectionScheduleUpdateManyMutationInput, InspectionScheduleUncheckedUpdateManyInput>
    /**
     * Filter which InspectionSchedules to update
     */
    where?: InspectionScheduleWhereInput
    /**
     * Limit how many InspectionSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InspectionSchedule upsert
   */
  export type InspectionScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the InspectionSchedule to update in case it exists.
     */
    where: InspectionScheduleWhereUniqueInput
    /**
     * In case the InspectionSchedule found by the `where` argument doesn't exist, create a new InspectionSchedule with this data.
     */
    create: XOR<InspectionScheduleCreateInput, InspectionScheduleUncheckedCreateInput>
    /**
     * In case the InspectionSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspectionScheduleUpdateInput, InspectionScheduleUncheckedUpdateInput>
  }

  /**
   * InspectionSchedule delete
   */
  export type InspectionScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
    /**
     * Filter which InspectionSchedule to delete.
     */
    where: InspectionScheduleWhereUniqueInput
  }

  /**
   * InspectionSchedule deleteMany
   */
  export type InspectionScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InspectionSchedules to delete
     */
    where?: InspectionScheduleWhereInput
    /**
     * Limit how many InspectionSchedules to delete.
     */
    limit?: number
  }

  /**
   * InspectionSchedule.lastOrder
   */
  export type InspectionSchedule$lastOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
  }

  /**
   * InspectionSchedule without action
   */
  export type InspectionScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionSchedule
     */
    select?: InspectionScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionSchedule
     */
    omit?: InspectionScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionScheduleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    department: 'department',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type AccessScalarFieldEnum = (typeof AccessScalarFieldEnum)[keyof typeof AccessScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastRepairDate: 'lastRepairDate',
    nextRepairDate: 'nextRepairDate',
    daysBetweenRepairs: 'daysBetweenRepairs',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const SparePartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    weight: 'weight',
    material: 'material',
    unitCost: 'unitCost',
    quantity: 'quantity',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type SparePartScalarFieldEnum = (typeof SparePartScalarFieldEnum)[keyof typeof SparePartScalarFieldEnum]


  export const ServiceRequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    orderDate: 'orderDate',
    requestDate: 'requestDate',
    cost: 'cost',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum]


  export const ServiceOrderScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    equipmentId: 'equipmentId',
    orderDate: 'orderDate',
    startDate: 'startDate',
    endDate: 'endDate',
    totalCost: 'totalCost',
    type: 'type',
    notes: 'notes',
    isOpen: 'isOpen',
    isOperational: 'isOperational',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ServiceOrderScalarFieldEnum = (typeof ServiceOrderScalarFieldEnum)[keyof typeof ServiceOrderScalarFieldEnum]


  export const RepairServiceScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    orderId: 'orderId',
    usedEquipmentId: 'usedEquipmentId',
    startDate: 'startDate',
    endDate: 'endDate',
    cost: 'cost',
    orderDate: 'orderDate',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type RepairServiceScalarFieldEnum = (typeof RepairServiceScalarFieldEnum)[keyof typeof RepairServiceScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    equipmentId: 'equipmentId',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const ChecklistTaskScalarFieldEnum: {
    id: 'id',
    checklistId: 'checklistId',
    order: 'order',
    name: 'name',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ChecklistTaskScalarFieldEnum = (typeof ChecklistTaskScalarFieldEnum)[keyof typeof ChecklistTaskScalarFieldEnum]


  export const ChecklistResultScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    instance: 'instance',
    repairId: 'repairId',
    checked: 'checked',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ChecklistResultScalarFieldEnum = (typeof ChecklistResultScalarFieldEnum)[keyof typeof ChecklistResultScalarFieldEnum]


  export const InspectionScheduleScalarFieldEnum: {
    id: 'id',
    equipmentId: 'equipmentId',
    checklistId: 'checklistId',
    lastOrderId: 'lastOrderId',
    orderDate: 'orderDate',
    validityDays: 'validityDays',
    nextDate: 'nextDate',
    seen: 'seen',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type InspectionScheduleScalarFieldEnum = (typeof InspectionScheduleScalarFieldEnum)[keyof typeof InspectionScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'AccessLevel'
   */
  export type EnumAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessLevel'>
    


  /**
   * Reference to a field of type 'AccessLevel[]'
   */
  export type ListEnumAccessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessLevel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    access?: AccessListRelationFilter
    createdEquipment?: EquipmentListRelationFilter
    createdChecklists?: ChecklistListRelationFilter
    createdTasks?: ChecklistTaskListRelationFilter
    createdResults?: ChecklistResultListRelationFilter
    createdRequests?: ServiceRequestListRelationFilter
    createdOrders?: ServiceOrderListRelationFilter
    createdRepairs?: RepairServiceListRelationFilter
    createdSchedules?: InspectionScheduleListRelationFilter
    repairs?: RepairServiceListRelationFilter
    requests?: ServiceRequestListRelationFilter
    SparePart?: SparePartListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    access?: AccessOrderByRelationAggregateInput
    createdEquipment?: EquipmentOrderByRelationAggregateInput
    createdChecklists?: ChecklistOrderByRelationAggregateInput
    createdTasks?: ChecklistTaskOrderByRelationAggregateInput
    createdResults?: ChecklistResultOrderByRelationAggregateInput
    createdRequests?: ServiceRequestOrderByRelationAggregateInput
    createdOrders?: ServiceOrderOrderByRelationAggregateInput
    createdRepairs?: RepairServiceOrderByRelationAggregateInput
    createdSchedules?: InspectionScheduleOrderByRelationAggregateInput
    repairs?: RepairServiceOrderByRelationAggregateInput
    requests?: ServiceRequestOrderByRelationAggregateInput
    SparePart?: SparePartOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    access?: AccessListRelationFilter
    createdEquipment?: EquipmentListRelationFilter
    createdChecklists?: ChecklistListRelationFilter
    createdTasks?: ChecklistTaskListRelationFilter
    createdResults?: ChecklistResultListRelationFilter
    createdRequests?: ServiceRequestListRelationFilter
    createdOrders?: ServiceOrderListRelationFilter
    createdRepairs?: RepairServiceListRelationFilter
    createdSchedules?: InspectionScheduleListRelationFilter
    repairs?: RepairServiceListRelationFilter
    requests?: ServiceRequestListRelationFilter
    SparePart?: SparePartListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccessWhereInput = {
    AND?: AccessWhereInput | AccessWhereInput[]
    OR?: AccessWhereInput[]
    NOT?: AccessWhereInput | AccessWhereInput[]
    id?: StringFilter<"Access"> | string
    userId?: StringFilter<"Access"> | string
    department?: EnumDepartmentFilter<"Access"> | $Enums.Department
    level?: EnumAccessLevelFilter<"Access"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"Access"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_department?: AccessUserIdDepartmentCompoundUniqueInput
    AND?: AccessWhereInput | AccessWhereInput[]
    OR?: AccessWhereInput[]
    NOT?: AccessWhereInput | AccessWhereInput[]
    userId?: StringFilter<"Access"> | string
    department?: EnumDepartmentFilter<"Access"> | $Enums.Department
    level?: EnumAccessLevelFilter<"Access"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"Access"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_department">

  export type AccessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: AccessCountOrderByAggregateInput
    _max?: AccessMaxOrderByAggregateInput
    _min?: AccessMinOrderByAggregateInput
  }

  export type AccessScalarWhereWithAggregatesInput = {
    AND?: AccessScalarWhereWithAggregatesInput | AccessScalarWhereWithAggregatesInput[]
    OR?: AccessScalarWhereWithAggregatesInput[]
    NOT?: AccessScalarWhereWithAggregatesInput | AccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Access"> | string
    userId?: StringWithAggregatesFilter<"Access"> | string
    department?: EnumDepartmentWithAggregatesFilter<"Access"> | $Enums.Department
    level?: EnumAccessLevelWithAggregatesFilter<"Access"> | $Enums.AccessLevel
    createdAt?: DateTimeWithAggregatesFilter<"Access"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    lastRepairDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    nextRepairDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    daysBetweenRepairs?: IntNullableFilter<"Equipment"> | number | null
    createdBy?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    serviceOrders?: ServiceOrderListRelationFilter
    repairServices?: RepairServiceListRelationFilter
    checklists?: ChecklistListRelationFilter
    inspectionSchedules?: InspectionScheduleListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastRepairDate?: SortOrderInput | SortOrder
    nextRepairDate?: SortOrderInput | SortOrder
    daysBetweenRepairs?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    serviceOrders?: ServiceOrderOrderByRelationAggregateInput
    repairServices?: RepairServiceOrderByRelationAggregateInput
    checklists?: ChecklistOrderByRelationAggregateInput
    inspectionSchedules?: InspectionScheduleOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    lastRepairDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    nextRepairDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    daysBetweenRepairs?: IntNullableFilter<"Equipment"> | number | null
    createdBy?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    serviceOrders?: ServiceOrderListRelationFilter
    repairServices?: RepairServiceListRelationFilter
    checklists?: ChecklistListRelationFilter
    inspectionSchedules?: InspectionScheduleListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastRepairDate?: SortOrderInput | SortOrder
    nextRepairDate?: SortOrderInput | SortOrder
    daysBetweenRepairs?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    name?: StringWithAggregatesFilter<"Equipment"> | string
    lastRepairDate?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    nextRepairDate?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    daysBetweenRepairs?: IntNullableWithAggregatesFilter<"Equipment"> | number | null
    createdBy?: StringWithAggregatesFilter<"Equipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type SparePartWhereInput = {
    AND?: SparePartWhereInput | SparePartWhereInput[]
    OR?: SparePartWhereInput[]
    NOT?: SparePartWhereInput | SparePartWhereInput[]
    id?: StringFilter<"SparePart"> | string
    name?: StringFilter<"SparePart"> | string
    weight?: FloatFilter<"SparePart"> | number
    material?: StringFilter<"SparePart"> | string
    unitCost?: FloatFilter<"SparePart"> | number
    quantity?: IntFilter<"SparePart"> | number
    createdBy?: StringFilter<"SparePart"> | string
    createdAt?: DateTimeFilter<"SparePart"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    usedIn?: RepairServiceListRelationFilter
  }

  export type SparePartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    material?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    usedIn?: RepairServiceOrderByRelationAggregateInput
  }

  export type SparePartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SparePartWhereInput | SparePartWhereInput[]
    OR?: SparePartWhereInput[]
    NOT?: SparePartWhereInput | SparePartWhereInput[]
    name?: StringFilter<"SparePart"> | string
    weight?: FloatFilter<"SparePart"> | number
    material?: StringFilter<"SparePart"> | string
    unitCost?: FloatFilter<"SparePart"> | number
    quantity?: IntFilter<"SparePart"> | number
    createdBy?: StringFilter<"SparePart"> | string
    createdAt?: DateTimeFilter<"SparePart"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    usedIn?: RepairServiceListRelationFilter
  }, "id">

  export type SparePartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    material?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: SparePartCountOrderByAggregateInput
    _avg?: SparePartAvgOrderByAggregateInput
    _max?: SparePartMaxOrderByAggregateInput
    _min?: SparePartMinOrderByAggregateInput
    _sum?: SparePartSumOrderByAggregateInput
  }

  export type SparePartScalarWhereWithAggregatesInput = {
    AND?: SparePartScalarWhereWithAggregatesInput | SparePartScalarWhereWithAggregatesInput[]
    OR?: SparePartScalarWhereWithAggregatesInput[]
    NOT?: SparePartScalarWhereWithAggregatesInput | SparePartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SparePart"> | string
    name?: StringWithAggregatesFilter<"SparePart"> | string
    weight?: FloatWithAggregatesFilter<"SparePart"> | number
    material?: StringWithAggregatesFilter<"SparePart"> | string
    unitCost?: FloatWithAggregatesFilter<"SparePart"> | number
    quantity?: IntWithAggregatesFilter<"SparePart"> | number
    createdBy?: StringWithAggregatesFilter<"SparePart"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SparePart"> | Date | string
  }

  export type ServiceRequestWhereInput = {
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    id?: StringFilter<"ServiceRequest"> | string
    requesterId?: StringFilter<"ServiceRequest"> | string
    orderDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    requestDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    cost?: FloatFilter<"ServiceRequest"> | number
    createdBy?: StringFilter<"ServiceRequest"> | string
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    serviceOrder?: XOR<ServiceOrderNullableScalarRelationFilter, ServiceOrderWhereInput> | null
  }

  export type ServiceRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    orderDate?: SortOrder
    requestDate?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    requester?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    serviceOrder?: ServiceOrderOrderByWithRelationInput
  }

  export type ServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    requesterId?: StringFilter<"ServiceRequest"> | string
    orderDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    requestDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    cost?: FloatFilter<"ServiceRequest"> | number
    createdBy?: StringFilter<"ServiceRequest"> | string
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    serviceOrder?: XOR<ServiceOrderNullableScalarRelationFilter, ServiceOrderWhereInput> | null
  }, "id">

  export type ServiceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    orderDate?: SortOrder
    requestDate?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceRequestCountOrderByAggregateInput
    _avg?: ServiceRequestAvgOrderByAggregateInput
    _max?: ServiceRequestMaxOrderByAggregateInput
    _min?: ServiceRequestMinOrderByAggregateInput
    _sum?: ServiceRequestSumOrderByAggregateInput
  }

  export type ServiceRequestScalarWhereWithAggregatesInput = {
    AND?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    OR?: ServiceRequestScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceRequest"> | string
    requesterId?: StringWithAggregatesFilter<"ServiceRequest"> | string
    orderDate?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    requestDate?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    cost?: FloatWithAggregatesFilter<"ServiceRequest"> | number
    createdBy?: StringWithAggregatesFilter<"ServiceRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
  }

  export type ServiceOrderWhereInput = {
    AND?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    OR?: ServiceOrderWhereInput[]
    NOT?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    id?: StringFilter<"ServiceOrder"> | string
    requestId?: StringFilter<"ServiceOrder"> | string
    equipmentId?: StringFilter<"ServiceOrder"> | string
    orderDate?: DateTimeFilter<"ServiceOrder"> | Date | string
    startDate?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    totalCost?: FloatFilter<"ServiceOrder"> | number
    type?: BoolFilter<"ServiceOrder"> | boolean
    notes?: StringNullableFilter<"ServiceOrder"> | string | null
    isOpen?: BoolFilter<"ServiceOrder"> | boolean
    isOperational?: BoolFilter<"ServiceOrder"> | boolean
    createdBy?: StringFilter<"ServiceOrder"> | string
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    request?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    repairServices?: RepairServiceListRelationFilter
    inspectionSchedules?: InspectionScheduleListRelationFilter
  }

  export type ServiceOrderOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    equipmentId?: SortOrder
    orderDate?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    totalCost?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    isOpen?: SortOrder
    isOperational?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    request?: ServiceRequestOrderByWithRelationInput
    equipment?: EquipmentOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    repairServices?: RepairServiceOrderByRelationAggregateInput
    inspectionSchedules?: InspectionScheduleOrderByRelationAggregateInput
  }

  export type ServiceOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    OR?: ServiceOrderWhereInput[]
    NOT?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    equipmentId?: StringFilter<"ServiceOrder"> | string
    orderDate?: DateTimeFilter<"ServiceOrder"> | Date | string
    startDate?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    totalCost?: FloatFilter<"ServiceOrder"> | number
    type?: BoolFilter<"ServiceOrder"> | boolean
    notes?: StringNullableFilter<"ServiceOrder"> | string | null
    isOpen?: BoolFilter<"ServiceOrder"> | boolean
    isOperational?: BoolFilter<"ServiceOrder"> | boolean
    createdBy?: StringFilter<"ServiceOrder"> | string
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    request?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    repairServices?: RepairServiceListRelationFilter
    inspectionSchedules?: InspectionScheduleListRelationFilter
  }, "id" | "requestId">

  export type ServiceOrderOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    equipmentId?: SortOrder
    orderDate?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    totalCost?: SortOrder
    type?: SortOrder
    notes?: SortOrderInput | SortOrder
    isOpen?: SortOrder
    isOperational?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceOrderCountOrderByAggregateInput
    _avg?: ServiceOrderAvgOrderByAggregateInput
    _max?: ServiceOrderMaxOrderByAggregateInput
    _min?: ServiceOrderMinOrderByAggregateInput
    _sum?: ServiceOrderSumOrderByAggregateInput
  }

  export type ServiceOrderScalarWhereWithAggregatesInput = {
    AND?: ServiceOrderScalarWhereWithAggregatesInput | ServiceOrderScalarWhereWithAggregatesInput[]
    OR?: ServiceOrderScalarWhereWithAggregatesInput[]
    NOT?: ServiceOrderScalarWhereWithAggregatesInput | ServiceOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceOrder"> | string
    requestId?: StringWithAggregatesFilter<"ServiceOrder"> | string
    equipmentId?: StringWithAggregatesFilter<"ServiceOrder"> | string
    orderDate?: DateTimeWithAggregatesFilter<"ServiceOrder"> | Date | string
    startDate?: DateTimeNullableWithAggregatesFilter<"ServiceOrder"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"ServiceOrder"> | Date | string | null
    totalCost?: FloatWithAggregatesFilter<"ServiceOrder"> | number
    type?: BoolWithAggregatesFilter<"ServiceOrder"> | boolean
    notes?: StringNullableWithAggregatesFilter<"ServiceOrder"> | string | null
    isOpen?: BoolWithAggregatesFilter<"ServiceOrder"> | boolean
    isOperational?: BoolWithAggregatesFilter<"ServiceOrder"> | boolean
    createdBy?: StringWithAggregatesFilter<"ServiceOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceOrder"> | Date | string
  }

  export type RepairServiceWhereInput = {
    AND?: RepairServiceWhereInput | RepairServiceWhereInput[]
    OR?: RepairServiceWhereInput[]
    NOT?: RepairServiceWhereInput | RepairServiceWhereInput[]
    id?: StringFilter<"RepairService"> | string
    employeeId?: StringFilter<"RepairService"> | string
    orderId?: StringFilter<"RepairService"> | string
    usedEquipmentId?: StringFilter<"RepairService"> | string
    startDate?: DateTimeNullableFilter<"RepairService"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RepairService"> | Date | string | null
    cost?: FloatFilter<"RepairService"> | number
    orderDate?: DateTimeFilter<"RepairService"> | Date | string
    createdBy?: StringFilter<"RepairService"> | string
    createdAt?: DateTimeFilter<"RepairService"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
    usedEquipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    partsUsed?: SparePartListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    checklistResults?: ChecklistResultListRelationFilter
  }

  export type RepairServiceOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orderId?: SortOrder
    usedEquipmentId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    cost?: SortOrder
    orderDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    employee?: UserOrderByWithRelationInput
    order?: ServiceOrderOrderByWithRelationInput
    usedEquipment?: EquipmentOrderByWithRelationInput
    partsUsed?: SparePartOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    checklistResults?: ChecklistResultOrderByRelationAggregateInput
  }

  export type RepairServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RepairServiceWhereInput | RepairServiceWhereInput[]
    OR?: RepairServiceWhereInput[]
    NOT?: RepairServiceWhereInput | RepairServiceWhereInput[]
    employeeId?: StringFilter<"RepairService"> | string
    orderId?: StringFilter<"RepairService"> | string
    usedEquipmentId?: StringFilter<"RepairService"> | string
    startDate?: DateTimeNullableFilter<"RepairService"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RepairService"> | Date | string | null
    cost?: FloatFilter<"RepairService"> | number
    orderDate?: DateTimeFilter<"RepairService"> | Date | string
    createdBy?: StringFilter<"RepairService"> | string
    createdAt?: DateTimeFilter<"RepairService"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
    usedEquipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    partsUsed?: SparePartListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    checklistResults?: ChecklistResultListRelationFilter
  }, "id">

  export type RepairServiceOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orderId?: SortOrder
    usedEquipmentId?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    cost?: SortOrder
    orderDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: RepairServiceCountOrderByAggregateInput
    _avg?: RepairServiceAvgOrderByAggregateInput
    _max?: RepairServiceMaxOrderByAggregateInput
    _min?: RepairServiceMinOrderByAggregateInput
    _sum?: RepairServiceSumOrderByAggregateInput
  }

  export type RepairServiceScalarWhereWithAggregatesInput = {
    AND?: RepairServiceScalarWhereWithAggregatesInput | RepairServiceScalarWhereWithAggregatesInput[]
    OR?: RepairServiceScalarWhereWithAggregatesInput[]
    NOT?: RepairServiceScalarWhereWithAggregatesInput | RepairServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RepairService"> | string
    employeeId?: StringWithAggregatesFilter<"RepairService"> | string
    orderId?: StringWithAggregatesFilter<"RepairService"> | string
    usedEquipmentId?: StringWithAggregatesFilter<"RepairService"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"RepairService"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"RepairService"> | Date | string | null
    cost?: FloatWithAggregatesFilter<"RepairService"> | number
    orderDate?: DateTimeWithAggregatesFilter<"RepairService"> | Date | string
    createdBy?: StringWithAggregatesFilter<"RepairService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RepairService"> | Date | string
  }

  export type ChecklistWhereInput = {
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    id?: StringFilter<"Checklist"> | string
    equipmentId?: StringFilter<"Checklist"> | string
    createdBy?: StringFilter<"Checklist"> | string
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: ChecklistTaskListRelationFilter
    inspectionSchedules?: InspectionScheduleListRelationFilter
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    tasks?: ChecklistTaskOrderByRelationAggregateInput
    inspectionSchedules?: InspectionScheduleOrderByRelationAggregateInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    equipmentId?: StringFilter<"Checklist"> | string
    createdBy?: StringFilter<"Checklist"> | string
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: ChecklistTaskListRelationFilter
    inspectionSchedules?: InspectionScheduleListRelationFilter
  }, "id">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ChecklistCountOrderByAggregateInput
    _max?: ChecklistMaxOrderByAggregateInput
    _min?: ChecklistMinOrderByAggregateInput
  }

  export type ChecklistScalarWhereWithAggregatesInput = {
    AND?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    OR?: ChecklistScalarWhereWithAggregatesInput[]
    NOT?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checklist"> | string
    equipmentId?: StringWithAggregatesFilter<"Checklist"> | string
    createdBy?: StringWithAggregatesFilter<"Checklist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
  }

  export type ChecklistTaskWhereInput = {
    AND?: ChecklistTaskWhereInput | ChecklistTaskWhereInput[]
    OR?: ChecklistTaskWhereInput[]
    NOT?: ChecklistTaskWhereInput | ChecklistTaskWhereInput[]
    id?: StringFilter<"ChecklistTask"> | string
    checklistId?: StringFilter<"ChecklistTask"> | string
    order?: IntFilter<"ChecklistTask"> | number
    name?: StringFilter<"ChecklistTask"> | string
    createdBy?: StringFilter<"ChecklistTask"> | string
    createdAt?: DateTimeFilter<"ChecklistTask"> | Date | string
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    results?: ChecklistResultListRelationFilter
  }

  export type ChecklistTaskOrderByWithRelationInput = {
    id?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    checklist?: ChecklistOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    results?: ChecklistResultOrderByRelationAggregateInput
  }

  export type ChecklistTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistTaskWhereInput | ChecklistTaskWhereInput[]
    OR?: ChecklistTaskWhereInput[]
    NOT?: ChecklistTaskWhereInput | ChecklistTaskWhereInput[]
    checklistId?: StringFilter<"ChecklistTask"> | string
    order?: IntFilter<"ChecklistTask"> | number
    name?: StringFilter<"ChecklistTask"> | string
    createdBy?: StringFilter<"ChecklistTask"> | string
    createdAt?: DateTimeFilter<"ChecklistTask"> | Date | string
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    results?: ChecklistResultListRelationFilter
  }, "id">

  export type ChecklistTaskOrderByWithAggregationInput = {
    id?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ChecklistTaskCountOrderByAggregateInput
    _avg?: ChecklistTaskAvgOrderByAggregateInput
    _max?: ChecklistTaskMaxOrderByAggregateInput
    _min?: ChecklistTaskMinOrderByAggregateInput
    _sum?: ChecklistTaskSumOrderByAggregateInput
  }

  export type ChecklistTaskScalarWhereWithAggregatesInput = {
    AND?: ChecklistTaskScalarWhereWithAggregatesInput | ChecklistTaskScalarWhereWithAggregatesInput[]
    OR?: ChecklistTaskScalarWhereWithAggregatesInput[]
    NOT?: ChecklistTaskScalarWhereWithAggregatesInput | ChecklistTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistTask"> | string
    checklistId?: StringWithAggregatesFilter<"ChecklistTask"> | string
    order?: IntWithAggregatesFilter<"ChecklistTask"> | number
    name?: StringWithAggregatesFilter<"ChecklistTask"> | string
    createdBy?: StringWithAggregatesFilter<"ChecklistTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChecklistTask"> | Date | string
  }

  export type ChecklistResultWhereInput = {
    AND?: ChecklistResultWhereInput | ChecklistResultWhereInput[]
    OR?: ChecklistResultWhereInput[]
    NOT?: ChecklistResultWhereInput | ChecklistResultWhereInput[]
    id?: StringFilter<"ChecklistResult"> | string
    taskId?: StringFilter<"ChecklistResult"> | string
    instance?: IntFilter<"ChecklistResult"> | number
    repairId?: StringFilter<"ChecklistResult"> | string
    checked?: BoolFilter<"ChecklistResult"> | boolean
    createdBy?: StringFilter<"ChecklistResult"> | string
    createdAt?: DateTimeFilter<"ChecklistResult"> | Date | string
    task?: XOR<ChecklistTaskScalarRelationFilter, ChecklistTaskWhereInput>
    repair?: XOR<RepairServiceScalarRelationFilter, RepairServiceWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChecklistResultOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    instance?: SortOrder
    repairId?: SortOrder
    checked?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    task?: ChecklistTaskOrderByWithRelationInput
    repair?: RepairServiceOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type ChecklistResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistResultWhereInput | ChecklistResultWhereInput[]
    OR?: ChecklistResultWhereInput[]
    NOT?: ChecklistResultWhereInput | ChecklistResultWhereInput[]
    taskId?: StringFilter<"ChecklistResult"> | string
    instance?: IntFilter<"ChecklistResult"> | number
    repairId?: StringFilter<"ChecklistResult"> | string
    checked?: BoolFilter<"ChecklistResult"> | boolean
    createdBy?: StringFilter<"ChecklistResult"> | string
    createdAt?: DateTimeFilter<"ChecklistResult"> | Date | string
    task?: XOR<ChecklistTaskScalarRelationFilter, ChecklistTaskWhereInput>
    repair?: XOR<RepairServiceScalarRelationFilter, RepairServiceWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChecklistResultOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    instance?: SortOrder
    repairId?: SortOrder
    checked?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ChecklistResultCountOrderByAggregateInput
    _avg?: ChecklistResultAvgOrderByAggregateInput
    _max?: ChecklistResultMaxOrderByAggregateInput
    _min?: ChecklistResultMinOrderByAggregateInput
    _sum?: ChecklistResultSumOrderByAggregateInput
  }

  export type ChecklistResultScalarWhereWithAggregatesInput = {
    AND?: ChecklistResultScalarWhereWithAggregatesInput | ChecklistResultScalarWhereWithAggregatesInput[]
    OR?: ChecklistResultScalarWhereWithAggregatesInput[]
    NOT?: ChecklistResultScalarWhereWithAggregatesInput | ChecklistResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistResult"> | string
    taskId?: StringWithAggregatesFilter<"ChecklistResult"> | string
    instance?: IntWithAggregatesFilter<"ChecklistResult"> | number
    repairId?: StringWithAggregatesFilter<"ChecklistResult"> | string
    checked?: BoolWithAggregatesFilter<"ChecklistResult"> | boolean
    createdBy?: StringWithAggregatesFilter<"ChecklistResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChecklistResult"> | Date | string
  }

  export type InspectionScheduleWhereInput = {
    AND?: InspectionScheduleWhereInput | InspectionScheduleWhereInput[]
    OR?: InspectionScheduleWhereInput[]
    NOT?: InspectionScheduleWhereInput | InspectionScheduleWhereInput[]
    id?: StringFilter<"InspectionSchedule"> | string
    equipmentId?: StringFilter<"InspectionSchedule"> | string
    checklistId?: StringFilter<"InspectionSchedule"> | string
    lastOrderId?: StringNullableFilter<"InspectionSchedule"> | string | null
    orderDate?: DateTimeFilter<"InspectionSchedule"> | Date | string
    validityDays?: IntFilter<"InspectionSchedule"> | number
    nextDate?: DateTimeNullableFilter<"InspectionSchedule"> | Date | string | null
    seen?: BoolFilter<"InspectionSchedule"> | boolean
    createdBy?: StringFilter<"InspectionSchedule"> | string
    createdAt?: DateTimeFilter<"InspectionSchedule"> | Date | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
    lastOrder?: XOR<ServiceOrderNullableScalarRelationFilter, ServiceOrderWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InspectionScheduleOrderByWithRelationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    checklistId?: SortOrder
    lastOrderId?: SortOrderInput | SortOrder
    orderDate?: SortOrder
    validityDays?: SortOrder
    nextDate?: SortOrderInput | SortOrder
    seen?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    checklist?: ChecklistOrderByWithRelationInput
    lastOrder?: ServiceOrderOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type InspectionScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InspectionScheduleWhereInput | InspectionScheduleWhereInput[]
    OR?: InspectionScheduleWhereInput[]
    NOT?: InspectionScheduleWhereInput | InspectionScheduleWhereInput[]
    equipmentId?: StringFilter<"InspectionSchedule"> | string
    checklistId?: StringFilter<"InspectionSchedule"> | string
    lastOrderId?: StringNullableFilter<"InspectionSchedule"> | string | null
    orderDate?: DateTimeFilter<"InspectionSchedule"> | Date | string
    validityDays?: IntFilter<"InspectionSchedule"> | number
    nextDate?: DateTimeNullableFilter<"InspectionSchedule"> | Date | string | null
    seen?: BoolFilter<"InspectionSchedule"> | boolean
    createdBy?: StringFilter<"InspectionSchedule"> | string
    createdAt?: DateTimeFilter<"InspectionSchedule"> | Date | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
    lastOrder?: XOR<ServiceOrderNullableScalarRelationFilter, ServiceOrderWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InspectionScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    checklistId?: SortOrder
    lastOrderId?: SortOrderInput | SortOrder
    orderDate?: SortOrder
    validityDays?: SortOrder
    nextDate?: SortOrderInput | SortOrder
    seen?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: InspectionScheduleCountOrderByAggregateInput
    _avg?: InspectionScheduleAvgOrderByAggregateInput
    _max?: InspectionScheduleMaxOrderByAggregateInput
    _min?: InspectionScheduleMinOrderByAggregateInput
    _sum?: InspectionScheduleSumOrderByAggregateInput
  }

  export type InspectionScheduleScalarWhereWithAggregatesInput = {
    AND?: InspectionScheduleScalarWhereWithAggregatesInput | InspectionScheduleScalarWhereWithAggregatesInput[]
    OR?: InspectionScheduleScalarWhereWithAggregatesInput[]
    NOT?: InspectionScheduleScalarWhereWithAggregatesInput | InspectionScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InspectionSchedule"> | string
    equipmentId?: StringWithAggregatesFilter<"InspectionSchedule"> | string
    checklistId?: StringWithAggregatesFilter<"InspectionSchedule"> | string
    lastOrderId?: StringNullableWithAggregatesFilter<"InspectionSchedule"> | string | null
    orderDate?: DateTimeWithAggregatesFilter<"InspectionSchedule"> | Date | string
    validityDays?: IntWithAggregatesFilter<"InspectionSchedule"> | number
    nextDate?: DateTimeNullableWithAggregatesFilter<"InspectionSchedule"> | Date | string | null
    seen?: BoolWithAggregatesFilter<"InspectionSchedule"> | boolean
    createdBy?: StringWithAggregatesFilter<"InspectionSchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InspectionSchedule"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessCreateInput = {
    id?: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAccessInput
  }

  export type AccessUncheckedCreateInput = {
    id?: string
    userId: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type AccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessNestedInput
  }

  export type AccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessCreateManyInput = {
    id?: string
    userId: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type AccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedEquipmentInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdBy: string
    createdAt?: Date | string
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedEquipmentNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUncheckedUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdBy: string
    createdAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartCreateInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutSparePartInput
    usedIn?: RepairServiceCreateNestedManyWithoutPartsUsedInput
  }

  export type SparePartUncheckedCreateInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdBy: string
    createdAt?: Date | string
    usedIn?: RepairServiceUncheckedCreateNestedManyWithoutPartsUsedInput
  }

  export type SparePartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutSparePartNestedInput
    usedIn?: RepairServiceUpdateManyWithoutPartsUsedNestedInput
  }

  export type SparePartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedIn?: RepairServiceUncheckedUpdateManyWithoutPartsUsedNestedInput
  }

  export type SparePartCreateManyInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdBy: string
    createdAt?: Date | string
  }

  export type SparePartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestCreateInput = {
    id?: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsInput
    creator: UserCreateNestedOneWithoutCreatedRequestsInput
    serviceOrder?: ServiceOrderCreateNestedOneWithoutRequestInput
  }

  export type ServiceRequestUncheckedCreateInput = {
    id?: string
    requesterId: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdBy: string
    createdAt?: Date | string
    serviceOrder?: ServiceOrderUncheckedCreateNestedOneWithoutRequestInput
  }

  export type ServiceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRequestsNestedInput
    serviceOrder?: ServiceOrderUpdateOneWithoutRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrder?: ServiceOrderUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type ServiceRequestCreateManyInput = {
    id?: string
    requesterId: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdBy: string
    createdAt?: Date | string
  }

  export type ServiceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderCreateInput = {
    id?: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    request: ServiceRequestCreateNestedOneWithoutServiceOrderInput
    equipment: EquipmentCreateNestedOneWithoutServiceOrdersInput
    creator: UserCreateNestedOneWithoutCreatedOrdersInput
    repairServices?: RepairServiceCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderUncheckedCreateInput = {
    id?: string
    requestId: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: ServiceRequestUpdateOneRequiredWithoutServiceOrderNestedInput
    equipment?: EquipmentUpdateOneRequiredWithoutServiceOrdersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    repairServices?: RepairServiceUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairServices?: RepairServiceUncheckedUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderCreateManyInput = {
    id?: string
    requestId: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ServiceOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceCreateInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutRepairsInput
    order: ServiceOrderCreateNestedOneWithoutRepairServicesInput
    usedEquipment: EquipmentCreateNestedOneWithoutRepairServicesInput
    partsUsed?: SparePartCreateNestedManyWithoutUsedInInput
    creator: UserCreateNestedOneWithoutCreatedRepairsInput
    checklistResults?: ChecklistResultCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUncheckedCreateInput = {
    id?: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
    partsUsed?: SparePartUncheckedCreateNestedManyWithoutUsedInInput
    checklistResults?: ChecklistResultUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutRepairsNestedInput
    order?: ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput
    usedEquipment?: EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput
    partsUsed?: SparePartUpdateManyWithoutUsedInNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRepairsNestedInput
    checklistResults?: ChecklistResultUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partsUsed?: SparePartUncheckedUpdateManyWithoutUsedInNestedInput
    checklistResults?: ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceCreateManyInput = {
    id?: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
  }

  export type RepairServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCreateInput = {
    id?: string
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutChecklistsInput
    creator: UserCreateNestedOneWithoutCreatedChecklistsInput
    tasks?: ChecklistTaskCreateNestedManyWithoutChecklistInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: string
    equipmentId: string
    createdBy: string
    createdAt?: Date | string
    tasks?: ChecklistTaskUncheckedCreateNestedManyWithoutChecklistInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutChecklistsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedChecklistsNestedInput
    tasks?: ChecklistTaskUpdateManyWithoutChecklistNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: ChecklistTaskUncheckedUpdateManyWithoutChecklistNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistCreateManyInput = {
    id?: string
    equipmentId: string
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistTaskCreateInput = {
    id?: string
    order: number
    name: string
    createdAt?: Date | string
    checklist: ChecklistCreateNestedOneWithoutTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
    results?: ChecklistResultCreateNestedManyWithoutTaskInput
  }

  export type ChecklistTaskUncheckedCreateInput = {
    id?: string
    checklistId: string
    order: number
    name: string
    createdBy: string
    createdAt?: Date | string
    results?: ChecklistResultUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChecklistTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneRequiredWithoutTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    results?: ChecklistResultUpdateManyWithoutTaskNestedInput
  }

  export type ChecklistTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ChecklistResultUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChecklistTaskCreateManyInput = {
    id?: string
    checklistId: string
    order: number
    name: string
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultCreateInput = {
    id?: string
    instance: number
    checked: boolean
    createdAt?: Date | string
    task: ChecklistTaskCreateNestedOneWithoutResultsInput
    repair: RepairServiceCreateNestedOneWithoutChecklistResultsInput
    creator: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ChecklistResultUncheckedCreateInput = {
    id?: string
    taskId: string
    instance: number
    repairId: string
    checked: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: ChecklistTaskUpdateOneRequiredWithoutResultsNestedInput
    repair?: RepairServiceUpdateOneRequiredWithoutChecklistResultsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedResultsNestedInput
  }

  export type ChecklistResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    repairId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultCreateManyInput = {
    id?: string
    taskId: string
    instance: number
    repairId: string
    checked: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    repairId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleCreateInput = {
    id?: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutInspectionSchedulesInput
    checklist: ChecklistCreateNestedOneWithoutInspectionSchedulesInput
    lastOrder?: ServiceOrderCreateNestedOneWithoutInspectionSchedulesInput
    creator: UserCreateNestedOneWithoutCreatedSchedulesInput
  }

  export type InspectionScheduleUncheckedCreateInput = {
    id?: string
    equipmentId: string
    checklistId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    checklist?: ChecklistUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    lastOrder?: ServiceOrderUpdateOneWithoutInspectionSchedulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput
  }

  export type InspectionScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleCreateManyInput = {
    id?: string
    equipmentId: string
    checklistId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccessListRelationFilter = {
    every?: AccessWhereInput
    some?: AccessWhereInput
    none?: AccessWhereInput
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type ChecklistListRelationFilter = {
    every?: ChecklistWhereInput
    some?: ChecklistWhereInput
    none?: ChecklistWhereInput
  }

  export type ChecklistTaskListRelationFilter = {
    every?: ChecklistTaskWhereInput
    some?: ChecklistTaskWhereInput
    none?: ChecklistTaskWhereInput
  }

  export type ChecklistResultListRelationFilter = {
    every?: ChecklistResultWhereInput
    some?: ChecklistResultWhereInput
    none?: ChecklistResultWhereInput
  }

  export type ServiceRequestListRelationFilter = {
    every?: ServiceRequestWhereInput
    some?: ServiceRequestWhereInput
    none?: ServiceRequestWhereInput
  }

  export type ServiceOrderListRelationFilter = {
    every?: ServiceOrderWhereInput
    some?: ServiceOrderWhereInput
    none?: ServiceOrderWhereInput
  }

  export type RepairServiceListRelationFilter = {
    every?: RepairServiceWhereInput
    some?: RepairServiceWhereInput
    none?: RepairServiceWhereInput
  }

  export type InspectionScheduleListRelationFilter = {
    every?: InspectionScheduleWhereInput
    some?: InspectionScheduleWhereInput
    none?: InspectionScheduleWhereInput
  }

  export type SparePartListRelationFilter = {
    every?: SparePartWhereInput
    some?: SparePartWhereInput
    none?: SparePartWhereInput
  }

  export type AccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InspectionScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SparePartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type EnumAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelFilter<$PrismaModel> | $Enums.AccessLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccessUserIdDepartmentCompoundUniqueInput = {
    userId: string
    department: $Enums.Department
  }

  export type AccessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type AccessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type AccessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type EnumAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.AccessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessLevelFilter<$PrismaModel>
    _max?: NestedEnumAccessLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastRepairDate?: SortOrder
    nextRepairDate?: SortOrder
    daysBetweenRepairs?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    daysBetweenRepairs?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastRepairDate?: SortOrder
    nextRepairDate?: SortOrder
    daysBetweenRepairs?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastRepairDate?: SortOrder
    nextRepairDate?: SortOrder
    daysBetweenRepairs?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    daysBetweenRepairs?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SparePartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    material?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SparePartAvgOrderByAggregateInput = {
    weight?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
  }

  export type SparePartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    material?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SparePartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    weight?: SortOrder
    material?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SparePartSumOrderByAggregateInput = {
    weight?: SortOrder
    unitCost?: SortOrder
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ServiceOrderNullableScalarRelationFilter = {
    is?: ServiceOrderWhereInput | null
    isNot?: ServiceOrderWhereInput | null
  }

  export type ServiceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    orderDate?: SortOrder
    requestDate?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRequestAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type ServiceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    orderDate?: SortOrder
    requestDate?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    orderDate?: SortOrder
    requestDate?: SortOrder
    cost?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRequestSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ServiceRequestScalarRelationFilter = {
    is?: ServiceRequestWhereInput
    isNot?: ServiceRequestWhereInput
  }

  export type EquipmentScalarRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type ServiceOrderCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    equipmentId?: SortOrder
    orderDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    isOpen?: SortOrder
    isOperational?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceOrderAvgOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type ServiceOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    equipmentId?: SortOrder
    orderDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    isOpen?: SortOrder
    isOperational?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceOrderMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    equipmentId?: SortOrder
    orderDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalCost?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    isOpen?: SortOrder
    isOperational?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceOrderSumOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ServiceOrderScalarRelationFilter = {
    is?: ServiceOrderWhereInput
    isNot?: ServiceOrderWhereInput
  }

  export type RepairServiceCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orderId?: SortOrder
    usedEquipmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cost?: SortOrder
    orderDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type RepairServiceAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type RepairServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orderId?: SortOrder
    usedEquipmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cost?: SortOrder
    orderDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type RepairServiceMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orderId?: SortOrder
    usedEquipmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cost?: SortOrder
    orderDate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type RepairServiceSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistScalarRelationFilter = {
    is?: ChecklistWhereInput
    isNot?: ChecklistWhereInput
  }

  export type ChecklistTaskCountOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistTaskAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ChecklistTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistTaskMinOrderByAggregateInput = {
    id?: SortOrder
    checklistId?: SortOrder
    order?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistTaskSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ChecklistTaskScalarRelationFilter = {
    is?: ChecklistTaskWhereInput
    isNot?: ChecklistTaskWhereInput
  }

  export type RepairServiceScalarRelationFilter = {
    is?: RepairServiceWhereInput
    isNot?: RepairServiceWhereInput
  }

  export type ChecklistResultCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    instance?: SortOrder
    repairId?: SortOrder
    checked?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistResultAvgOrderByAggregateInput = {
    instance?: SortOrder
  }

  export type ChecklistResultMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    instance?: SortOrder
    repairId?: SortOrder
    checked?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistResultMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    instance?: SortOrder
    repairId?: SortOrder
    checked?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistResultSumOrderByAggregateInput = {
    instance?: SortOrder
  }

  export type InspectionScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    checklistId?: SortOrder
    lastOrderId?: SortOrder
    orderDate?: SortOrder
    validityDays?: SortOrder
    nextDate?: SortOrder
    seen?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionScheduleAvgOrderByAggregateInput = {
    validityDays?: SortOrder
  }

  export type InspectionScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    checklistId?: SortOrder
    lastOrderId?: SortOrder
    orderDate?: SortOrder
    validityDays?: SortOrder
    nextDate?: SortOrder
    seen?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    checklistId?: SortOrder
    lastOrderId?: SortOrder
    orderDate?: SortOrder
    validityDays?: SortOrder
    nextDate?: SortOrder
    seen?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionScheduleSumOrderByAggregateInput = {
    validityDays?: SortOrder
  }

  export type AccessCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessCreateWithoutUserInput, AccessUncheckedCreateWithoutUserInput> | AccessCreateWithoutUserInput[] | AccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessCreateOrConnectWithoutUserInput | AccessCreateOrConnectWithoutUserInput[]
    createMany?: AccessCreateManyUserInputEnvelope
    connect?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EquipmentCreateWithoutCreatorInput, EquipmentUncheckedCreateWithoutCreatorInput> | EquipmentCreateWithoutCreatorInput[] | EquipmentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCreatorInput | EquipmentCreateOrConnectWithoutCreatorInput[]
    createMany?: EquipmentCreateManyCreatorInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ChecklistCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChecklistCreateWithoutCreatorInput, ChecklistUncheckedCreateWithoutCreatorInput> | ChecklistCreateWithoutCreatorInput[] | ChecklistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCreatorInput | ChecklistCreateOrConnectWithoutCreatorInput[]
    createMany?: ChecklistCreateManyCreatorInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ChecklistTaskCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChecklistTaskCreateWithoutCreatorInput, ChecklistTaskUncheckedCreateWithoutCreatorInput> | ChecklistTaskCreateWithoutCreatorInput[] | ChecklistTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutCreatorInput | ChecklistTaskCreateOrConnectWithoutCreatorInput[]
    createMany?: ChecklistTaskCreateManyCreatorInputEnvelope
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
  }

  export type ChecklistResultCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChecklistResultCreateWithoutCreatorInput, ChecklistResultUncheckedCreateWithoutCreatorInput> | ChecklistResultCreateWithoutCreatorInput[] | ChecklistResultUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutCreatorInput | ChecklistResultCreateOrConnectWithoutCreatorInput[]
    createMany?: ChecklistResultCreateManyCreatorInputEnvelope
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
  }

  export type ServiceRequestCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ServiceRequestCreateWithoutCreatorInput, ServiceRequestUncheckedCreateWithoutCreatorInput> | ServiceRequestCreateWithoutCreatorInput[] | ServiceRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCreatorInput | ServiceRequestCreateOrConnectWithoutCreatorInput[]
    createMany?: ServiceRequestCreateManyCreatorInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ServiceOrderCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ServiceOrderCreateWithoutCreatorInput, ServiceOrderUncheckedCreateWithoutCreatorInput> | ServiceOrderCreateWithoutCreatorInput[] | ServiceOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCreatorInput | ServiceOrderCreateOrConnectWithoutCreatorInput[]
    createMany?: ServiceOrderCreateManyCreatorInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type RepairServiceCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RepairServiceCreateWithoutCreatorInput, RepairServiceUncheckedCreateWithoutCreatorInput> | RepairServiceCreateWithoutCreatorInput[] | RepairServiceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutCreatorInput | RepairServiceCreateOrConnectWithoutCreatorInput[]
    createMany?: RepairServiceCreateManyCreatorInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type InspectionScheduleCreateNestedManyWithoutCreatorInput = {
    create?: XOR<InspectionScheduleCreateWithoutCreatorInput, InspectionScheduleUncheckedCreateWithoutCreatorInput> | InspectionScheduleCreateWithoutCreatorInput[] | InspectionScheduleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutCreatorInput | InspectionScheduleCreateOrConnectWithoutCreatorInput[]
    createMany?: InspectionScheduleCreateManyCreatorInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type RepairServiceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RepairServiceCreateWithoutEmployeeInput, RepairServiceUncheckedCreateWithoutEmployeeInput> | RepairServiceCreateWithoutEmployeeInput[] | RepairServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutEmployeeInput | RepairServiceCreateOrConnectWithoutEmployeeInput[]
    createMany?: RepairServiceCreateManyEmployeeInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type ServiceRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<ServiceRequestCreateWithoutRequesterInput, ServiceRequestUncheckedCreateWithoutRequesterInput> | ServiceRequestCreateWithoutRequesterInput[] | ServiceRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutRequesterInput | ServiceRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: ServiceRequestCreateManyRequesterInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type SparePartCreateNestedManyWithoutCreatorInput = {
    create?: XOR<SparePartCreateWithoutCreatorInput, SparePartUncheckedCreateWithoutCreatorInput> | SparePartCreateWithoutCreatorInput[] | SparePartUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutCreatorInput | SparePartCreateOrConnectWithoutCreatorInput[]
    createMany?: SparePartCreateManyCreatorInputEnvelope
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
  }

  export type AccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessCreateWithoutUserInput, AccessUncheckedCreateWithoutUserInput> | AccessCreateWithoutUserInput[] | AccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessCreateOrConnectWithoutUserInput | AccessCreateOrConnectWithoutUserInput[]
    createMany?: AccessCreateManyUserInputEnvelope
    connect?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EquipmentCreateWithoutCreatorInput, EquipmentUncheckedCreateWithoutCreatorInput> | EquipmentCreateWithoutCreatorInput[] | EquipmentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCreatorInput | EquipmentCreateOrConnectWithoutCreatorInput[]
    createMany?: EquipmentCreateManyCreatorInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChecklistCreateWithoutCreatorInput, ChecklistUncheckedCreateWithoutCreatorInput> | ChecklistCreateWithoutCreatorInput[] | ChecklistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCreatorInput | ChecklistCreateOrConnectWithoutCreatorInput[]
    createMany?: ChecklistCreateManyCreatorInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChecklistTaskCreateWithoutCreatorInput, ChecklistTaskUncheckedCreateWithoutCreatorInput> | ChecklistTaskCreateWithoutCreatorInput[] | ChecklistTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutCreatorInput | ChecklistTaskCreateOrConnectWithoutCreatorInput[]
    createMany?: ChecklistTaskCreateManyCreatorInputEnvelope
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
  }

  export type ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChecklistResultCreateWithoutCreatorInput, ChecklistResultUncheckedCreateWithoutCreatorInput> | ChecklistResultCreateWithoutCreatorInput[] | ChecklistResultUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutCreatorInput | ChecklistResultCreateOrConnectWithoutCreatorInput[]
    createMany?: ChecklistResultCreateManyCreatorInputEnvelope
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ServiceRequestCreateWithoutCreatorInput, ServiceRequestUncheckedCreateWithoutCreatorInput> | ServiceRequestCreateWithoutCreatorInput[] | ServiceRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCreatorInput | ServiceRequestCreateOrConnectWithoutCreatorInput[]
    createMany?: ServiceRequestCreateManyCreatorInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ServiceOrderCreateWithoutCreatorInput, ServiceOrderUncheckedCreateWithoutCreatorInput> | ServiceOrderCreateWithoutCreatorInput[] | ServiceOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCreatorInput | ServiceOrderCreateOrConnectWithoutCreatorInput[]
    createMany?: ServiceOrderCreateManyCreatorInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type RepairServiceUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RepairServiceCreateWithoutCreatorInput, RepairServiceUncheckedCreateWithoutCreatorInput> | RepairServiceCreateWithoutCreatorInput[] | RepairServiceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutCreatorInput | RepairServiceCreateOrConnectWithoutCreatorInput[]
    createMany?: RepairServiceCreateManyCreatorInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<InspectionScheduleCreateWithoutCreatorInput, InspectionScheduleUncheckedCreateWithoutCreatorInput> | InspectionScheduleCreateWithoutCreatorInput[] | InspectionScheduleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutCreatorInput | InspectionScheduleCreateOrConnectWithoutCreatorInput[]
    createMany?: InspectionScheduleCreateManyCreatorInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<RepairServiceCreateWithoutEmployeeInput, RepairServiceUncheckedCreateWithoutEmployeeInput> | RepairServiceCreateWithoutEmployeeInput[] | RepairServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutEmployeeInput | RepairServiceCreateOrConnectWithoutEmployeeInput[]
    createMany?: RepairServiceCreateManyEmployeeInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<ServiceRequestCreateWithoutRequesterInput, ServiceRequestUncheckedCreateWithoutRequesterInput> | ServiceRequestCreateWithoutRequesterInput[] | ServiceRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutRequesterInput | ServiceRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: ServiceRequestCreateManyRequesterInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type SparePartUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<SparePartCreateWithoutCreatorInput, SparePartUncheckedCreateWithoutCreatorInput> | SparePartCreateWithoutCreatorInput[] | SparePartUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutCreatorInput | SparePartCreateOrConnectWithoutCreatorInput[]
    createMany?: SparePartCreateManyCreatorInputEnvelope
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessCreateWithoutUserInput, AccessUncheckedCreateWithoutUserInput> | AccessCreateWithoutUserInput[] | AccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessCreateOrConnectWithoutUserInput | AccessCreateOrConnectWithoutUserInput[]
    upsert?: AccessUpsertWithWhereUniqueWithoutUserInput | AccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessCreateManyUserInputEnvelope
    set?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    disconnect?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    delete?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    connect?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    update?: AccessUpdateWithWhereUniqueWithoutUserInput | AccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessUpdateManyWithWhereWithoutUserInput | AccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessScalarWhereInput | AccessScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EquipmentCreateWithoutCreatorInput, EquipmentUncheckedCreateWithoutCreatorInput> | EquipmentCreateWithoutCreatorInput[] | EquipmentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCreatorInput | EquipmentCreateOrConnectWithoutCreatorInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCreatorInput | EquipmentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EquipmentCreateManyCreatorInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCreatorInput | EquipmentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCreatorInput | EquipmentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ChecklistUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChecklistCreateWithoutCreatorInput, ChecklistUncheckedCreateWithoutCreatorInput> | ChecklistCreateWithoutCreatorInput[] | ChecklistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCreatorInput | ChecklistCreateOrConnectWithoutCreatorInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutCreatorInput | ChecklistUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChecklistCreateManyCreatorInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutCreatorInput | ChecklistUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutCreatorInput | ChecklistUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ChecklistTaskUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChecklistTaskCreateWithoutCreatorInput, ChecklistTaskUncheckedCreateWithoutCreatorInput> | ChecklistTaskCreateWithoutCreatorInput[] | ChecklistTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutCreatorInput | ChecklistTaskCreateOrConnectWithoutCreatorInput[]
    upsert?: ChecklistTaskUpsertWithWhereUniqueWithoutCreatorInput | ChecklistTaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChecklistTaskCreateManyCreatorInputEnvelope
    set?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    disconnect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    delete?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    update?: ChecklistTaskUpdateWithWhereUniqueWithoutCreatorInput | ChecklistTaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChecklistTaskUpdateManyWithWhereWithoutCreatorInput | ChecklistTaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChecklistTaskScalarWhereInput | ChecklistTaskScalarWhereInput[]
  }

  export type ChecklistResultUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChecklistResultCreateWithoutCreatorInput, ChecklistResultUncheckedCreateWithoutCreatorInput> | ChecklistResultCreateWithoutCreatorInput[] | ChecklistResultUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutCreatorInput | ChecklistResultCreateOrConnectWithoutCreatorInput[]
    upsert?: ChecklistResultUpsertWithWhereUniqueWithoutCreatorInput | ChecklistResultUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChecklistResultCreateManyCreatorInputEnvelope
    set?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    disconnect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    delete?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    update?: ChecklistResultUpdateWithWhereUniqueWithoutCreatorInput | ChecklistResultUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChecklistResultUpdateManyWithWhereWithoutCreatorInput | ChecklistResultUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
  }

  export type ServiceRequestUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutCreatorInput, ServiceRequestUncheckedCreateWithoutCreatorInput> | ServiceRequestCreateWithoutCreatorInput[] | ServiceRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCreatorInput | ServiceRequestCreateOrConnectWithoutCreatorInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutCreatorInput | ServiceRequestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ServiceRequestCreateManyCreatorInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutCreatorInput | ServiceRequestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutCreatorInput | ServiceRequestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ServiceOrderUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutCreatorInput, ServiceOrderUncheckedCreateWithoutCreatorInput> | ServiceOrderCreateWithoutCreatorInput[] | ServiceOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCreatorInput | ServiceOrderCreateOrConnectWithoutCreatorInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutCreatorInput | ServiceOrderUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ServiceOrderCreateManyCreatorInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutCreatorInput | ServiceOrderUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutCreatorInput | ServiceOrderUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type RepairServiceUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RepairServiceCreateWithoutCreatorInput, RepairServiceUncheckedCreateWithoutCreatorInput> | RepairServiceCreateWithoutCreatorInput[] | RepairServiceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutCreatorInput | RepairServiceCreateOrConnectWithoutCreatorInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutCreatorInput | RepairServiceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RepairServiceCreateManyCreatorInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutCreatorInput | RepairServiceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutCreatorInput | RepairServiceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type InspectionScheduleUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutCreatorInput, InspectionScheduleUncheckedCreateWithoutCreatorInput> | InspectionScheduleCreateWithoutCreatorInput[] | InspectionScheduleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutCreatorInput | InspectionScheduleCreateOrConnectWithoutCreatorInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutCreatorInput | InspectionScheduleUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: InspectionScheduleCreateManyCreatorInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutCreatorInput | InspectionScheduleUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutCreatorInput | InspectionScheduleUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type RepairServiceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RepairServiceCreateWithoutEmployeeInput, RepairServiceUncheckedCreateWithoutEmployeeInput> | RepairServiceCreateWithoutEmployeeInput[] | RepairServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutEmployeeInput | RepairServiceCreateOrConnectWithoutEmployeeInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutEmployeeInput | RepairServiceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RepairServiceCreateManyEmployeeInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutEmployeeInput | RepairServiceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutEmployeeInput | RepairServiceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type ServiceRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutRequesterInput, ServiceRequestUncheckedCreateWithoutRequesterInput> | ServiceRequestCreateWithoutRequesterInput[] | ServiceRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutRequesterInput | ServiceRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutRequesterInput | ServiceRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: ServiceRequestCreateManyRequesterInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutRequesterInput | ServiceRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutRequesterInput | ServiceRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type SparePartUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<SparePartCreateWithoutCreatorInput, SparePartUncheckedCreateWithoutCreatorInput> | SparePartCreateWithoutCreatorInput[] | SparePartUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutCreatorInput | SparePartCreateOrConnectWithoutCreatorInput[]
    upsert?: SparePartUpsertWithWhereUniqueWithoutCreatorInput | SparePartUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: SparePartCreateManyCreatorInputEnvelope
    set?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    disconnect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    delete?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    update?: SparePartUpdateWithWhereUniqueWithoutCreatorInput | SparePartUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: SparePartUpdateManyWithWhereWithoutCreatorInput | SparePartUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
  }

  export type AccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessCreateWithoutUserInput, AccessUncheckedCreateWithoutUserInput> | AccessCreateWithoutUserInput[] | AccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessCreateOrConnectWithoutUserInput | AccessCreateOrConnectWithoutUserInput[]
    upsert?: AccessUpsertWithWhereUniqueWithoutUserInput | AccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessCreateManyUserInputEnvelope
    set?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    disconnect?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    delete?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    connect?: AccessWhereUniqueInput | AccessWhereUniqueInput[]
    update?: AccessUpdateWithWhereUniqueWithoutUserInput | AccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessUpdateManyWithWhereWithoutUserInput | AccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessScalarWhereInput | AccessScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EquipmentCreateWithoutCreatorInput, EquipmentUncheckedCreateWithoutCreatorInput> | EquipmentCreateWithoutCreatorInput[] | EquipmentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCreatorInput | EquipmentCreateOrConnectWithoutCreatorInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCreatorInput | EquipmentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EquipmentCreateManyCreatorInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCreatorInput | EquipmentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCreatorInput | EquipmentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChecklistCreateWithoutCreatorInput, ChecklistUncheckedCreateWithoutCreatorInput> | ChecklistCreateWithoutCreatorInput[] | ChecklistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutCreatorInput | ChecklistCreateOrConnectWithoutCreatorInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutCreatorInput | ChecklistUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChecklistCreateManyCreatorInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutCreatorInput | ChecklistUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutCreatorInput | ChecklistUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChecklistTaskCreateWithoutCreatorInput, ChecklistTaskUncheckedCreateWithoutCreatorInput> | ChecklistTaskCreateWithoutCreatorInput[] | ChecklistTaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutCreatorInput | ChecklistTaskCreateOrConnectWithoutCreatorInput[]
    upsert?: ChecklistTaskUpsertWithWhereUniqueWithoutCreatorInput | ChecklistTaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChecklistTaskCreateManyCreatorInputEnvelope
    set?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    disconnect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    delete?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    update?: ChecklistTaskUpdateWithWhereUniqueWithoutCreatorInput | ChecklistTaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChecklistTaskUpdateManyWithWhereWithoutCreatorInput | ChecklistTaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChecklistTaskScalarWhereInput | ChecklistTaskScalarWhereInput[]
  }

  export type ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChecklistResultCreateWithoutCreatorInput, ChecklistResultUncheckedCreateWithoutCreatorInput> | ChecklistResultCreateWithoutCreatorInput[] | ChecklistResultUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutCreatorInput | ChecklistResultCreateOrConnectWithoutCreatorInput[]
    upsert?: ChecklistResultUpsertWithWhereUniqueWithoutCreatorInput | ChecklistResultUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChecklistResultCreateManyCreatorInputEnvelope
    set?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    disconnect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    delete?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    update?: ChecklistResultUpdateWithWhereUniqueWithoutCreatorInput | ChecklistResultUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChecklistResultUpdateManyWithWhereWithoutCreatorInput | ChecklistResultUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
  }

  export type ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutCreatorInput, ServiceRequestUncheckedCreateWithoutCreatorInput> | ServiceRequestCreateWithoutCreatorInput[] | ServiceRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutCreatorInput | ServiceRequestCreateOrConnectWithoutCreatorInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutCreatorInput | ServiceRequestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ServiceRequestCreateManyCreatorInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutCreatorInput | ServiceRequestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutCreatorInput | ServiceRequestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutCreatorInput, ServiceOrderUncheckedCreateWithoutCreatorInput> | ServiceOrderCreateWithoutCreatorInput[] | ServiceOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCreatorInput | ServiceOrderCreateOrConnectWithoutCreatorInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutCreatorInput | ServiceOrderUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ServiceOrderCreateManyCreatorInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutCreatorInput | ServiceOrderUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutCreatorInput | ServiceOrderUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RepairServiceCreateWithoutCreatorInput, RepairServiceUncheckedCreateWithoutCreatorInput> | RepairServiceCreateWithoutCreatorInput[] | RepairServiceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutCreatorInput | RepairServiceCreateOrConnectWithoutCreatorInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutCreatorInput | RepairServiceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RepairServiceCreateManyCreatorInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutCreatorInput | RepairServiceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutCreatorInput | RepairServiceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutCreatorInput, InspectionScheduleUncheckedCreateWithoutCreatorInput> | InspectionScheduleCreateWithoutCreatorInput[] | InspectionScheduleUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutCreatorInput | InspectionScheduleCreateOrConnectWithoutCreatorInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutCreatorInput | InspectionScheduleUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: InspectionScheduleCreateManyCreatorInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutCreatorInput | InspectionScheduleUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutCreatorInput | InspectionScheduleUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<RepairServiceCreateWithoutEmployeeInput, RepairServiceUncheckedCreateWithoutEmployeeInput> | RepairServiceCreateWithoutEmployeeInput[] | RepairServiceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutEmployeeInput | RepairServiceCreateOrConnectWithoutEmployeeInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutEmployeeInput | RepairServiceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: RepairServiceCreateManyEmployeeInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutEmployeeInput | RepairServiceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutEmployeeInput | RepairServiceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutRequesterInput, ServiceRequestUncheckedCreateWithoutRequesterInput> | ServiceRequestCreateWithoutRequesterInput[] | ServiceRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutRequesterInput | ServiceRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutRequesterInput | ServiceRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: ServiceRequestCreateManyRequesterInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutRequesterInput | ServiceRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutRequesterInput | ServiceRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type SparePartUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<SparePartCreateWithoutCreatorInput, SparePartUncheckedCreateWithoutCreatorInput> | SparePartCreateWithoutCreatorInput[] | SparePartUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutCreatorInput | SparePartCreateOrConnectWithoutCreatorInput[]
    upsert?: SparePartUpsertWithWhereUniqueWithoutCreatorInput | SparePartUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: SparePartCreateManyCreatorInputEnvelope
    set?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    disconnect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    delete?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    update?: SparePartUpdateWithWhereUniqueWithoutCreatorInput | SparePartUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: SparePartUpdateManyWithWhereWithoutCreatorInput | SparePartUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccessInput = {
    create?: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department
  }

  export type EnumAccessLevelFieldUpdateOperationsInput = {
    set?: $Enums.AccessLevel
  }

  export type UserUpdateOneRequiredWithoutAccessNestedInput = {
    create?: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessInput
    upsert?: UserUpsertWithoutAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessInput, UserUpdateWithoutAccessInput>, UserUncheckedUpdateWithoutAccessInput>
  }

  export type UserCreateNestedOneWithoutCreatedEquipmentInput = {
    create?: XOR<UserCreateWithoutCreatedEquipmentInput, UserUncheckedCreateWithoutCreatedEquipmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEquipmentInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceOrderCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ServiceOrderCreateWithoutEquipmentInput, ServiceOrderUncheckedCreateWithoutEquipmentInput> | ServiceOrderCreateWithoutEquipmentInput[] | ServiceOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutEquipmentInput | ServiceOrderCreateOrConnectWithoutEquipmentInput[]
    createMany?: ServiceOrderCreateManyEquipmentInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type RepairServiceCreateNestedManyWithoutUsedEquipmentInput = {
    create?: XOR<RepairServiceCreateWithoutUsedEquipmentInput, RepairServiceUncheckedCreateWithoutUsedEquipmentInput> | RepairServiceCreateWithoutUsedEquipmentInput[] | RepairServiceUncheckedCreateWithoutUsedEquipmentInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutUsedEquipmentInput | RepairServiceCreateOrConnectWithoutUsedEquipmentInput[]
    createMany?: RepairServiceCreateManyUsedEquipmentInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type ChecklistCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ChecklistCreateWithoutEquipmentInput, ChecklistUncheckedCreateWithoutEquipmentInput> | ChecklistCreateWithoutEquipmentInput[] | ChecklistUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutEquipmentInput | ChecklistCreateOrConnectWithoutEquipmentInput[]
    createMany?: ChecklistCreateManyEquipmentInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type InspectionScheduleCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<InspectionScheduleCreateWithoutEquipmentInput, InspectionScheduleUncheckedCreateWithoutEquipmentInput> | InspectionScheduleCreateWithoutEquipmentInput[] | InspectionScheduleUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutEquipmentInput | InspectionScheduleCreateOrConnectWithoutEquipmentInput[]
    createMany?: InspectionScheduleCreateManyEquipmentInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type ServiceOrderUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ServiceOrderCreateWithoutEquipmentInput, ServiceOrderUncheckedCreateWithoutEquipmentInput> | ServiceOrderCreateWithoutEquipmentInput[] | ServiceOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutEquipmentInput | ServiceOrderCreateOrConnectWithoutEquipmentInput[]
    createMany?: ServiceOrderCreateManyEquipmentInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type RepairServiceUncheckedCreateNestedManyWithoutUsedEquipmentInput = {
    create?: XOR<RepairServiceCreateWithoutUsedEquipmentInput, RepairServiceUncheckedCreateWithoutUsedEquipmentInput> | RepairServiceCreateWithoutUsedEquipmentInput[] | RepairServiceUncheckedCreateWithoutUsedEquipmentInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutUsedEquipmentInput | RepairServiceCreateOrConnectWithoutUsedEquipmentInput[]
    createMany?: RepairServiceCreateManyUsedEquipmentInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ChecklistCreateWithoutEquipmentInput, ChecklistUncheckedCreateWithoutEquipmentInput> | ChecklistCreateWithoutEquipmentInput[] | ChecklistUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutEquipmentInput | ChecklistCreateOrConnectWithoutEquipmentInput[]
    createMany?: ChecklistCreateManyEquipmentInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type InspectionScheduleUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<InspectionScheduleCreateWithoutEquipmentInput, InspectionScheduleUncheckedCreateWithoutEquipmentInput> | InspectionScheduleCreateWithoutEquipmentInput[] | InspectionScheduleUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutEquipmentInput | InspectionScheduleCreateOrConnectWithoutEquipmentInput[]
    createMany?: InspectionScheduleCreateManyEquipmentInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCreatedEquipmentNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEquipmentInput, UserUncheckedCreateWithoutCreatedEquipmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEquipmentInput
    upsert?: UserUpsertWithoutCreatedEquipmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedEquipmentInput, UserUpdateWithoutCreatedEquipmentInput>, UserUncheckedUpdateWithoutCreatedEquipmentInput>
  }

  export type ServiceOrderUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutEquipmentInput, ServiceOrderUncheckedCreateWithoutEquipmentInput> | ServiceOrderCreateWithoutEquipmentInput[] | ServiceOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutEquipmentInput | ServiceOrderCreateOrConnectWithoutEquipmentInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutEquipmentInput | ServiceOrderUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ServiceOrderCreateManyEquipmentInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutEquipmentInput | ServiceOrderUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutEquipmentInput | ServiceOrderUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type RepairServiceUpdateManyWithoutUsedEquipmentNestedInput = {
    create?: XOR<RepairServiceCreateWithoutUsedEquipmentInput, RepairServiceUncheckedCreateWithoutUsedEquipmentInput> | RepairServiceCreateWithoutUsedEquipmentInput[] | RepairServiceUncheckedCreateWithoutUsedEquipmentInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutUsedEquipmentInput | RepairServiceCreateOrConnectWithoutUsedEquipmentInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutUsedEquipmentInput | RepairServiceUpsertWithWhereUniqueWithoutUsedEquipmentInput[]
    createMany?: RepairServiceCreateManyUsedEquipmentInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutUsedEquipmentInput | RepairServiceUpdateWithWhereUniqueWithoutUsedEquipmentInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutUsedEquipmentInput | RepairServiceUpdateManyWithWhereWithoutUsedEquipmentInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type ChecklistUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ChecklistCreateWithoutEquipmentInput, ChecklistUncheckedCreateWithoutEquipmentInput> | ChecklistCreateWithoutEquipmentInput[] | ChecklistUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutEquipmentInput | ChecklistCreateOrConnectWithoutEquipmentInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutEquipmentInput | ChecklistUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ChecklistCreateManyEquipmentInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutEquipmentInput | ChecklistUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutEquipmentInput | ChecklistUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type InspectionScheduleUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutEquipmentInput, InspectionScheduleUncheckedCreateWithoutEquipmentInput> | InspectionScheduleCreateWithoutEquipmentInput[] | InspectionScheduleUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutEquipmentInput | InspectionScheduleCreateOrConnectWithoutEquipmentInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutEquipmentInput | InspectionScheduleUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: InspectionScheduleCreateManyEquipmentInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutEquipmentInput | InspectionScheduleUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutEquipmentInput | InspectionScheduleUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type ServiceOrderUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutEquipmentInput, ServiceOrderUncheckedCreateWithoutEquipmentInput> | ServiceOrderCreateWithoutEquipmentInput[] | ServiceOrderUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutEquipmentInput | ServiceOrderCreateOrConnectWithoutEquipmentInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutEquipmentInput | ServiceOrderUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ServiceOrderCreateManyEquipmentInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutEquipmentInput | ServiceOrderUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutEquipmentInput | ServiceOrderUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type RepairServiceUncheckedUpdateManyWithoutUsedEquipmentNestedInput = {
    create?: XOR<RepairServiceCreateWithoutUsedEquipmentInput, RepairServiceUncheckedCreateWithoutUsedEquipmentInput> | RepairServiceCreateWithoutUsedEquipmentInput[] | RepairServiceUncheckedCreateWithoutUsedEquipmentInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutUsedEquipmentInput | RepairServiceCreateOrConnectWithoutUsedEquipmentInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutUsedEquipmentInput | RepairServiceUpsertWithWhereUniqueWithoutUsedEquipmentInput[]
    createMany?: RepairServiceCreateManyUsedEquipmentInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutUsedEquipmentInput | RepairServiceUpdateWithWhereUniqueWithoutUsedEquipmentInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutUsedEquipmentInput | RepairServiceUpdateManyWithWhereWithoutUsedEquipmentInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ChecklistCreateWithoutEquipmentInput, ChecklistUncheckedCreateWithoutEquipmentInput> | ChecklistCreateWithoutEquipmentInput[] | ChecklistUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutEquipmentInput | ChecklistCreateOrConnectWithoutEquipmentInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutEquipmentInput | ChecklistUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ChecklistCreateManyEquipmentInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutEquipmentInput | ChecklistUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutEquipmentInput | ChecklistUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutEquipmentInput, InspectionScheduleUncheckedCreateWithoutEquipmentInput> | InspectionScheduleCreateWithoutEquipmentInput[] | InspectionScheduleUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutEquipmentInput | InspectionScheduleCreateOrConnectWithoutEquipmentInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutEquipmentInput | InspectionScheduleUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: InspectionScheduleCreateManyEquipmentInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutEquipmentInput | InspectionScheduleUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutEquipmentInput | InspectionScheduleUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSparePartInput = {
    create?: XOR<UserCreateWithoutSparePartInput, UserUncheckedCreateWithoutSparePartInput>
    connectOrCreate?: UserCreateOrConnectWithoutSparePartInput
    connect?: UserWhereUniqueInput
  }

  export type RepairServiceCreateNestedManyWithoutPartsUsedInput = {
    create?: XOR<RepairServiceCreateWithoutPartsUsedInput, RepairServiceUncheckedCreateWithoutPartsUsedInput> | RepairServiceCreateWithoutPartsUsedInput[] | RepairServiceUncheckedCreateWithoutPartsUsedInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutPartsUsedInput | RepairServiceCreateOrConnectWithoutPartsUsedInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type RepairServiceUncheckedCreateNestedManyWithoutPartsUsedInput = {
    create?: XOR<RepairServiceCreateWithoutPartsUsedInput, RepairServiceUncheckedCreateWithoutPartsUsedInput> | RepairServiceCreateWithoutPartsUsedInput[] | RepairServiceUncheckedCreateWithoutPartsUsedInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutPartsUsedInput | RepairServiceCreateOrConnectWithoutPartsUsedInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSparePartNestedInput = {
    create?: XOR<UserCreateWithoutSparePartInput, UserUncheckedCreateWithoutSparePartInput>
    connectOrCreate?: UserCreateOrConnectWithoutSparePartInput
    upsert?: UserUpsertWithoutSparePartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSparePartInput, UserUpdateWithoutSparePartInput>, UserUncheckedUpdateWithoutSparePartInput>
  }

  export type RepairServiceUpdateManyWithoutPartsUsedNestedInput = {
    create?: XOR<RepairServiceCreateWithoutPartsUsedInput, RepairServiceUncheckedCreateWithoutPartsUsedInput> | RepairServiceCreateWithoutPartsUsedInput[] | RepairServiceUncheckedCreateWithoutPartsUsedInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutPartsUsedInput | RepairServiceCreateOrConnectWithoutPartsUsedInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutPartsUsedInput | RepairServiceUpsertWithWhereUniqueWithoutPartsUsedInput[]
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutPartsUsedInput | RepairServiceUpdateWithWhereUniqueWithoutPartsUsedInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutPartsUsedInput | RepairServiceUpdateManyWithWhereWithoutPartsUsedInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type RepairServiceUncheckedUpdateManyWithoutPartsUsedNestedInput = {
    create?: XOR<RepairServiceCreateWithoutPartsUsedInput, RepairServiceUncheckedCreateWithoutPartsUsedInput> | RepairServiceCreateWithoutPartsUsedInput[] | RepairServiceUncheckedCreateWithoutPartsUsedInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutPartsUsedInput | RepairServiceCreateOrConnectWithoutPartsUsedInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutPartsUsedInput | RepairServiceUpsertWithWhereUniqueWithoutPartsUsedInput[]
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutPartsUsedInput | RepairServiceUpdateWithWhereUniqueWithoutPartsUsedInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutPartsUsedInput | RepairServiceUpdateManyWithWhereWithoutPartsUsedInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedRequestsInput = {
    create?: XOR<UserCreateWithoutCreatedRequestsInput, UserUncheckedCreateWithoutCreatedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceOrderCreateNestedOneWithoutRequestInput = {
    create?: XOR<ServiceOrderCreateWithoutRequestInput, ServiceOrderUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutRequestInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type ServiceOrderUncheckedCreateNestedOneWithoutRequestInput = {
    create?: XOR<ServiceOrderCreateWithoutRequestInput, ServiceOrderUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutRequestInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRequestsInput, UserUncheckedCreateWithoutCreatedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRequestsInput
    upsert?: UserUpsertWithoutCreatedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRequestsInput, UserUpdateWithoutCreatedRequestsInput>, UserUncheckedUpdateWithoutCreatedRequestsInput>
  }

  export type ServiceOrderUpdateOneWithoutRequestNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutRequestInput, ServiceOrderUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutRequestInput
    upsert?: ServiceOrderUpsertWithoutRequestInput
    disconnect?: ServiceOrderWhereInput | boolean
    delete?: ServiceOrderWhereInput | boolean
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutRequestInput, ServiceOrderUpdateWithoutRequestInput>, ServiceOrderUncheckedUpdateWithoutRequestInput>
  }

  export type ServiceOrderUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutRequestInput, ServiceOrderUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutRequestInput
    upsert?: ServiceOrderUpsertWithoutRequestInput
    disconnect?: ServiceOrderWhereInput | boolean
    delete?: ServiceOrderWhereInput | boolean
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutRequestInput, ServiceOrderUpdateWithoutRequestInput>, ServiceOrderUncheckedUpdateWithoutRequestInput>
  }

  export type ServiceRequestCreateNestedOneWithoutServiceOrderInput = {
    create?: XOR<ServiceRequestCreateWithoutServiceOrderInput, ServiceRequestUncheckedCreateWithoutServiceOrderInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutServiceOrderInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutServiceOrdersInput = {
    create?: XOR<EquipmentCreateWithoutServiceOrdersInput, EquipmentUncheckedCreateWithoutServiceOrdersInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutServiceOrdersInput
    connect?: EquipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedOrdersInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type RepairServiceCreateNestedManyWithoutOrderInput = {
    create?: XOR<RepairServiceCreateWithoutOrderInput, RepairServiceUncheckedCreateWithoutOrderInput> | RepairServiceCreateWithoutOrderInput[] | RepairServiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutOrderInput | RepairServiceCreateOrConnectWithoutOrderInput[]
    createMany?: RepairServiceCreateManyOrderInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type InspectionScheduleCreateNestedManyWithoutLastOrderInput = {
    create?: XOR<InspectionScheduleCreateWithoutLastOrderInput, InspectionScheduleUncheckedCreateWithoutLastOrderInput> | InspectionScheduleCreateWithoutLastOrderInput[] | InspectionScheduleUncheckedCreateWithoutLastOrderInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutLastOrderInput | InspectionScheduleCreateOrConnectWithoutLastOrderInput[]
    createMany?: InspectionScheduleCreateManyLastOrderInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type RepairServiceUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<RepairServiceCreateWithoutOrderInput, RepairServiceUncheckedCreateWithoutOrderInput> | RepairServiceCreateWithoutOrderInput[] | RepairServiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutOrderInput | RepairServiceCreateOrConnectWithoutOrderInput[]
    createMany?: RepairServiceCreateManyOrderInputEnvelope
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
  }

  export type InspectionScheduleUncheckedCreateNestedManyWithoutLastOrderInput = {
    create?: XOR<InspectionScheduleCreateWithoutLastOrderInput, InspectionScheduleUncheckedCreateWithoutLastOrderInput> | InspectionScheduleCreateWithoutLastOrderInput[] | InspectionScheduleUncheckedCreateWithoutLastOrderInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutLastOrderInput | InspectionScheduleCreateOrConnectWithoutLastOrderInput[]
    createMany?: InspectionScheduleCreateManyLastOrderInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ServiceRequestUpdateOneRequiredWithoutServiceOrderNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutServiceOrderInput, ServiceRequestUncheckedCreateWithoutServiceOrderInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutServiceOrderInput
    upsert?: ServiceRequestUpsertWithoutServiceOrderInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutServiceOrderInput, ServiceRequestUpdateWithoutServiceOrderInput>, ServiceRequestUncheckedUpdateWithoutServiceOrderInput>
  }

  export type EquipmentUpdateOneRequiredWithoutServiceOrdersNestedInput = {
    create?: XOR<EquipmentCreateWithoutServiceOrdersInput, EquipmentUncheckedCreateWithoutServiceOrdersInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutServiceOrdersInput
    upsert?: EquipmentUpsertWithoutServiceOrdersInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutServiceOrdersInput, EquipmentUpdateWithoutServiceOrdersInput>, EquipmentUncheckedUpdateWithoutServiceOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    upsert?: UserUpsertWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedOrdersInput, UserUpdateWithoutCreatedOrdersInput>, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type RepairServiceUpdateManyWithoutOrderNestedInput = {
    create?: XOR<RepairServiceCreateWithoutOrderInput, RepairServiceUncheckedCreateWithoutOrderInput> | RepairServiceCreateWithoutOrderInput[] | RepairServiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutOrderInput | RepairServiceCreateOrConnectWithoutOrderInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutOrderInput | RepairServiceUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: RepairServiceCreateManyOrderInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutOrderInput | RepairServiceUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutOrderInput | RepairServiceUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type InspectionScheduleUpdateManyWithoutLastOrderNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutLastOrderInput, InspectionScheduleUncheckedCreateWithoutLastOrderInput> | InspectionScheduleCreateWithoutLastOrderInput[] | InspectionScheduleUncheckedCreateWithoutLastOrderInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutLastOrderInput | InspectionScheduleCreateOrConnectWithoutLastOrderInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutLastOrderInput | InspectionScheduleUpsertWithWhereUniqueWithoutLastOrderInput[]
    createMany?: InspectionScheduleCreateManyLastOrderInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutLastOrderInput | InspectionScheduleUpdateWithWhereUniqueWithoutLastOrderInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutLastOrderInput | InspectionScheduleUpdateManyWithWhereWithoutLastOrderInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type RepairServiceUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<RepairServiceCreateWithoutOrderInput, RepairServiceUncheckedCreateWithoutOrderInput> | RepairServiceCreateWithoutOrderInput[] | RepairServiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RepairServiceCreateOrConnectWithoutOrderInput | RepairServiceCreateOrConnectWithoutOrderInput[]
    upsert?: RepairServiceUpsertWithWhereUniqueWithoutOrderInput | RepairServiceUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: RepairServiceCreateManyOrderInputEnvelope
    set?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    disconnect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    delete?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    connect?: RepairServiceWhereUniqueInput | RepairServiceWhereUniqueInput[]
    update?: RepairServiceUpdateWithWhereUniqueWithoutOrderInput | RepairServiceUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: RepairServiceUpdateManyWithWhereWithoutOrderInput | RepairServiceUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutLastOrderNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutLastOrderInput, InspectionScheduleUncheckedCreateWithoutLastOrderInput> | InspectionScheduleCreateWithoutLastOrderInput[] | InspectionScheduleUncheckedCreateWithoutLastOrderInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutLastOrderInput | InspectionScheduleCreateOrConnectWithoutLastOrderInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutLastOrderInput | InspectionScheduleUpsertWithWhereUniqueWithoutLastOrderInput[]
    createMany?: InspectionScheduleCreateManyLastOrderInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutLastOrderInput | InspectionScheduleUpdateWithWhereUniqueWithoutLastOrderInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutLastOrderInput | InspectionScheduleUpdateManyWithWhereWithoutLastOrderInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRepairsInput = {
    create?: XOR<UserCreateWithoutRepairsInput, UserUncheckedCreateWithoutRepairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepairsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceOrderCreateNestedOneWithoutRepairServicesInput = {
    create?: XOR<ServiceOrderCreateWithoutRepairServicesInput, ServiceOrderUncheckedCreateWithoutRepairServicesInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutRepairServicesInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutRepairServicesInput = {
    create?: XOR<EquipmentCreateWithoutRepairServicesInput, EquipmentUncheckedCreateWithoutRepairServicesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutRepairServicesInput
    connect?: EquipmentWhereUniqueInput
  }

  export type SparePartCreateNestedManyWithoutUsedInInput = {
    create?: XOR<SparePartCreateWithoutUsedInInput, SparePartUncheckedCreateWithoutUsedInInput> | SparePartCreateWithoutUsedInInput[] | SparePartUncheckedCreateWithoutUsedInInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutUsedInInput | SparePartCreateOrConnectWithoutUsedInInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRepairsInput = {
    create?: XOR<UserCreateWithoutCreatedRepairsInput, UserUncheckedCreateWithoutCreatedRepairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRepairsInput
    connect?: UserWhereUniqueInput
  }

  export type ChecklistResultCreateNestedManyWithoutRepairInput = {
    create?: XOR<ChecklistResultCreateWithoutRepairInput, ChecklistResultUncheckedCreateWithoutRepairInput> | ChecklistResultCreateWithoutRepairInput[] | ChecklistResultUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutRepairInput | ChecklistResultCreateOrConnectWithoutRepairInput[]
    createMany?: ChecklistResultCreateManyRepairInputEnvelope
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
  }

  export type SparePartUncheckedCreateNestedManyWithoutUsedInInput = {
    create?: XOR<SparePartCreateWithoutUsedInInput, SparePartUncheckedCreateWithoutUsedInInput> | SparePartCreateWithoutUsedInInput[] | SparePartUncheckedCreateWithoutUsedInInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutUsedInInput | SparePartCreateOrConnectWithoutUsedInInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
  }

  export type ChecklistResultUncheckedCreateNestedManyWithoutRepairInput = {
    create?: XOR<ChecklistResultCreateWithoutRepairInput, ChecklistResultUncheckedCreateWithoutRepairInput> | ChecklistResultCreateWithoutRepairInput[] | ChecklistResultUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutRepairInput | ChecklistResultCreateOrConnectWithoutRepairInput[]
    createMany?: ChecklistResultCreateManyRepairInputEnvelope
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRepairsNestedInput = {
    create?: XOR<UserCreateWithoutRepairsInput, UserUncheckedCreateWithoutRepairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepairsInput
    upsert?: UserUpsertWithoutRepairsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepairsInput, UserUpdateWithoutRepairsInput>, UserUncheckedUpdateWithoutRepairsInput>
  }

  export type ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutRepairServicesInput, ServiceOrderUncheckedCreateWithoutRepairServicesInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutRepairServicesInput
    upsert?: ServiceOrderUpsertWithoutRepairServicesInput
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutRepairServicesInput, ServiceOrderUpdateWithoutRepairServicesInput>, ServiceOrderUncheckedUpdateWithoutRepairServicesInput>
  }

  export type EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput = {
    create?: XOR<EquipmentCreateWithoutRepairServicesInput, EquipmentUncheckedCreateWithoutRepairServicesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutRepairServicesInput
    upsert?: EquipmentUpsertWithoutRepairServicesInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutRepairServicesInput, EquipmentUpdateWithoutRepairServicesInput>, EquipmentUncheckedUpdateWithoutRepairServicesInput>
  }

  export type SparePartUpdateManyWithoutUsedInNestedInput = {
    create?: XOR<SparePartCreateWithoutUsedInInput, SparePartUncheckedCreateWithoutUsedInInput> | SparePartCreateWithoutUsedInInput[] | SparePartUncheckedCreateWithoutUsedInInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutUsedInInput | SparePartCreateOrConnectWithoutUsedInInput[]
    upsert?: SparePartUpsertWithWhereUniqueWithoutUsedInInput | SparePartUpsertWithWhereUniqueWithoutUsedInInput[]
    set?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    disconnect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    delete?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    update?: SparePartUpdateWithWhereUniqueWithoutUsedInInput | SparePartUpdateWithWhereUniqueWithoutUsedInInput[]
    updateMany?: SparePartUpdateManyWithWhereWithoutUsedInInput | SparePartUpdateManyWithWhereWithoutUsedInInput[]
    deleteMany?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedRepairsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRepairsInput, UserUncheckedCreateWithoutCreatedRepairsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRepairsInput
    upsert?: UserUpsertWithoutCreatedRepairsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRepairsInput, UserUpdateWithoutCreatedRepairsInput>, UserUncheckedUpdateWithoutCreatedRepairsInput>
  }

  export type ChecklistResultUpdateManyWithoutRepairNestedInput = {
    create?: XOR<ChecklistResultCreateWithoutRepairInput, ChecklistResultUncheckedCreateWithoutRepairInput> | ChecklistResultCreateWithoutRepairInput[] | ChecklistResultUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutRepairInput | ChecklistResultCreateOrConnectWithoutRepairInput[]
    upsert?: ChecklistResultUpsertWithWhereUniqueWithoutRepairInput | ChecklistResultUpsertWithWhereUniqueWithoutRepairInput[]
    createMany?: ChecklistResultCreateManyRepairInputEnvelope
    set?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    disconnect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    delete?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    update?: ChecklistResultUpdateWithWhereUniqueWithoutRepairInput | ChecklistResultUpdateWithWhereUniqueWithoutRepairInput[]
    updateMany?: ChecklistResultUpdateManyWithWhereWithoutRepairInput | ChecklistResultUpdateManyWithWhereWithoutRepairInput[]
    deleteMany?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
  }

  export type SparePartUncheckedUpdateManyWithoutUsedInNestedInput = {
    create?: XOR<SparePartCreateWithoutUsedInInput, SparePartUncheckedCreateWithoutUsedInInput> | SparePartCreateWithoutUsedInInput[] | SparePartUncheckedCreateWithoutUsedInInput[]
    connectOrCreate?: SparePartCreateOrConnectWithoutUsedInInput | SparePartCreateOrConnectWithoutUsedInInput[]
    upsert?: SparePartUpsertWithWhereUniqueWithoutUsedInInput | SparePartUpsertWithWhereUniqueWithoutUsedInInput[]
    set?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    disconnect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    delete?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    connect?: SparePartWhereUniqueInput | SparePartWhereUniqueInput[]
    update?: SparePartUpdateWithWhereUniqueWithoutUsedInInput | SparePartUpdateWithWhereUniqueWithoutUsedInInput[]
    updateMany?: SparePartUpdateManyWithWhereWithoutUsedInInput | SparePartUpdateManyWithWhereWithoutUsedInInput[]
    deleteMany?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
  }

  export type ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput = {
    create?: XOR<ChecklistResultCreateWithoutRepairInput, ChecklistResultUncheckedCreateWithoutRepairInput> | ChecklistResultCreateWithoutRepairInput[] | ChecklistResultUncheckedCreateWithoutRepairInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutRepairInput | ChecklistResultCreateOrConnectWithoutRepairInput[]
    upsert?: ChecklistResultUpsertWithWhereUniqueWithoutRepairInput | ChecklistResultUpsertWithWhereUniqueWithoutRepairInput[]
    createMany?: ChecklistResultCreateManyRepairInputEnvelope
    set?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    disconnect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    delete?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    update?: ChecklistResultUpdateWithWhereUniqueWithoutRepairInput | ChecklistResultUpdateWithWhereUniqueWithoutRepairInput[]
    updateMany?: ChecklistResultUpdateManyWithWhereWithoutRepairInput | ChecklistResultUpdateManyWithWhereWithoutRepairInput[]
    deleteMany?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<EquipmentCreateWithoutChecklistsInput, EquipmentUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutChecklistsInput
    connect?: EquipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedChecklistsInput = {
    create?: XOR<UserCreateWithoutCreatedChecklistsInput, UserUncheckedCreateWithoutCreatedChecklistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChecklistsInput
    connect?: UserWhereUniqueInput
  }

  export type ChecklistTaskCreateNestedManyWithoutChecklistInput = {
    create?: XOR<ChecklistTaskCreateWithoutChecklistInput, ChecklistTaskUncheckedCreateWithoutChecklistInput> | ChecklistTaskCreateWithoutChecklistInput[] | ChecklistTaskUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutChecklistInput | ChecklistTaskCreateOrConnectWithoutChecklistInput[]
    createMany?: ChecklistTaskCreateManyChecklistInputEnvelope
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
  }

  export type InspectionScheduleCreateNestedManyWithoutChecklistInput = {
    create?: XOR<InspectionScheduleCreateWithoutChecklistInput, InspectionScheduleUncheckedCreateWithoutChecklistInput> | InspectionScheduleCreateWithoutChecklistInput[] | InspectionScheduleUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutChecklistInput | InspectionScheduleCreateOrConnectWithoutChecklistInput[]
    createMany?: InspectionScheduleCreateManyChecklistInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type ChecklistTaskUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: XOR<ChecklistTaskCreateWithoutChecklistInput, ChecklistTaskUncheckedCreateWithoutChecklistInput> | ChecklistTaskCreateWithoutChecklistInput[] | ChecklistTaskUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutChecklistInput | ChecklistTaskCreateOrConnectWithoutChecklistInput[]
    createMany?: ChecklistTaskCreateManyChecklistInputEnvelope
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
  }

  export type InspectionScheduleUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: XOR<InspectionScheduleCreateWithoutChecklistInput, InspectionScheduleUncheckedCreateWithoutChecklistInput> | InspectionScheduleCreateWithoutChecklistInput[] | InspectionScheduleUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutChecklistInput | InspectionScheduleCreateOrConnectWithoutChecklistInput[]
    createMany?: InspectionScheduleCreateManyChecklistInputEnvelope
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
  }

  export type EquipmentUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<EquipmentCreateWithoutChecklistsInput, EquipmentUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutChecklistsInput
    upsert?: EquipmentUpsertWithoutChecklistsInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutChecklistsInput, EquipmentUpdateWithoutChecklistsInput>, EquipmentUncheckedUpdateWithoutChecklistsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedChecklistsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedChecklistsInput, UserUncheckedCreateWithoutCreatedChecklistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChecklistsInput
    upsert?: UserUpsertWithoutCreatedChecklistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedChecklistsInput, UserUpdateWithoutCreatedChecklistsInput>, UserUncheckedUpdateWithoutCreatedChecklistsInput>
  }

  export type ChecklistTaskUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<ChecklistTaskCreateWithoutChecklistInput, ChecklistTaskUncheckedCreateWithoutChecklistInput> | ChecklistTaskCreateWithoutChecklistInput[] | ChecklistTaskUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutChecklistInput | ChecklistTaskCreateOrConnectWithoutChecklistInput[]
    upsert?: ChecklistTaskUpsertWithWhereUniqueWithoutChecklistInput | ChecklistTaskUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: ChecklistTaskCreateManyChecklistInputEnvelope
    set?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    disconnect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    delete?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    update?: ChecklistTaskUpdateWithWhereUniqueWithoutChecklistInput | ChecklistTaskUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: ChecklistTaskUpdateManyWithWhereWithoutChecklistInput | ChecklistTaskUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: ChecklistTaskScalarWhereInput | ChecklistTaskScalarWhereInput[]
  }

  export type InspectionScheduleUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutChecklistInput, InspectionScheduleUncheckedCreateWithoutChecklistInput> | InspectionScheduleCreateWithoutChecklistInput[] | InspectionScheduleUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutChecklistInput | InspectionScheduleCreateOrConnectWithoutChecklistInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutChecklistInput | InspectionScheduleUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: InspectionScheduleCreateManyChecklistInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutChecklistInput | InspectionScheduleUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutChecklistInput | InspectionScheduleUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type ChecklistTaskUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<ChecklistTaskCreateWithoutChecklistInput, ChecklistTaskUncheckedCreateWithoutChecklistInput> | ChecklistTaskCreateWithoutChecklistInput[] | ChecklistTaskUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutChecklistInput | ChecklistTaskCreateOrConnectWithoutChecklistInput[]
    upsert?: ChecklistTaskUpsertWithWhereUniqueWithoutChecklistInput | ChecklistTaskUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: ChecklistTaskCreateManyChecklistInputEnvelope
    set?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    disconnect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    delete?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    connect?: ChecklistTaskWhereUniqueInput | ChecklistTaskWhereUniqueInput[]
    update?: ChecklistTaskUpdateWithWhereUniqueWithoutChecklistInput | ChecklistTaskUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: ChecklistTaskUpdateManyWithWhereWithoutChecklistInput | ChecklistTaskUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: ChecklistTaskScalarWhereInput | ChecklistTaskScalarWhereInput[]
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<InspectionScheduleCreateWithoutChecklistInput, InspectionScheduleUncheckedCreateWithoutChecklistInput> | InspectionScheduleCreateWithoutChecklistInput[] | InspectionScheduleUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: InspectionScheduleCreateOrConnectWithoutChecklistInput | InspectionScheduleCreateOrConnectWithoutChecklistInput[]
    upsert?: InspectionScheduleUpsertWithWhereUniqueWithoutChecklistInput | InspectionScheduleUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: InspectionScheduleCreateManyChecklistInputEnvelope
    set?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    disconnect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    delete?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    connect?: InspectionScheduleWhereUniqueInput | InspectionScheduleWhereUniqueInput[]
    update?: InspectionScheduleUpdateWithWhereUniqueWithoutChecklistInput | InspectionScheduleUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: InspectionScheduleUpdateManyWithWhereWithoutChecklistInput | InspectionScheduleUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
  }

  export type ChecklistCreateNestedOneWithoutTasksInput = {
    create?: XOR<ChecklistCreateWithoutTasksInput, ChecklistUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutTasksInput
    connect?: ChecklistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ChecklistResultCreateNestedManyWithoutTaskInput = {
    create?: XOR<ChecklistResultCreateWithoutTaskInput, ChecklistResultUncheckedCreateWithoutTaskInput> | ChecklistResultCreateWithoutTaskInput[] | ChecklistResultUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutTaskInput | ChecklistResultCreateOrConnectWithoutTaskInput[]
    createMany?: ChecklistResultCreateManyTaskInputEnvelope
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
  }

  export type ChecklistResultUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ChecklistResultCreateWithoutTaskInput, ChecklistResultUncheckedCreateWithoutTaskInput> | ChecklistResultCreateWithoutTaskInput[] | ChecklistResultUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutTaskInput | ChecklistResultCreateOrConnectWithoutTaskInput[]
    createMany?: ChecklistResultCreateManyTaskInputEnvelope
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
  }

  export type ChecklistUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ChecklistCreateWithoutTasksInput, ChecklistUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutTasksInput
    upsert?: ChecklistUpsertWithoutTasksInput
    connect?: ChecklistWhereUniqueInput
    update?: XOR<XOR<ChecklistUpdateToOneWithWhereWithoutTasksInput, ChecklistUpdateWithoutTasksInput>, ChecklistUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type ChecklistResultUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ChecklistResultCreateWithoutTaskInput, ChecklistResultUncheckedCreateWithoutTaskInput> | ChecklistResultCreateWithoutTaskInput[] | ChecklistResultUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutTaskInput | ChecklistResultCreateOrConnectWithoutTaskInput[]
    upsert?: ChecklistResultUpsertWithWhereUniqueWithoutTaskInput | ChecklistResultUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ChecklistResultCreateManyTaskInputEnvelope
    set?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    disconnect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    delete?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    update?: ChecklistResultUpdateWithWhereUniqueWithoutTaskInput | ChecklistResultUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ChecklistResultUpdateManyWithWhereWithoutTaskInput | ChecklistResultUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
  }

  export type ChecklistResultUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ChecklistResultCreateWithoutTaskInput, ChecklistResultUncheckedCreateWithoutTaskInput> | ChecklistResultCreateWithoutTaskInput[] | ChecklistResultUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistResultCreateOrConnectWithoutTaskInput | ChecklistResultCreateOrConnectWithoutTaskInput[]
    upsert?: ChecklistResultUpsertWithWhereUniqueWithoutTaskInput | ChecklistResultUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ChecklistResultCreateManyTaskInputEnvelope
    set?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    disconnect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    delete?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    connect?: ChecklistResultWhereUniqueInput | ChecklistResultWhereUniqueInput[]
    update?: ChecklistResultUpdateWithWhereUniqueWithoutTaskInput | ChecklistResultUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ChecklistResultUpdateManyWithWhereWithoutTaskInput | ChecklistResultUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
  }

  export type ChecklistTaskCreateNestedOneWithoutResultsInput = {
    create?: XOR<ChecklistTaskCreateWithoutResultsInput, ChecklistTaskUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutResultsInput
    connect?: ChecklistTaskWhereUniqueInput
  }

  export type RepairServiceCreateNestedOneWithoutChecklistResultsInput = {
    create?: XOR<RepairServiceCreateWithoutChecklistResultsInput, RepairServiceUncheckedCreateWithoutChecklistResultsInput>
    connectOrCreate?: RepairServiceCreateOrConnectWithoutChecklistResultsInput
    connect?: RepairServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedResultsInput = {
    create?: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedResultsInput
    connect?: UserWhereUniqueInput
  }

  export type ChecklistTaskUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ChecklistTaskCreateWithoutResultsInput, ChecklistTaskUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ChecklistTaskCreateOrConnectWithoutResultsInput
    upsert?: ChecklistTaskUpsertWithoutResultsInput
    connect?: ChecklistTaskWhereUniqueInput
    update?: XOR<XOR<ChecklistTaskUpdateToOneWithWhereWithoutResultsInput, ChecklistTaskUpdateWithoutResultsInput>, ChecklistTaskUncheckedUpdateWithoutResultsInput>
  }

  export type RepairServiceUpdateOneRequiredWithoutChecklistResultsNestedInput = {
    create?: XOR<RepairServiceCreateWithoutChecklistResultsInput, RepairServiceUncheckedCreateWithoutChecklistResultsInput>
    connectOrCreate?: RepairServiceCreateOrConnectWithoutChecklistResultsInput
    upsert?: RepairServiceUpsertWithoutChecklistResultsInput
    connect?: RepairServiceWhereUniqueInput
    update?: XOR<XOR<RepairServiceUpdateToOneWithWhereWithoutChecklistResultsInput, RepairServiceUpdateWithoutChecklistResultsInput>, RepairServiceUncheckedUpdateWithoutChecklistResultsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedResultsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedResultsInput
    upsert?: UserUpsertWithoutCreatedResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedResultsInput, UserUpdateWithoutCreatedResultsInput>, UserUncheckedUpdateWithoutCreatedResultsInput>
  }

  export type EquipmentCreateNestedOneWithoutInspectionSchedulesInput = {
    create?: XOR<EquipmentCreateWithoutInspectionSchedulesInput, EquipmentUncheckedCreateWithoutInspectionSchedulesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutInspectionSchedulesInput
    connect?: EquipmentWhereUniqueInput
  }

  export type ChecklistCreateNestedOneWithoutInspectionSchedulesInput = {
    create?: XOR<ChecklistCreateWithoutInspectionSchedulesInput, ChecklistUncheckedCreateWithoutInspectionSchedulesInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutInspectionSchedulesInput
    connect?: ChecklistWhereUniqueInput
  }

  export type ServiceOrderCreateNestedOneWithoutInspectionSchedulesInput = {
    create?: XOR<ServiceOrderCreateWithoutInspectionSchedulesInput, ServiceOrderUncheckedCreateWithoutInspectionSchedulesInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutInspectionSchedulesInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedSchedulesInput = {
    create?: XOR<UserCreateWithoutCreatedSchedulesInput, UserUncheckedCreateWithoutCreatedSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type EquipmentUpdateOneRequiredWithoutInspectionSchedulesNestedInput = {
    create?: XOR<EquipmentCreateWithoutInspectionSchedulesInput, EquipmentUncheckedCreateWithoutInspectionSchedulesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutInspectionSchedulesInput
    upsert?: EquipmentUpsertWithoutInspectionSchedulesInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutInspectionSchedulesInput, EquipmentUpdateWithoutInspectionSchedulesInput>, EquipmentUncheckedUpdateWithoutInspectionSchedulesInput>
  }

  export type ChecklistUpdateOneRequiredWithoutInspectionSchedulesNestedInput = {
    create?: XOR<ChecklistCreateWithoutInspectionSchedulesInput, ChecklistUncheckedCreateWithoutInspectionSchedulesInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutInspectionSchedulesInput
    upsert?: ChecklistUpsertWithoutInspectionSchedulesInput
    connect?: ChecklistWhereUniqueInput
    update?: XOR<XOR<ChecklistUpdateToOneWithWhereWithoutInspectionSchedulesInput, ChecklistUpdateWithoutInspectionSchedulesInput>, ChecklistUncheckedUpdateWithoutInspectionSchedulesInput>
  }

  export type ServiceOrderUpdateOneWithoutInspectionSchedulesNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutInspectionSchedulesInput, ServiceOrderUncheckedCreateWithoutInspectionSchedulesInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutInspectionSchedulesInput
    upsert?: ServiceOrderUpsertWithoutInspectionSchedulesInput
    disconnect?: ServiceOrderWhereInput | boolean
    delete?: ServiceOrderWhereInput | boolean
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutInspectionSchedulesInput, ServiceOrderUpdateWithoutInspectionSchedulesInput>, ServiceOrderUncheckedUpdateWithoutInspectionSchedulesInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSchedulesInput, UserUncheckedCreateWithoutCreatedSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSchedulesInput
    upsert?: UserUpsertWithoutCreatedSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSchedulesInput, UserUpdateWithoutCreatedSchedulesInput>, UserUncheckedUpdateWithoutCreatedSchedulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type NestedEnumAccessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelFilter<$PrismaModel> | $Enums.AccessLevel
  }

  export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessLevel | EnumAccessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessLevel[] | ListEnumAccessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessLevelWithAggregatesFilter<$PrismaModel> | $Enums.AccessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessLevelFilter<$PrismaModel>
    _max?: NestedEnumAccessLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AccessCreateWithoutUserInput = {
    id?: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type AccessUncheckedCreateWithoutUserInput = {
    id?: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type AccessCreateOrConnectWithoutUserInput = {
    where: AccessWhereUniqueInput
    create: XOR<AccessCreateWithoutUserInput, AccessUncheckedCreateWithoutUserInput>
  }

  export type AccessCreateManyUserInputEnvelope = {
    data: AccessCreateManyUserInput | AccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutCreatorInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    serviceOrders?: ServiceOrderCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutCreatorInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCreatorInput, EquipmentUncheckedCreateWithoutCreatorInput>
  }

  export type EquipmentCreateManyCreatorInputEnvelope = {
    data: EquipmentCreateManyCreatorInput | EquipmentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutChecklistsInput
    tasks?: ChecklistTaskCreateNestedManyWithoutChecklistInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutCreatorInput = {
    id?: string
    equipmentId: string
    createdAt?: Date | string
    tasks?: ChecklistTaskUncheckedCreateNestedManyWithoutChecklistInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutCreatorInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutCreatorInput, ChecklistUncheckedCreateWithoutCreatorInput>
  }

  export type ChecklistCreateManyCreatorInputEnvelope = {
    data: ChecklistCreateManyCreatorInput | ChecklistCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistTaskCreateWithoutCreatorInput = {
    id?: string
    order: number
    name: string
    createdAt?: Date | string
    checklist: ChecklistCreateNestedOneWithoutTasksInput
    results?: ChecklistResultCreateNestedManyWithoutTaskInput
  }

  export type ChecklistTaskUncheckedCreateWithoutCreatorInput = {
    id?: string
    checklistId: string
    order: number
    name: string
    createdAt?: Date | string
    results?: ChecklistResultUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChecklistTaskCreateOrConnectWithoutCreatorInput = {
    where: ChecklistTaskWhereUniqueInput
    create: XOR<ChecklistTaskCreateWithoutCreatorInput, ChecklistTaskUncheckedCreateWithoutCreatorInput>
  }

  export type ChecklistTaskCreateManyCreatorInputEnvelope = {
    data: ChecklistTaskCreateManyCreatorInput | ChecklistTaskCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistResultCreateWithoutCreatorInput = {
    id?: string
    instance: number
    checked: boolean
    createdAt?: Date | string
    task: ChecklistTaskCreateNestedOneWithoutResultsInput
    repair: RepairServiceCreateNestedOneWithoutChecklistResultsInput
  }

  export type ChecklistResultUncheckedCreateWithoutCreatorInput = {
    id?: string
    taskId: string
    instance: number
    repairId: string
    checked: boolean
    createdAt?: Date | string
  }

  export type ChecklistResultCreateOrConnectWithoutCreatorInput = {
    where: ChecklistResultWhereUniqueInput
    create: XOR<ChecklistResultCreateWithoutCreatorInput, ChecklistResultUncheckedCreateWithoutCreatorInput>
  }

  export type ChecklistResultCreateManyCreatorInputEnvelope = {
    data: ChecklistResultCreateManyCreatorInput | ChecklistResultCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestCreateWithoutCreatorInput = {
    id?: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsInput
    serviceOrder?: ServiceOrderCreateNestedOneWithoutRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutCreatorInput = {
    id?: string
    requesterId: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdAt?: Date | string
    serviceOrder?: ServiceOrderUncheckedCreateNestedOneWithoutRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutCreatorInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutCreatorInput, ServiceRequestUncheckedCreateWithoutCreatorInput>
  }

  export type ServiceRequestCreateManyCreatorInputEnvelope = {
    data: ServiceRequestCreateManyCreatorInput | ServiceRequestCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ServiceOrderCreateWithoutCreatorInput = {
    id?: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    request: ServiceRequestCreateNestedOneWithoutServiceOrderInput
    equipment: EquipmentCreateNestedOneWithoutServiceOrdersInput
    repairServices?: RepairServiceCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutCreatorInput = {
    id?: string
    requestId: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutCreatorInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutCreatorInput, ServiceOrderUncheckedCreateWithoutCreatorInput>
  }

  export type ServiceOrderCreateManyCreatorInputEnvelope = {
    data: ServiceOrderCreateManyCreatorInput | ServiceOrderCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RepairServiceCreateWithoutCreatorInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutRepairsInput
    order: ServiceOrderCreateNestedOneWithoutRepairServicesInput
    usedEquipment: EquipmentCreateNestedOneWithoutRepairServicesInput
    partsUsed?: SparePartCreateNestedManyWithoutUsedInInput
    checklistResults?: ChecklistResultCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUncheckedCreateWithoutCreatorInput = {
    id?: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    partsUsed?: SparePartUncheckedCreateNestedManyWithoutUsedInInput
    checklistResults?: ChecklistResultUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceCreateOrConnectWithoutCreatorInput = {
    where: RepairServiceWhereUniqueInput
    create: XOR<RepairServiceCreateWithoutCreatorInput, RepairServiceUncheckedCreateWithoutCreatorInput>
  }

  export type RepairServiceCreateManyCreatorInputEnvelope = {
    data: RepairServiceCreateManyCreatorInput | RepairServiceCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type InspectionScheduleCreateWithoutCreatorInput = {
    id?: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutInspectionSchedulesInput
    checklist: ChecklistCreateNestedOneWithoutInspectionSchedulesInput
    lastOrder?: ServiceOrderCreateNestedOneWithoutInspectionSchedulesInput
  }

  export type InspectionScheduleUncheckedCreateWithoutCreatorInput = {
    id?: string
    equipmentId: string
    checklistId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateOrConnectWithoutCreatorInput = {
    where: InspectionScheduleWhereUniqueInput
    create: XOR<InspectionScheduleCreateWithoutCreatorInput, InspectionScheduleUncheckedCreateWithoutCreatorInput>
  }

  export type InspectionScheduleCreateManyCreatorInputEnvelope = {
    data: InspectionScheduleCreateManyCreatorInput | InspectionScheduleCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RepairServiceCreateWithoutEmployeeInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    order: ServiceOrderCreateNestedOneWithoutRepairServicesInput
    usedEquipment: EquipmentCreateNestedOneWithoutRepairServicesInput
    partsUsed?: SparePartCreateNestedManyWithoutUsedInInput
    creator: UserCreateNestedOneWithoutCreatedRepairsInput
    checklistResults?: ChecklistResultCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUncheckedCreateWithoutEmployeeInput = {
    id?: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
    partsUsed?: SparePartUncheckedCreateNestedManyWithoutUsedInInput
    checklistResults?: ChecklistResultUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceCreateOrConnectWithoutEmployeeInput = {
    where: RepairServiceWhereUniqueInput
    create: XOR<RepairServiceCreateWithoutEmployeeInput, RepairServiceUncheckedCreateWithoutEmployeeInput>
  }

  export type RepairServiceCreateManyEmployeeInputEnvelope = {
    data: RepairServiceCreateManyEmployeeInput | RepairServiceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestCreateWithoutRequesterInput = {
    id?: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedRequestsInput
    serviceOrder?: ServiceOrderCreateNestedOneWithoutRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdBy: string
    createdAt?: Date | string
    serviceOrder?: ServiceOrderUncheckedCreateNestedOneWithoutRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutRequesterInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutRequesterInput, ServiceRequestUncheckedCreateWithoutRequesterInput>
  }

  export type ServiceRequestCreateManyRequesterInputEnvelope = {
    data: ServiceRequestCreateManyRequesterInput | ServiceRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type SparePartCreateWithoutCreatorInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdAt?: Date | string
    usedIn?: RepairServiceCreateNestedManyWithoutPartsUsedInput
  }

  export type SparePartUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdAt?: Date | string
    usedIn?: RepairServiceUncheckedCreateNestedManyWithoutPartsUsedInput
  }

  export type SparePartCreateOrConnectWithoutCreatorInput = {
    where: SparePartWhereUniqueInput
    create: XOR<SparePartCreateWithoutCreatorInput, SparePartUncheckedCreateWithoutCreatorInput>
  }

  export type SparePartCreateManyCreatorInputEnvelope = {
    data: SparePartCreateManyCreatorInput | SparePartCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AccessUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessWhereUniqueInput
    update: XOR<AccessUpdateWithoutUserInput, AccessUncheckedUpdateWithoutUserInput>
    create: XOR<AccessCreateWithoutUserInput, AccessUncheckedCreateWithoutUserInput>
  }

  export type AccessUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessWhereUniqueInput
    data: XOR<AccessUpdateWithoutUserInput, AccessUncheckedUpdateWithoutUserInput>
  }

  export type AccessUpdateManyWithWhereWithoutUserInput = {
    where: AccessScalarWhereInput
    data: XOR<AccessUpdateManyMutationInput, AccessUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessScalarWhereInput = {
    AND?: AccessScalarWhereInput | AccessScalarWhereInput[]
    OR?: AccessScalarWhereInput[]
    NOT?: AccessScalarWhereInput | AccessScalarWhereInput[]
    id?: StringFilter<"Access"> | string
    userId?: StringFilter<"Access"> | string
    department?: EnumDepartmentFilter<"Access"> | $Enums.Department
    level?: EnumAccessLevelFilter<"Access"> | $Enums.AccessLevel
    createdAt?: DateTimeFilter<"Access"> | Date | string
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCreatorInput, EquipmentUncheckedUpdateWithoutCreatorInput>
    create: XOR<EquipmentCreateWithoutCreatorInput, EquipmentUncheckedCreateWithoutCreatorInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCreatorInput, EquipmentUncheckedUpdateWithoutCreatorInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCreatorInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    lastRepairDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    nextRepairDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    daysBetweenRepairs?: IntNullableFilter<"Equipment"> | number | null
    createdBy?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type ChecklistUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutCreatorInput, ChecklistUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChecklistCreateWithoutCreatorInput, ChecklistUncheckedCreateWithoutCreatorInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutCreatorInput, ChecklistUncheckedUpdateWithoutCreatorInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutCreatorInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChecklistScalarWhereInput = {
    AND?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    OR?: ChecklistScalarWhereInput[]
    NOT?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    id?: StringFilter<"Checklist"> | string
    equipmentId?: StringFilter<"Checklist"> | string
    createdBy?: StringFilter<"Checklist"> | string
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
  }

  export type ChecklistTaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChecklistTaskWhereUniqueInput
    update: XOR<ChecklistTaskUpdateWithoutCreatorInput, ChecklistTaskUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChecklistTaskCreateWithoutCreatorInput, ChecklistTaskUncheckedCreateWithoutCreatorInput>
  }

  export type ChecklistTaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChecklistTaskWhereUniqueInput
    data: XOR<ChecklistTaskUpdateWithoutCreatorInput, ChecklistTaskUncheckedUpdateWithoutCreatorInput>
  }

  export type ChecklistTaskUpdateManyWithWhereWithoutCreatorInput = {
    where: ChecklistTaskScalarWhereInput
    data: XOR<ChecklistTaskUpdateManyMutationInput, ChecklistTaskUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChecklistTaskScalarWhereInput = {
    AND?: ChecklistTaskScalarWhereInput | ChecklistTaskScalarWhereInput[]
    OR?: ChecklistTaskScalarWhereInput[]
    NOT?: ChecklistTaskScalarWhereInput | ChecklistTaskScalarWhereInput[]
    id?: StringFilter<"ChecklistTask"> | string
    checklistId?: StringFilter<"ChecklistTask"> | string
    order?: IntFilter<"ChecklistTask"> | number
    name?: StringFilter<"ChecklistTask"> | string
    createdBy?: StringFilter<"ChecklistTask"> | string
    createdAt?: DateTimeFilter<"ChecklistTask"> | Date | string
  }

  export type ChecklistResultUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChecklistResultWhereUniqueInput
    update: XOR<ChecklistResultUpdateWithoutCreatorInput, ChecklistResultUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChecklistResultCreateWithoutCreatorInput, ChecklistResultUncheckedCreateWithoutCreatorInput>
  }

  export type ChecklistResultUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChecklistResultWhereUniqueInput
    data: XOR<ChecklistResultUpdateWithoutCreatorInput, ChecklistResultUncheckedUpdateWithoutCreatorInput>
  }

  export type ChecklistResultUpdateManyWithWhereWithoutCreatorInput = {
    where: ChecklistResultScalarWhereInput
    data: XOR<ChecklistResultUpdateManyMutationInput, ChecklistResultUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChecklistResultScalarWhereInput = {
    AND?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
    OR?: ChecklistResultScalarWhereInput[]
    NOT?: ChecklistResultScalarWhereInput | ChecklistResultScalarWhereInput[]
    id?: StringFilter<"ChecklistResult"> | string
    taskId?: StringFilter<"ChecklistResult"> | string
    instance?: IntFilter<"ChecklistResult"> | number
    repairId?: StringFilter<"ChecklistResult"> | string
    checked?: BoolFilter<"ChecklistResult"> | boolean
    createdBy?: StringFilter<"ChecklistResult"> | string
    createdAt?: DateTimeFilter<"ChecklistResult"> | Date | string
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutCreatorInput, ServiceRequestUncheckedUpdateWithoutCreatorInput>
    create: XOR<ServiceRequestCreateWithoutCreatorInput, ServiceRequestUncheckedCreateWithoutCreatorInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutCreatorInput, ServiceRequestUncheckedUpdateWithoutCreatorInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutCreatorInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ServiceRequestScalarWhereInput = {
    AND?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    OR?: ServiceRequestScalarWhereInput[]
    NOT?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    id?: StringFilter<"ServiceRequest"> | string
    requesterId?: StringFilter<"ServiceRequest"> | string
    orderDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    requestDate?: DateTimeFilter<"ServiceRequest"> | Date | string
    cost?: FloatFilter<"ServiceRequest"> | number
    createdBy?: StringFilter<"ServiceRequest"> | string
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
  }

  export type ServiceOrderUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ServiceOrderWhereUniqueInput
    update: XOR<ServiceOrderUpdateWithoutCreatorInput, ServiceOrderUncheckedUpdateWithoutCreatorInput>
    create: XOR<ServiceOrderCreateWithoutCreatorInput, ServiceOrderUncheckedCreateWithoutCreatorInput>
  }

  export type ServiceOrderUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ServiceOrderWhereUniqueInput
    data: XOR<ServiceOrderUpdateWithoutCreatorInput, ServiceOrderUncheckedUpdateWithoutCreatorInput>
  }

  export type ServiceOrderUpdateManyWithWhereWithoutCreatorInput = {
    where: ServiceOrderScalarWhereInput
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ServiceOrderScalarWhereInput = {
    AND?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
    OR?: ServiceOrderScalarWhereInput[]
    NOT?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
    id?: StringFilter<"ServiceOrder"> | string
    requestId?: StringFilter<"ServiceOrder"> | string
    equipmentId?: StringFilter<"ServiceOrder"> | string
    orderDate?: DateTimeFilter<"ServiceOrder"> | Date | string
    startDate?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    endDate?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    totalCost?: FloatFilter<"ServiceOrder"> | number
    type?: BoolFilter<"ServiceOrder"> | boolean
    notes?: StringNullableFilter<"ServiceOrder"> | string | null
    isOpen?: BoolFilter<"ServiceOrder"> | boolean
    isOperational?: BoolFilter<"ServiceOrder"> | boolean
    createdBy?: StringFilter<"ServiceOrder"> | string
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
  }

  export type RepairServiceUpsertWithWhereUniqueWithoutCreatorInput = {
    where: RepairServiceWhereUniqueInput
    update: XOR<RepairServiceUpdateWithoutCreatorInput, RepairServiceUncheckedUpdateWithoutCreatorInput>
    create: XOR<RepairServiceCreateWithoutCreatorInput, RepairServiceUncheckedCreateWithoutCreatorInput>
  }

  export type RepairServiceUpdateWithWhereUniqueWithoutCreatorInput = {
    where: RepairServiceWhereUniqueInput
    data: XOR<RepairServiceUpdateWithoutCreatorInput, RepairServiceUncheckedUpdateWithoutCreatorInput>
  }

  export type RepairServiceUpdateManyWithWhereWithoutCreatorInput = {
    where: RepairServiceScalarWhereInput
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyWithoutCreatorInput>
  }

  export type RepairServiceScalarWhereInput = {
    AND?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
    OR?: RepairServiceScalarWhereInput[]
    NOT?: RepairServiceScalarWhereInput | RepairServiceScalarWhereInput[]
    id?: StringFilter<"RepairService"> | string
    employeeId?: StringFilter<"RepairService"> | string
    orderId?: StringFilter<"RepairService"> | string
    usedEquipmentId?: StringFilter<"RepairService"> | string
    startDate?: DateTimeNullableFilter<"RepairService"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RepairService"> | Date | string | null
    cost?: FloatFilter<"RepairService"> | number
    orderDate?: DateTimeFilter<"RepairService"> | Date | string
    createdBy?: StringFilter<"RepairService"> | string
    createdAt?: DateTimeFilter<"RepairService"> | Date | string
  }

  export type InspectionScheduleUpsertWithWhereUniqueWithoutCreatorInput = {
    where: InspectionScheduleWhereUniqueInput
    update: XOR<InspectionScheduleUpdateWithoutCreatorInput, InspectionScheduleUncheckedUpdateWithoutCreatorInput>
    create: XOR<InspectionScheduleCreateWithoutCreatorInput, InspectionScheduleUncheckedCreateWithoutCreatorInput>
  }

  export type InspectionScheduleUpdateWithWhereUniqueWithoutCreatorInput = {
    where: InspectionScheduleWhereUniqueInput
    data: XOR<InspectionScheduleUpdateWithoutCreatorInput, InspectionScheduleUncheckedUpdateWithoutCreatorInput>
  }

  export type InspectionScheduleUpdateManyWithWhereWithoutCreatorInput = {
    where: InspectionScheduleScalarWhereInput
    data: XOR<InspectionScheduleUpdateManyMutationInput, InspectionScheduleUncheckedUpdateManyWithoutCreatorInput>
  }

  export type InspectionScheduleScalarWhereInput = {
    AND?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
    OR?: InspectionScheduleScalarWhereInput[]
    NOT?: InspectionScheduleScalarWhereInput | InspectionScheduleScalarWhereInput[]
    id?: StringFilter<"InspectionSchedule"> | string
    equipmentId?: StringFilter<"InspectionSchedule"> | string
    checklistId?: StringFilter<"InspectionSchedule"> | string
    lastOrderId?: StringNullableFilter<"InspectionSchedule"> | string | null
    orderDate?: DateTimeFilter<"InspectionSchedule"> | Date | string
    validityDays?: IntFilter<"InspectionSchedule"> | number
    nextDate?: DateTimeNullableFilter<"InspectionSchedule"> | Date | string | null
    seen?: BoolFilter<"InspectionSchedule"> | boolean
    createdBy?: StringFilter<"InspectionSchedule"> | string
    createdAt?: DateTimeFilter<"InspectionSchedule"> | Date | string
  }

  export type RepairServiceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: RepairServiceWhereUniqueInput
    update: XOR<RepairServiceUpdateWithoutEmployeeInput, RepairServiceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<RepairServiceCreateWithoutEmployeeInput, RepairServiceUncheckedCreateWithoutEmployeeInput>
  }

  export type RepairServiceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: RepairServiceWhereUniqueInput
    data: XOR<RepairServiceUpdateWithoutEmployeeInput, RepairServiceUncheckedUpdateWithoutEmployeeInput>
  }

  export type RepairServiceUpdateManyWithWhereWithoutEmployeeInput = {
    where: RepairServiceScalarWhereInput
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutRequesterInput, ServiceRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<ServiceRequestCreateWithoutRequesterInput, ServiceRequestUncheckedCreateWithoutRequesterInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutRequesterInput, ServiceRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type SparePartUpsertWithWhereUniqueWithoutCreatorInput = {
    where: SparePartWhereUniqueInput
    update: XOR<SparePartUpdateWithoutCreatorInput, SparePartUncheckedUpdateWithoutCreatorInput>
    create: XOR<SparePartCreateWithoutCreatorInput, SparePartUncheckedCreateWithoutCreatorInput>
  }

  export type SparePartUpdateWithWhereUniqueWithoutCreatorInput = {
    where: SparePartWhereUniqueInput
    data: XOR<SparePartUpdateWithoutCreatorInput, SparePartUncheckedUpdateWithoutCreatorInput>
  }

  export type SparePartUpdateManyWithWhereWithoutCreatorInput = {
    where: SparePartScalarWhereInput
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyWithoutCreatorInput>
  }

  export type SparePartScalarWhereInput = {
    AND?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
    OR?: SparePartScalarWhereInput[]
    NOT?: SparePartScalarWhereInput | SparePartScalarWhereInput[]
    id?: StringFilter<"SparePart"> | string
    name?: StringFilter<"SparePart"> | string
    weight?: FloatFilter<"SparePart"> | number
    material?: StringFilter<"SparePart"> | string
    unitCost?: FloatFilter<"SparePart"> | number
    quantity?: IntFilter<"SparePart"> | number
    createdBy?: StringFilter<"SparePart"> | string
    createdAt?: DateTimeFilter<"SparePart"> | Date | string
  }

  export type UserCreateWithoutAccessInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAccessInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
  }

  export type UserUpsertWithoutAccessInput = {
    update: XOR<UserUpdateWithoutAccessInput, UserUncheckedUpdateWithoutAccessInput>
    create: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessInput, UserUncheckedUpdateWithoutAccessInput>
  }

  export type UserUpdateWithoutAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutCreatedEquipmentInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedEquipmentInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedEquipmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEquipmentInput, UserUncheckedCreateWithoutCreatedEquipmentInput>
  }

  export type ServiceOrderCreateWithoutEquipmentInput = {
    id?: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    request: ServiceRequestCreateNestedOneWithoutServiceOrderInput
    creator: UserCreateNestedOneWithoutCreatedOrdersInput
    repairServices?: RepairServiceCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutEquipmentInput = {
    id?: string
    requestId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutEquipmentInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutEquipmentInput, ServiceOrderUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceOrderCreateManyEquipmentInputEnvelope = {
    data: ServiceOrderCreateManyEquipmentInput | ServiceOrderCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type RepairServiceCreateWithoutUsedEquipmentInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutRepairsInput
    order: ServiceOrderCreateNestedOneWithoutRepairServicesInput
    partsUsed?: SparePartCreateNestedManyWithoutUsedInInput
    creator: UserCreateNestedOneWithoutCreatedRepairsInput
    checklistResults?: ChecklistResultCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUncheckedCreateWithoutUsedEquipmentInput = {
    id?: string
    employeeId: string
    orderId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
    partsUsed?: SparePartUncheckedCreateNestedManyWithoutUsedInInput
    checklistResults?: ChecklistResultUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceCreateOrConnectWithoutUsedEquipmentInput = {
    where: RepairServiceWhereUniqueInput
    create: XOR<RepairServiceCreateWithoutUsedEquipmentInput, RepairServiceUncheckedCreateWithoutUsedEquipmentInput>
  }

  export type RepairServiceCreateManyUsedEquipmentInputEnvelope = {
    data: RepairServiceCreateManyUsedEquipmentInput | RepairServiceCreateManyUsedEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutEquipmentInput = {
    id?: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedChecklistsInput
    tasks?: ChecklistTaskCreateNestedManyWithoutChecklistInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutEquipmentInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
    tasks?: ChecklistTaskUncheckedCreateNestedManyWithoutChecklistInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutEquipmentInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutEquipmentInput, ChecklistUncheckedCreateWithoutEquipmentInput>
  }

  export type ChecklistCreateManyEquipmentInputEnvelope = {
    data: ChecklistCreateManyEquipmentInput | ChecklistCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type InspectionScheduleCreateWithoutEquipmentInput = {
    id?: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
    checklist: ChecklistCreateNestedOneWithoutInspectionSchedulesInput
    lastOrder?: ServiceOrderCreateNestedOneWithoutInspectionSchedulesInput
    creator: UserCreateNestedOneWithoutCreatedSchedulesInput
  }

  export type InspectionScheduleUncheckedCreateWithoutEquipmentInput = {
    id?: string
    checklistId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateOrConnectWithoutEquipmentInput = {
    where: InspectionScheduleWhereUniqueInput
    create: XOR<InspectionScheduleCreateWithoutEquipmentInput, InspectionScheduleUncheckedCreateWithoutEquipmentInput>
  }

  export type InspectionScheduleCreateManyEquipmentInputEnvelope = {
    data: InspectionScheduleCreateManyEquipmentInput | InspectionScheduleCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedEquipmentInput = {
    update: XOR<UserUpdateWithoutCreatedEquipmentInput, UserUncheckedUpdateWithoutCreatedEquipmentInput>
    create: XOR<UserCreateWithoutCreatedEquipmentInput, UserUncheckedCreateWithoutCreatedEquipmentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedEquipmentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedEquipmentInput, UserUncheckedUpdateWithoutCreatedEquipmentInput>
  }

  export type UserUpdateWithoutCreatedEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ServiceOrderUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ServiceOrderWhereUniqueInput
    update: XOR<ServiceOrderUpdateWithoutEquipmentInput, ServiceOrderUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ServiceOrderCreateWithoutEquipmentInput, ServiceOrderUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceOrderUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ServiceOrderWhereUniqueInput
    data: XOR<ServiceOrderUpdateWithoutEquipmentInput, ServiceOrderUncheckedUpdateWithoutEquipmentInput>
  }

  export type ServiceOrderUpdateManyWithWhereWithoutEquipmentInput = {
    where: ServiceOrderScalarWhereInput
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type RepairServiceUpsertWithWhereUniqueWithoutUsedEquipmentInput = {
    where: RepairServiceWhereUniqueInput
    update: XOR<RepairServiceUpdateWithoutUsedEquipmentInput, RepairServiceUncheckedUpdateWithoutUsedEquipmentInput>
    create: XOR<RepairServiceCreateWithoutUsedEquipmentInput, RepairServiceUncheckedCreateWithoutUsedEquipmentInput>
  }

  export type RepairServiceUpdateWithWhereUniqueWithoutUsedEquipmentInput = {
    where: RepairServiceWhereUniqueInput
    data: XOR<RepairServiceUpdateWithoutUsedEquipmentInput, RepairServiceUncheckedUpdateWithoutUsedEquipmentInput>
  }

  export type RepairServiceUpdateManyWithWhereWithoutUsedEquipmentInput = {
    where: RepairServiceScalarWhereInput
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyWithoutUsedEquipmentInput>
  }

  export type ChecklistUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutEquipmentInput, ChecklistUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ChecklistCreateWithoutEquipmentInput, ChecklistUncheckedCreateWithoutEquipmentInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutEquipmentInput, ChecklistUncheckedUpdateWithoutEquipmentInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutEquipmentInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type InspectionScheduleUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: InspectionScheduleWhereUniqueInput
    update: XOR<InspectionScheduleUpdateWithoutEquipmentInput, InspectionScheduleUncheckedUpdateWithoutEquipmentInput>
    create: XOR<InspectionScheduleCreateWithoutEquipmentInput, InspectionScheduleUncheckedCreateWithoutEquipmentInput>
  }

  export type InspectionScheduleUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: InspectionScheduleWhereUniqueInput
    data: XOR<InspectionScheduleUpdateWithoutEquipmentInput, InspectionScheduleUncheckedUpdateWithoutEquipmentInput>
  }

  export type InspectionScheduleUpdateManyWithWhereWithoutEquipmentInput = {
    where: InspectionScheduleScalarWhereInput
    data: XOR<InspectionScheduleUpdateManyMutationInput, InspectionScheduleUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type UserCreateWithoutSparePartInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutSparePartInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutSparePartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSparePartInput, UserUncheckedCreateWithoutSparePartInput>
  }

  export type RepairServiceCreateWithoutPartsUsedInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutRepairsInput
    order: ServiceOrderCreateNestedOneWithoutRepairServicesInput
    usedEquipment: EquipmentCreateNestedOneWithoutRepairServicesInput
    creator: UserCreateNestedOneWithoutCreatedRepairsInput
    checklistResults?: ChecklistResultCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUncheckedCreateWithoutPartsUsedInput = {
    id?: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
    checklistResults?: ChecklistResultUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceCreateOrConnectWithoutPartsUsedInput = {
    where: RepairServiceWhereUniqueInput
    create: XOR<RepairServiceCreateWithoutPartsUsedInput, RepairServiceUncheckedCreateWithoutPartsUsedInput>
  }

  export type UserUpsertWithoutSparePartInput = {
    update: XOR<UserUpdateWithoutSparePartInput, UserUncheckedUpdateWithoutSparePartInput>
    create: XOR<UserCreateWithoutSparePartInput, UserUncheckedCreateWithoutSparePartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSparePartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSparePartInput, UserUncheckedUpdateWithoutSparePartInput>
  }

  export type UserUpdateWithoutSparePartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutSparePartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type RepairServiceUpsertWithWhereUniqueWithoutPartsUsedInput = {
    where: RepairServiceWhereUniqueInput
    update: XOR<RepairServiceUpdateWithoutPartsUsedInput, RepairServiceUncheckedUpdateWithoutPartsUsedInput>
    create: XOR<RepairServiceCreateWithoutPartsUsedInput, RepairServiceUncheckedCreateWithoutPartsUsedInput>
  }

  export type RepairServiceUpdateWithWhereUniqueWithoutPartsUsedInput = {
    where: RepairServiceWhereUniqueInput
    data: XOR<RepairServiceUpdateWithoutPartsUsedInput, RepairServiceUncheckedUpdateWithoutPartsUsedInput>
  }

  export type RepairServiceUpdateManyWithWhereWithoutPartsUsedInput = {
    where: RepairServiceScalarWhereInput
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyWithoutPartsUsedInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutCreatedRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRequestsInput, UserUncheckedCreateWithoutCreatedRequestsInput>
  }

  export type ServiceOrderCreateWithoutRequestInput = {
    id?: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutServiceOrdersInput
    creator: UserCreateNestedOneWithoutCreatedOrdersInput
    repairServices?: RepairServiceCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutRequestInput = {
    id?: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutOrderInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutRequestInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutRequestInput, ServiceOrderUncheckedCreateWithoutRequestInput>
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutCreatedRequestsInput = {
    update: XOR<UserUpdateWithoutCreatedRequestsInput, UserUncheckedUpdateWithoutCreatedRequestsInput>
    create: XOR<UserCreateWithoutCreatedRequestsInput, UserUncheckedCreateWithoutCreatedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRequestsInput, UserUncheckedUpdateWithoutCreatedRequestsInput>
  }

  export type UserUpdateWithoutCreatedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ServiceOrderUpsertWithoutRequestInput = {
    update: XOR<ServiceOrderUpdateWithoutRequestInput, ServiceOrderUncheckedUpdateWithoutRequestInput>
    create: XOR<ServiceOrderCreateWithoutRequestInput, ServiceOrderUncheckedCreateWithoutRequestInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutRequestInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutRequestInput, ServiceOrderUncheckedUpdateWithoutRequestInput>
  }

  export type ServiceOrderUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutServiceOrdersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    repairServices?: RepairServiceUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairServices?: RepairServiceUncheckedUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceRequestCreateWithoutServiceOrderInput = {
    id?: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsInput
    creator: UserCreateNestedOneWithoutCreatedRequestsInput
  }

  export type ServiceRequestUncheckedCreateWithoutServiceOrderInput = {
    id?: string
    requesterId: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdBy: string
    createdAt?: Date | string
  }

  export type ServiceRequestCreateOrConnectWithoutServiceOrderInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutServiceOrderInput, ServiceRequestUncheckedCreateWithoutServiceOrderInput>
  }

  export type EquipmentCreateWithoutServiceOrdersInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedEquipmentInput
    repairServices?: RepairServiceCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutServiceOrdersInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdBy: string
    createdAt?: Date | string
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutServiceOrdersInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutServiceOrdersInput, EquipmentUncheckedCreateWithoutServiceOrdersInput>
  }

  export type UserCreateWithoutCreatedOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
  }

  export type RepairServiceCreateWithoutOrderInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutRepairsInput
    usedEquipment: EquipmentCreateNestedOneWithoutRepairServicesInput
    partsUsed?: SparePartCreateNestedManyWithoutUsedInInput
    creator: UserCreateNestedOneWithoutCreatedRepairsInput
    checklistResults?: ChecklistResultCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceUncheckedCreateWithoutOrderInput = {
    id?: string
    employeeId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
    partsUsed?: SparePartUncheckedCreateNestedManyWithoutUsedInInput
    checklistResults?: ChecklistResultUncheckedCreateNestedManyWithoutRepairInput
  }

  export type RepairServiceCreateOrConnectWithoutOrderInput = {
    where: RepairServiceWhereUniqueInput
    create: XOR<RepairServiceCreateWithoutOrderInput, RepairServiceUncheckedCreateWithoutOrderInput>
  }

  export type RepairServiceCreateManyOrderInputEnvelope = {
    data: RepairServiceCreateManyOrderInput | RepairServiceCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type InspectionScheduleCreateWithoutLastOrderInput = {
    id?: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutInspectionSchedulesInput
    checklist: ChecklistCreateNestedOneWithoutInspectionSchedulesInput
    creator: UserCreateNestedOneWithoutCreatedSchedulesInput
  }

  export type InspectionScheduleUncheckedCreateWithoutLastOrderInput = {
    id?: string
    equipmentId: string
    checklistId: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateOrConnectWithoutLastOrderInput = {
    where: InspectionScheduleWhereUniqueInput
    create: XOR<InspectionScheduleCreateWithoutLastOrderInput, InspectionScheduleUncheckedCreateWithoutLastOrderInput>
  }

  export type InspectionScheduleCreateManyLastOrderInputEnvelope = {
    data: InspectionScheduleCreateManyLastOrderInput | InspectionScheduleCreateManyLastOrderInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestUpsertWithoutServiceOrderInput = {
    update: XOR<ServiceRequestUpdateWithoutServiceOrderInput, ServiceRequestUncheckedUpdateWithoutServiceOrderInput>
    create: XOR<ServiceRequestCreateWithoutServiceOrderInput, ServiceRequestUncheckedCreateWithoutServiceOrderInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutServiceOrderInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutServiceOrderInput, ServiceRequestUncheckedUpdateWithoutServiceOrderInput>
  }

  export type ServiceRequestUpdateWithoutServiceOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRequestsNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutServiceOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpsertWithoutServiceOrdersInput = {
    update: XOR<EquipmentUpdateWithoutServiceOrdersInput, EquipmentUncheckedUpdateWithoutServiceOrdersInput>
    create: XOR<EquipmentCreateWithoutServiceOrdersInput, EquipmentUncheckedCreateWithoutServiceOrdersInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutServiceOrdersInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutServiceOrdersInput, EquipmentUncheckedUpdateWithoutServiceOrdersInput>
  }

  export type EquipmentUpdateWithoutServiceOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedEquipmentNestedInput
    repairServices?: RepairServiceUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutServiceOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairServices?: RepairServiceUncheckedUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type UserUpsertWithoutCreatedOrdersInput = {
    update: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type UserUpdateWithoutCreatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type RepairServiceUpsertWithWhereUniqueWithoutOrderInput = {
    where: RepairServiceWhereUniqueInput
    update: XOR<RepairServiceUpdateWithoutOrderInput, RepairServiceUncheckedUpdateWithoutOrderInput>
    create: XOR<RepairServiceCreateWithoutOrderInput, RepairServiceUncheckedCreateWithoutOrderInput>
  }

  export type RepairServiceUpdateWithWhereUniqueWithoutOrderInput = {
    where: RepairServiceWhereUniqueInput
    data: XOR<RepairServiceUpdateWithoutOrderInput, RepairServiceUncheckedUpdateWithoutOrderInput>
  }

  export type RepairServiceUpdateManyWithWhereWithoutOrderInput = {
    where: RepairServiceScalarWhereInput
    data: XOR<RepairServiceUpdateManyMutationInput, RepairServiceUncheckedUpdateManyWithoutOrderInput>
  }

  export type InspectionScheduleUpsertWithWhereUniqueWithoutLastOrderInput = {
    where: InspectionScheduleWhereUniqueInput
    update: XOR<InspectionScheduleUpdateWithoutLastOrderInput, InspectionScheduleUncheckedUpdateWithoutLastOrderInput>
    create: XOR<InspectionScheduleCreateWithoutLastOrderInput, InspectionScheduleUncheckedCreateWithoutLastOrderInput>
  }

  export type InspectionScheduleUpdateWithWhereUniqueWithoutLastOrderInput = {
    where: InspectionScheduleWhereUniqueInput
    data: XOR<InspectionScheduleUpdateWithoutLastOrderInput, InspectionScheduleUncheckedUpdateWithoutLastOrderInput>
  }

  export type InspectionScheduleUpdateManyWithWhereWithoutLastOrderInput = {
    where: InspectionScheduleScalarWhereInput
    data: XOR<InspectionScheduleUpdateManyMutationInput, InspectionScheduleUncheckedUpdateManyWithoutLastOrderInput>
  }

  export type UserCreateWithoutRepairsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRepairsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRepairsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepairsInput, UserUncheckedCreateWithoutRepairsInput>
  }

  export type ServiceOrderCreateWithoutRepairServicesInput = {
    id?: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    request: ServiceRequestCreateNestedOneWithoutServiceOrderInput
    equipment: EquipmentCreateNestedOneWithoutServiceOrdersInput
    creator: UserCreateNestedOneWithoutCreatedOrdersInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutRepairServicesInput = {
    id?: string
    requestId: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutLastOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutRepairServicesInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutRepairServicesInput, ServiceOrderUncheckedCreateWithoutRepairServicesInput>
  }

  export type EquipmentCreateWithoutRepairServicesInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedEquipmentInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutEquipmentInput
    checklists?: ChecklistCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutRepairServicesInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdBy: string
    createdAt?: Date | string
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutEquipmentInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutEquipmentInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutRepairServicesInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutRepairServicesInput, EquipmentUncheckedCreateWithoutRepairServicesInput>
  }

  export type SparePartCreateWithoutUsedInInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutSparePartInput
  }

  export type SparePartUncheckedCreateWithoutUsedInInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdBy: string
    createdAt?: Date | string
  }

  export type SparePartCreateOrConnectWithoutUsedInInput = {
    where: SparePartWhereUniqueInput
    create: XOR<SparePartCreateWithoutUsedInInput, SparePartUncheckedCreateWithoutUsedInInput>
  }

  export type UserCreateWithoutCreatedRepairsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedRepairsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedRepairsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRepairsInput, UserUncheckedCreateWithoutCreatedRepairsInput>
  }

  export type ChecklistResultCreateWithoutRepairInput = {
    id?: string
    instance: number
    checked: boolean
    createdAt?: Date | string
    task: ChecklistTaskCreateNestedOneWithoutResultsInput
    creator: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ChecklistResultUncheckedCreateWithoutRepairInput = {
    id?: string
    taskId: string
    instance: number
    checked: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistResultCreateOrConnectWithoutRepairInput = {
    where: ChecklistResultWhereUniqueInput
    create: XOR<ChecklistResultCreateWithoutRepairInput, ChecklistResultUncheckedCreateWithoutRepairInput>
  }

  export type ChecklistResultCreateManyRepairInputEnvelope = {
    data: ChecklistResultCreateManyRepairInput | ChecklistResultCreateManyRepairInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRepairsInput = {
    update: XOR<UserUpdateWithoutRepairsInput, UserUncheckedUpdateWithoutRepairsInput>
    create: XOR<UserCreateWithoutRepairsInput, UserUncheckedCreateWithoutRepairsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepairsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepairsInput, UserUncheckedUpdateWithoutRepairsInput>
  }

  export type UserUpdateWithoutRepairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRepairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ServiceOrderUpsertWithoutRepairServicesInput = {
    update: XOR<ServiceOrderUpdateWithoutRepairServicesInput, ServiceOrderUncheckedUpdateWithoutRepairServicesInput>
    create: XOR<ServiceOrderCreateWithoutRepairServicesInput, ServiceOrderUncheckedCreateWithoutRepairServicesInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutRepairServicesInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutRepairServicesInput, ServiceOrderUncheckedUpdateWithoutRepairServicesInput>
  }

  export type ServiceOrderUpdateWithoutRepairServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: ServiceRequestUpdateOneRequiredWithoutServiceOrderNestedInput
    equipment?: EquipmentUpdateOneRequiredWithoutServiceOrdersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutRepairServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutLastOrderNestedInput
  }

  export type EquipmentUpsertWithoutRepairServicesInput = {
    update: XOR<EquipmentUpdateWithoutRepairServicesInput, EquipmentUncheckedUpdateWithoutRepairServicesInput>
    create: XOR<EquipmentCreateWithoutRepairServicesInput, EquipmentUncheckedCreateWithoutRepairServicesInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutRepairServicesInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutRepairServicesInput, EquipmentUncheckedUpdateWithoutRepairServicesInput>
  }

  export type EquipmentUpdateWithoutRepairServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedEquipmentNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutEquipmentNestedInput
    checklists?: ChecklistUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutRepairServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutEquipmentNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type SparePartUpsertWithWhereUniqueWithoutUsedInInput = {
    where: SparePartWhereUniqueInput
    update: XOR<SparePartUpdateWithoutUsedInInput, SparePartUncheckedUpdateWithoutUsedInInput>
    create: XOR<SparePartCreateWithoutUsedInInput, SparePartUncheckedCreateWithoutUsedInInput>
  }

  export type SparePartUpdateWithWhereUniqueWithoutUsedInInput = {
    where: SparePartWhereUniqueInput
    data: XOR<SparePartUpdateWithoutUsedInInput, SparePartUncheckedUpdateWithoutUsedInInput>
  }

  export type SparePartUpdateManyWithWhereWithoutUsedInInput = {
    where: SparePartScalarWhereInput
    data: XOR<SparePartUpdateManyMutationInput, SparePartUncheckedUpdateManyWithoutUsedInInput>
  }

  export type UserUpsertWithoutCreatedRepairsInput = {
    update: XOR<UserUpdateWithoutCreatedRepairsInput, UserUncheckedUpdateWithoutCreatedRepairsInput>
    create: XOR<UserCreateWithoutCreatedRepairsInput, UserUncheckedCreateWithoutCreatedRepairsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRepairsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRepairsInput, UserUncheckedUpdateWithoutCreatedRepairsInput>
  }

  export type UserUpdateWithoutCreatedRepairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRepairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ChecklistResultUpsertWithWhereUniqueWithoutRepairInput = {
    where: ChecklistResultWhereUniqueInput
    update: XOR<ChecklistResultUpdateWithoutRepairInput, ChecklistResultUncheckedUpdateWithoutRepairInput>
    create: XOR<ChecklistResultCreateWithoutRepairInput, ChecklistResultUncheckedCreateWithoutRepairInput>
  }

  export type ChecklistResultUpdateWithWhereUniqueWithoutRepairInput = {
    where: ChecklistResultWhereUniqueInput
    data: XOR<ChecklistResultUpdateWithoutRepairInput, ChecklistResultUncheckedUpdateWithoutRepairInput>
  }

  export type ChecklistResultUpdateManyWithWhereWithoutRepairInput = {
    where: ChecklistResultScalarWhereInput
    data: XOR<ChecklistResultUpdateManyMutationInput, ChecklistResultUncheckedUpdateManyWithoutRepairInput>
  }

  export type EquipmentCreateWithoutChecklistsInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedEquipmentInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceCreateNestedManyWithoutUsedEquipmentInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutChecklistsInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdBy: string
    createdAt?: Date | string
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutUsedEquipmentInput
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutChecklistsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutChecklistsInput, EquipmentUncheckedCreateWithoutChecklistsInput>
  }

  export type UserCreateWithoutCreatedChecklistsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedChecklistsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedChecklistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedChecklistsInput, UserUncheckedCreateWithoutCreatedChecklistsInput>
  }

  export type ChecklistTaskCreateWithoutChecklistInput = {
    id?: string
    order: number
    name: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedTasksInput
    results?: ChecklistResultCreateNestedManyWithoutTaskInput
  }

  export type ChecklistTaskUncheckedCreateWithoutChecklistInput = {
    id?: string
    order: number
    name: string
    createdBy: string
    createdAt?: Date | string
    results?: ChecklistResultUncheckedCreateNestedManyWithoutTaskInput
  }

  export type ChecklistTaskCreateOrConnectWithoutChecklistInput = {
    where: ChecklistTaskWhereUniqueInput
    create: XOR<ChecklistTaskCreateWithoutChecklistInput, ChecklistTaskUncheckedCreateWithoutChecklistInput>
  }

  export type ChecklistTaskCreateManyChecklistInputEnvelope = {
    data: ChecklistTaskCreateManyChecklistInput | ChecklistTaskCreateManyChecklistInput[]
    skipDuplicates?: boolean
  }

  export type InspectionScheduleCreateWithoutChecklistInput = {
    id?: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutInspectionSchedulesInput
    lastOrder?: ServiceOrderCreateNestedOneWithoutInspectionSchedulesInput
    creator: UserCreateNestedOneWithoutCreatedSchedulesInput
  }

  export type InspectionScheduleUncheckedCreateWithoutChecklistInput = {
    id?: string
    equipmentId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateOrConnectWithoutChecklistInput = {
    where: InspectionScheduleWhereUniqueInput
    create: XOR<InspectionScheduleCreateWithoutChecklistInput, InspectionScheduleUncheckedCreateWithoutChecklistInput>
  }

  export type InspectionScheduleCreateManyChecklistInputEnvelope = {
    data: InspectionScheduleCreateManyChecklistInput | InspectionScheduleCreateManyChecklistInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithoutChecklistsInput = {
    update: XOR<EquipmentUpdateWithoutChecklistsInput, EquipmentUncheckedUpdateWithoutChecklistsInput>
    create: XOR<EquipmentCreateWithoutChecklistsInput, EquipmentUncheckedCreateWithoutChecklistsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutChecklistsInput, EquipmentUncheckedUpdateWithoutChecklistsInput>
  }

  export type EquipmentUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedEquipmentNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUpdateManyWithoutUsedEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUncheckedUpdateManyWithoutUsedEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type UserUpsertWithoutCreatedChecklistsInput = {
    update: XOR<UserUpdateWithoutCreatedChecklistsInput, UserUncheckedUpdateWithoutCreatedChecklistsInput>
    create: XOR<UserCreateWithoutCreatedChecklistsInput, UserUncheckedCreateWithoutCreatedChecklistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedChecklistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedChecklistsInput, UserUncheckedUpdateWithoutCreatedChecklistsInput>
  }

  export type UserUpdateWithoutCreatedChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ChecklistTaskUpsertWithWhereUniqueWithoutChecklistInput = {
    where: ChecklistTaskWhereUniqueInput
    update: XOR<ChecklistTaskUpdateWithoutChecklistInput, ChecklistTaskUncheckedUpdateWithoutChecklistInput>
    create: XOR<ChecklistTaskCreateWithoutChecklistInput, ChecklistTaskUncheckedCreateWithoutChecklistInput>
  }

  export type ChecklistTaskUpdateWithWhereUniqueWithoutChecklistInput = {
    where: ChecklistTaskWhereUniqueInput
    data: XOR<ChecklistTaskUpdateWithoutChecklistInput, ChecklistTaskUncheckedUpdateWithoutChecklistInput>
  }

  export type ChecklistTaskUpdateManyWithWhereWithoutChecklistInput = {
    where: ChecklistTaskScalarWhereInput
    data: XOR<ChecklistTaskUpdateManyMutationInput, ChecklistTaskUncheckedUpdateManyWithoutChecklistInput>
  }

  export type InspectionScheduleUpsertWithWhereUniqueWithoutChecklistInput = {
    where: InspectionScheduleWhereUniqueInput
    update: XOR<InspectionScheduleUpdateWithoutChecklistInput, InspectionScheduleUncheckedUpdateWithoutChecklistInput>
    create: XOR<InspectionScheduleCreateWithoutChecklistInput, InspectionScheduleUncheckedCreateWithoutChecklistInput>
  }

  export type InspectionScheduleUpdateWithWhereUniqueWithoutChecklistInput = {
    where: InspectionScheduleWhereUniqueInput
    data: XOR<InspectionScheduleUpdateWithoutChecklistInput, InspectionScheduleUncheckedUpdateWithoutChecklistInput>
  }

  export type InspectionScheduleUpdateManyWithWhereWithoutChecklistInput = {
    where: InspectionScheduleScalarWhereInput
    data: XOR<InspectionScheduleUpdateManyMutationInput, InspectionScheduleUncheckedUpdateManyWithoutChecklistInput>
  }

  export type ChecklistCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutChecklistsInput
    creator: UserCreateNestedOneWithoutCreatedChecklistsInput
    inspectionSchedules?: InspectionScheduleCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutTasksInput = {
    id?: string
    equipmentId: string
    createdBy: string
    createdAt?: Date | string
    inspectionSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutTasksInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutTasksInput, ChecklistUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type ChecklistResultCreateWithoutTaskInput = {
    id?: string
    instance: number
    checked: boolean
    createdAt?: Date | string
    repair: RepairServiceCreateNestedOneWithoutChecklistResultsInput
    creator: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ChecklistResultUncheckedCreateWithoutTaskInput = {
    id?: string
    instance: number
    repairId: string
    checked: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistResultCreateOrConnectWithoutTaskInput = {
    where: ChecklistResultWhereUniqueInput
    create: XOR<ChecklistResultCreateWithoutTaskInput, ChecklistResultUncheckedCreateWithoutTaskInput>
  }

  export type ChecklistResultCreateManyTaskInputEnvelope = {
    data: ChecklistResultCreateManyTaskInput | ChecklistResultCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistUpsertWithoutTasksInput = {
    update: XOR<ChecklistUpdateWithoutTasksInput, ChecklistUncheckedUpdateWithoutTasksInput>
    create: XOR<ChecklistCreateWithoutTasksInput, ChecklistUncheckedCreateWithoutTasksInput>
    where?: ChecklistWhereInput
  }

  export type ChecklistUpdateToOneWithWhereWithoutTasksInput = {
    where?: ChecklistWhereInput
    data: XOR<ChecklistUpdateWithoutTasksInput, ChecklistUncheckedUpdateWithoutTasksInput>
  }

  export type ChecklistUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutChecklistsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedChecklistsNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ChecklistResultUpsertWithWhereUniqueWithoutTaskInput = {
    where: ChecklistResultWhereUniqueInput
    update: XOR<ChecklistResultUpdateWithoutTaskInput, ChecklistResultUncheckedUpdateWithoutTaskInput>
    create: XOR<ChecklistResultCreateWithoutTaskInput, ChecklistResultUncheckedCreateWithoutTaskInput>
  }

  export type ChecklistResultUpdateWithWhereUniqueWithoutTaskInput = {
    where: ChecklistResultWhereUniqueInput
    data: XOR<ChecklistResultUpdateWithoutTaskInput, ChecklistResultUncheckedUpdateWithoutTaskInput>
  }

  export type ChecklistResultUpdateManyWithWhereWithoutTaskInput = {
    where: ChecklistResultScalarWhereInput
    data: XOR<ChecklistResultUpdateManyMutationInput, ChecklistResultUncheckedUpdateManyWithoutTaskInput>
  }

  export type ChecklistTaskCreateWithoutResultsInput = {
    id?: string
    order: number
    name: string
    createdAt?: Date | string
    checklist: ChecklistCreateNestedOneWithoutTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type ChecklistTaskUncheckedCreateWithoutResultsInput = {
    id?: string
    checklistId: string
    order: number
    name: string
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistTaskCreateOrConnectWithoutResultsInput = {
    where: ChecklistTaskWhereUniqueInput
    create: XOR<ChecklistTaskCreateWithoutResultsInput, ChecklistTaskUncheckedCreateWithoutResultsInput>
  }

  export type RepairServiceCreateWithoutChecklistResultsInput = {
    id?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutRepairsInput
    order: ServiceOrderCreateNestedOneWithoutRepairServicesInput
    usedEquipment: EquipmentCreateNestedOneWithoutRepairServicesInput
    partsUsed?: SparePartCreateNestedManyWithoutUsedInInput
    creator: UserCreateNestedOneWithoutCreatedRepairsInput
  }

  export type RepairServiceUncheckedCreateWithoutChecklistResultsInput = {
    id?: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
    partsUsed?: SparePartUncheckedCreateNestedManyWithoutUsedInInput
  }

  export type RepairServiceCreateOrConnectWithoutChecklistResultsInput = {
    where: RepairServiceWhereUniqueInput
    create: XOR<RepairServiceCreateWithoutChecklistResultsInput, RepairServiceUncheckedCreateWithoutChecklistResultsInput>
  }

  export type UserCreateWithoutCreatedResultsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedResultsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    createdSchedules?: InspectionScheduleUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
  }

  export type ChecklistTaskUpsertWithoutResultsInput = {
    update: XOR<ChecklistTaskUpdateWithoutResultsInput, ChecklistTaskUncheckedUpdateWithoutResultsInput>
    create: XOR<ChecklistTaskCreateWithoutResultsInput, ChecklistTaskUncheckedCreateWithoutResultsInput>
    where?: ChecklistTaskWhereInput
  }

  export type ChecklistTaskUpdateToOneWithWhereWithoutResultsInput = {
    where?: ChecklistTaskWhereInput
    data: XOR<ChecklistTaskUpdateWithoutResultsInput, ChecklistTaskUncheckedUpdateWithoutResultsInput>
  }

  export type ChecklistTaskUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneRequiredWithoutTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type ChecklistTaskUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceUpsertWithoutChecklistResultsInput = {
    update: XOR<RepairServiceUpdateWithoutChecklistResultsInput, RepairServiceUncheckedUpdateWithoutChecklistResultsInput>
    create: XOR<RepairServiceCreateWithoutChecklistResultsInput, RepairServiceUncheckedCreateWithoutChecklistResultsInput>
    where?: RepairServiceWhereInput
  }

  export type RepairServiceUpdateToOneWithWhereWithoutChecklistResultsInput = {
    where?: RepairServiceWhereInput
    data: XOR<RepairServiceUpdateWithoutChecklistResultsInput, RepairServiceUncheckedUpdateWithoutChecklistResultsInput>
  }

  export type RepairServiceUpdateWithoutChecklistResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutRepairsNestedInput
    order?: ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput
    usedEquipment?: EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput
    partsUsed?: SparePartUpdateManyWithoutUsedInNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRepairsNestedInput
  }

  export type RepairServiceUncheckedUpdateWithoutChecklistResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partsUsed?: SparePartUncheckedUpdateManyWithoutUsedInNestedInput
  }

  export type UserUpsertWithoutCreatedResultsInput = {
    update: XOR<UserUpdateWithoutCreatedResultsInput, UserUncheckedUpdateWithoutCreatedResultsInput>
    create: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedResultsInput, UserUncheckedUpdateWithoutCreatedResultsInput>
  }

  export type UserUpdateWithoutCreatedResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    createdSchedules?: InspectionScheduleUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type EquipmentCreateWithoutInspectionSchedulesInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedEquipmentInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutInspectionSchedulesInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdBy: string
    createdAt?: Date | string
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutEquipmentInput
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutUsedEquipmentInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutInspectionSchedulesInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutInspectionSchedulesInput, EquipmentUncheckedCreateWithoutInspectionSchedulesInput>
  }

  export type ChecklistCreateWithoutInspectionSchedulesInput = {
    id?: string
    createdAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutChecklistsInput
    creator: UserCreateNestedOneWithoutCreatedChecklistsInput
    tasks?: ChecklistTaskCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUncheckedCreateWithoutInspectionSchedulesInput = {
    id?: string
    equipmentId: string
    createdBy: string
    createdAt?: Date | string
    tasks?: ChecklistTaskUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutInspectionSchedulesInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutInspectionSchedulesInput, ChecklistUncheckedCreateWithoutInspectionSchedulesInput>
  }

  export type ServiceOrderCreateWithoutInspectionSchedulesInput = {
    id?: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
    request: ServiceRequestCreateNestedOneWithoutServiceOrderInput
    equipment: EquipmentCreateNestedOneWithoutServiceOrdersInput
    creator: UserCreateNestedOneWithoutCreatedOrdersInput
    repairServices?: RepairServiceCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutInspectionSchedulesInput = {
    id?: string
    requestId: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
    repairServices?: RepairServiceUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutInspectionSchedulesInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutInspectionSchedulesInput, ServiceOrderUncheckedCreateWithoutInspectionSchedulesInput>
  }

  export type UserCreateWithoutCreatedSchedulesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatedSchedulesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    access?: AccessUncheckedCreateNestedManyWithoutUserInput
    createdEquipment?: EquipmentUncheckedCreateNestedManyWithoutCreatorInput
    createdChecklists?: ChecklistUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: ChecklistTaskUncheckedCreateNestedManyWithoutCreatorInput
    createdResults?: ChecklistResultUncheckedCreateNestedManyWithoutCreatorInput
    createdRequests?: ServiceRequestUncheckedCreateNestedManyWithoutCreatorInput
    createdOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCreatorInput
    createdRepairs?: RepairServiceUncheckedCreateNestedManyWithoutCreatorInput
    repairs?: RepairServiceUncheckedCreateNestedManyWithoutEmployeeInput
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutRequesterInput
    SparePart?: SparePartUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatedSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSchedulesInput, UserUncheckedCreateWithoutCreatedSchedulesInput>
  }

  export type EquipmentUpsertWithoutInspectionSchedulesInput = {
    update: XOR<EquipmentUpdateWithoutInspectionSchedulesInput, EquipmentUncheckedUpdateWithoutInspectionSchedulesInput>
    create: XOR<EquipmentCreateWithoutInspectionSchedulesInput, EquipmentUncheckedCreateWithoutInspectionSchedulesInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutInspectionSchedulesInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutInspectionSchedulesInput, EquipmentUncheckedUpdateWithoutInspectionSchedulesInput>
  }

  export type EquipmentUpdateWithoutInspectionSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedEquipmentNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutInspectionSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUncheckedUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type ChecklistUpsertWithoutInspectionSchedulesInput = {
    update: XOR<ChecklistUpdateWithoutInspectionSchedulesInput, ChecklistUncheckedUpdateWithoutInspectionSchedulesInput>
    create: XOR<ChecklistCreateWithoutInspectionSchedulesInput, ChecklistUncheckedCreateWithoutInspectionSchedulesInput>
    where?: ChecklistWhereInput
  }

  export type ChecklistUpdateToOneWithWhereWithoutInspectionSchedulesInput = {
    where?: ChecklistWhereInput
    data: XOR<ChecklistUpdateWithoutInspectionSchedulesInput, ChecklistUncheckedUpdateWithoutInspectionSchedulesInput>
  }

  export type ChecklistUpdateWithoutInspectionSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutChecklistsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedChecklistsNestedInput
    tasks?: ChecklistTaskUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutInspectionSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: ChecklistTaskUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ServiceOrderUpsertWithoutInspectionSchedulesInput = {
    update: XOR<ServiceOrderUpdateWithoutInspectionSchedulesInput, ServiceOrderUncheckedUpdateWithoutInspectionSchedulesInput>
    create: XOR<ServiceOrderCreateWithoutInspectionSchedulesInput, ServiceOrderUncheckedCreateWithoutInspectionSchedulesInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutInspectionSchedulesInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutInspectionSchedulesInput, ServiceOrderUncheckedUpdateWithoutInspectionSchedulesInput>
  }

  export type ServiceOrderUpdateWithoutInspectionSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: ServiceRequestUpdateOneRequiredWithoutServiceOrderNestedInput
    equipment?: EquipmentUpdateOneRequiredWithoutServiceOrdersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    repairServices?: RepairServiceUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutInspectionSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairServices?: RepairServiceUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutCreatedSchedulesInput = {
    update: XOR<UserUpdateWithoutCreatedSchedulesInput, UserUncheckedUpdateWithoutCreatedSchedulesInput>
    create: XOR<UserCreateWithoutCreatedSchedulesInput, UserUncheckedCreateWithoutCreatedSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSchedulesInput, UserUncheckedUpdateWithoutCreatedSchedulesInput>
  }

  export type UserUpdateWithoutCreatedSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: AccessUncheckedUpdateManyWithoutUserNestedInput
    createdEquipment?: EquipmentUncheckedUpdateManyWithoutCreatorNestedInput
    createdChecklists?: ChecklistUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: ChecklistTaskUncheckedUpdateManyWithoutCreatorNestedInput
    createdResults?: ChecklistResultUncheckedUpdateManyWithoutCreatorNestedInput
    createdRequests?: ServiceRequestUncheckedUpdateManyWithoutCreatorNestedInput
    createdOrders?: ServiceOrderUncheckedUpdateManyWithoutCreatorNestedInput
    createdRepairs?: RepairServiceUncheckedUpdateManyWithoutCreatorNestedInput
    repairs?: RepairServiceUncheckedUpdateManyWithoutEmployeeNestedInput
    requests?: ServiceRequestUncheckedUpdateManyWithoutRequesterNestedInput
    SparePart?: SparePartUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AccessCreateManyUserInput = {
    id?: string
    department: $Enums.Department
    level: $Enums.AccessLevel
    createdAt?: Date | string
  }

  export type EquipmentCreateManyCreatorInput = {
    id?: string
    name: string
    lastRepairDate?: Date | string | null
    nextRepairDate?: Date | string | null
    daysBetweenRepairs?: number | null
    createdAt?: Date | string
  }

  export type ChecklistCreateManyCreatorInput = {
    id?: string
    equipmentId: string
    createdAt?: Date | string
  }

  export type ChecklistTaskCreateManyCreatorInput = {
    id?: string
    checklistId: string
    order: number
    name: string
    createdAt?: Date | string
  }

  export type ChecklistResultCreateManyCreatorInput = {
    id?: string
    taskId: string
    instance: number
    repairId: string
    checked: boolean
    createdAt?: Date | string
  }

  export type ServiceRequestCreateManyCreatorInput = {
    id?: string
    requesterId: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdAt?: Date | string
  }

  export type ServiceOrderCreateManyCreatorInput = {
    id?: string
    requestId: string
    equipmentId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdAt?: Date | string
  }

  export type RepairServiceCreateManyCreatorInput = {
    id?: string
    employeeId: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateManyCreatorInput = {
    id?: string
    equipmentId: string
    checklistId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdAt?: Date | string
  }

  export type RepairServiceCreateManyEmployeeInput = {
    id?: string
    orderId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
  }

  export type ServiceRequestCreateManyRequesterInput = {
    id?: string
    orderDate: Date | string
    requestDate: Date | string
    cost: number
    createdBy: string
    createdAt?: Date | string
  }

  export type SparePartCreateManyCreatorInput = {
    id?: string
    name: string
    weight: number
    material: string
    unitCost: number
    quantity: number
    createdAt?: Date | string
  }

  export type AccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    level?: EnumAccessLevelFieldUpdateOperationsInput | $Enums.AccessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrders?: ServiceOrderUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutEquipmentNestedInput
    repairServices?: RepairServiceUncheckedUpdateManyWithoutUsedEquipmentNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutEquipmentNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextRepairDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daysBetweenRepairs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutChecklistsNestedInput
    tasks?: ChecklistTaskUpdateManyWithoutChecklistNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: ChecklistTaskUncheckedUpdateManyWithoutChecklistNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistTaskUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneRequiredWithoutTasksNestedInput
    results?: ChecklistResultUpdateManyWithoutTaskNestedInput
  }

  export type ChecklistTaskUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ChecklistResultUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChecklistTaskUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: ChecklistTaskUpdateOneRequiredWithoutResultsNestedInput
    repair?: RepairServiceUpdateOneRequiredWithoutChecklistResultsNestedInput
  }

  export type ChecklistResultUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    repairId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    repairId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
    serviceOrder?: ServiceOrderUpdateOneWithoutRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrder?: ServiceOrderUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: ServiceRequestUpdateOneRequiredWithoutServiceOrderNestedInput
    equipment?: EquipmentUpdateOneRequiredWithoutServiceOrdersNestedInput
    repairServices?: RepairServiceUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairServices?: RepairServiceUncheckedUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutRepairsNestedInput
    order?: ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput
    usedEquipment?: EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput
    partsUsed?: SparePartUpdateManyWithoutUsedInNestedInput
    checklistResults?: ChecklistResultUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partsUsed?: SparePartUncheckedUpdateManyWithoutUsedInNestedInput
    checklistResults?: ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    checklist?: ChecklistUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    lastOrder?: ServiceOrderUpdateOneWithoutInspectionSchedulesNestedInput
  }

  export type InspectionScheduleUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput
    usedEquipment?: EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput
    partsUsed?: SparePartUpdateManyWithoutUsedInNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRepairsNestedInput
    checklistResults?: ChecklistResultUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partsUsed?: SparePartUncheckedUpdateManyWithoutUsedInNestedInput
    checklistResults?: ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedRequestsNestedInput
    serviceOrder?: ServiceOrderUpdateOneWithoutRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrder?: ServiceOrderUncheckedUpdateOneWithoutRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedIn?: RepairServiceUpdateManyWithoutPartsUsedNestedInput
  }

  export type SparePartUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedIn?: RepairServiceUncheckedUpdateManyWithoutPartsUsedNestedInput
  }

  export type SparePartUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderCreateManyEquipmentInput = {
    id?: string
    requestId: string
    orderDate: Date | string
    startDate?: Date | string | null
    endDate?: Date | string | null
    totalCost: number
    type: boolean
    notes?: string | null
    isOpen: boolean
    isOperational: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type RepairServiceCreateManyUsedEquipmentInput = {
    id?: string
    employeeId: string
    orderId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistCreateManyEquipmentInput = {
    id?: string
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateManyEquipmentInput = {
    id?: string
    checklistId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ServiceOrderUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: ServiceRequestUpdateOneRequiredWithoutServiceOrderNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    repairServices?: RepairServiceUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairServices?: RepairServiceUncheckedUpdateManyWithoutOrderNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutLastOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    isOperational?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceUpdateWithoutUsedEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutRepairsNestedInput
    order?: ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput
    partsUsed?: SparePartUpdateManyWithoutUsedInNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRepairsNestedInput
    checklistResults?: ChecklistResultUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateWithoutUsedEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partsUsed?: SparePartUncheckedUpdateManyWithoutUsedInNestedInput
    checklistResults?: ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateManyWithoutUsedEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedChecklistsNestedInput
    tasks?: ChecklistTaskUpdateManyWithoutChecklistNestedInput
    inspectionSchedules?: InspectionScheduleUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: ChecklistTaskUncheckedUpdateManyWithoutChecklistNestedInput
    inspectionSchedules?: InspectionScheduleUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist?: ChecklistUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    lastOrder?: ServiceOrderUpdateOneWithoutInspectionSchedulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput
  }

  export type InspectionScheduleUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceUpdateWithoutPartsUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutRepairsNestedInput
    order?: ServiceOrderUpdateOneRequiredWithoutRepairServicesNestedInput
    usedEquipment?: EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRepairsNestedInput
    checklistResults?: ChecklistResultUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateWithoutPartsUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checklistResults?: ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateManyWithoutPartsUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairServiceCreateManyOrderInput = {
    id?: string
    employeeId: string
    usedEquipmentId: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    cost: number
    orderDate: Date | string
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateManyLastOrderInput = {
    id?: string
    equipmentId: string
    checklistId: string
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type RepairServiceUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutRepairsNestedInput
    usedEquipment?: EquipmentUpdateOneRequiredWithoutRepairServicesNestedInput
    partsUsed?: SparePartUpdateManyWithoutUsedInNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedRepairsNestedInput
    checklistResults?: ChecklistResultUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partsUsed?: SparePartUncheckedUpdateManyWithoutUsedInNestedInput
    checklistResults?: ChecklistResultUncheckedUpdateManyWithoutRepairNestedInput
  }

  export type RepairServiceUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    usedEquipmentId?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUpdateWithoutLastOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    checklist?: ChecklistUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput
  }

  export type InspectionScheduleUncheckedUpdateWithoutLastOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutLastOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    checklistId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultCreateManyRepairInput = {
    id?: string
    taskId: string
    instance: number
    checked: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type SparePartUpdateWithoutUsedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutSparePartNestedInput
  }

  export type SparePartUncheckedUpdateWithoutUsedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SparePartUncheckedUpdateManyWithoutUsedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    material?: StringFieldUpdateOperationsInput | string
    unitCost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultUpdateWithoutRepairInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: ChecklistTaskUpdateOneRequiredWithoutResultsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedResultsNestedInput
  }

  export type ChecklistResultUncheckedUpdateWithoutRepairInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultUncheckedUpdateManyWithoutRepairInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistTaskCreateManyChecklistInput = {
    id?: string
    order: number
    name: string
    createdBy: string
    createdAt?: Date | string
  }

  export type InspectionScheduleCreateManyChecklistInput = {
    id?: string
    equipmentId: string
    lastOrderId?: string | null
    orderDate: Date | string
    validityDays: number
    nextDate?: Date | string | null
    seen: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistTaskUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    results?: ChecklistResultUpdateManyWithoutTaskNestedInput
  }

  export type ChecklistTaskUncheckedUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ChecklistResultUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ChecklistTaskUncheckedUpdateManyWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutInspectionSchedulesNestedInput
    lastOrder?: ServiceOrderUpdateOneWithoutInspectionSchedulesNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput
  }

  export type InspectionScheduleUncheckedUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionScheduleUncheckedUpdateManyWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    lastOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    validityDays?: IntFieldUpdateOperationsInput | number
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seen?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultCreateManyTaskInput = {
    id?: string
    instance: number
    repairId: string
    checked: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type ChecklistResultUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repair?: RepairServiceUpdateOneRequiredWithoutChecklistResultsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedResultsNestedInput
  }

  export type ChecklistResultUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    repairId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistResultUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance?: IntFieldUpdateOperationsInput | number
    repairId?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}