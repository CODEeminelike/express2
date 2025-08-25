
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
 * Model food
 * 
 */
export type food = $Result.DefaultSelection<Prisma.$foodPayload>
/**
 * Model food_type
 * 
 */
export type food_type = $Result.DefaultSelection<Prisma.$food_typePayload>
/**
 * Model like_res
 * 
 */
export type like_res = $Result.DefaultSelection<Prisma.$like_resPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model rate_res
 * 
 */
export type rate_res = $Result.DefaultSelection<Prisma.$rate_resPayload>
/**
 * Model restaurant
 * 
 */
export type restaurant = $Result.DefaultSelection<Prisma.$restaurantPayload>
/**
 * Model sub_food
 * 
 */
export type sub_food = $Result.DefaultSelection<Prisma.$sub_foodPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Foods
 * const foods = await prisma.food.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Foods
   * const foods = await prisma.food.findMany()
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
   * `prisma.food`: Exposes CRUD operations for the **food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.foodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food_type`: Exposes CRUD operations for the **food_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_types
    * const food_types = await prisma.food_type.findMany()
    * ```
    */
  get food_type(): Prisma.food_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like_res`: Exposes CRUD operations for the **like_res** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Like_res
    * const like_res = await prisma.like_res.findMany()
    * ```
    */
  get like_res(): Prisma.like_resDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rate_res`: Exposes CRUD operations for the **rate_res** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rate_res
    * const rate_res = await prisma.rate_res.findMany()
    * ```
    */
  get rate_res(): Prisma.rate_resDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.restaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_food`: Exposes CRUD operations for the **sub_food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_foods
    * const sub_foods = await prisma.sub_food.findMany()
    * ```
    */
  get sub_food(): Prisma.sub_foodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    food: 'food',
    food_type: 'food_type',
    like_res: 'like_res',
    order: 'order',
    rate_res: 'rate_res',
    restaurant: 'restaurant',
    sub_food: 'sub_food',
    user: 'user'
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
      modelProps: "food" | "food_type" | "like_res" | "order" | "rate_res" | "restaurant" | "sub_food" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      food: {
        payload: Prisma.$foodPayload<ExtArgs>
        fields: Prisma.foodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          findFirst: {
            args: Prisma.foodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          findMany: {
            args: Prisma.foodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>[]
          }
          create: {
            args: Prisma.foodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          createMany: {
            args: Prisma.foodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.foodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          update: {
            args: Prisma.foodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          deleteMany: {
            args: Prisma.foodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.foodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.foodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.foodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      food_type: {
        payload: Prisma.$food_typePayload<ExtArgs>
        fields: Prisma.food_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.food_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.food_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          findFirst: {
            args: Prisma.food_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.food_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          findMany: {
            args: Prisma.food_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>[]
          }
          create: {
            args: Prisma.food_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          createMany: {
            args: Prisma.food_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.food_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          update: {
            args: Prisma.food_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          deleteMany: {
            args: Prisma.food_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.food_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.food_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          aggregate: {
            args: Prisma.Food_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood_type>
          }
          groupBy: {
            args: Prisma.food_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Food_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.food_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Food_typeCountAggregateOutputType> | number
          }
        }
      }
      like_res: {
        payload: Prisma.$like_resPayload<ExtArgs>
        fields: Prisma.like_resFieldRefs
        operations: {
          findUnique: {
            args: Prisma.like_resFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.like_resFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          findFirst: {
            args: Prisma.like_resFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.like_resFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          findMany: {
            args: Prisma.like_resFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>[]
          }
          create: {
            args: Prisma.like_resCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          createMany: {
            args: Prisma.like_resCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.like_resDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          update: {
            args: Prisma.like_resUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          deleteMany: {
            args: Prisma.like_resDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.like_resUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.like_resUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$like_resPayload>
          }
          aggregate: {
            args: Prisma.Like_resAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike_res>
          }
          groupBy: {
            args: Prisma.like_resGroupByArgs<ExtArgs>
            result: $Utils.Optional<Like_resGroupByOutputType>[]
          }
          count: {
            args: Prisma.like_resCountArgs<ExtArgs>
            result: $Utils.Optional<Like_resCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      rate_res: {
        payload: Prisma.$rate_resPayload<ExtArgs>
        fields: Prisma.rate_resFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rate_resFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rate_resFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          findFirst: {
            args: Prisma.rate_resFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rate_resFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          findMany: {
            args: Prisma.rate_resFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>[]
          }
          create: {
            args: Prisma.rate_resCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          createMany: {
            args: Prisma.rate_resCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rate_resDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          update: {
            args: Prisma.rate_resUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          deleteMany: {
            args: Prisma.rate_resDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rate_resUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rate_resUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rate_resPayload>
          }
          aggregate: {
            args: Prisma.Rate_resAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRate_res>
          }
          groupBy: {
            args: Prisma.rate_resGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rate_resGroupByOutputType>[]
          }
          count: {
            args: Prisma.rate_resCountArgs<ExtArgs>
            result: $Utils.Optional<Rate_resCountAggregateOutputType> | number
          }
        }
      }
      restaurant: {
        payload: Prisma.$restaurantPayload<ExtArgs>
        fields: Prisma.restaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findFirst: {
            args: Prisma.restaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findMany: {
            args: Prisma.restaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[]
          }
          create: {
            args: Prisma.restaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          createMany: {
            args: Prisma.restaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.restaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          update: {
            args: Prisma.restaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          deleteMany: {
            args: Prisma.restaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.restaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.restaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      sub_food: {
        payload: Prisma.$sub_foodPayload<ExtArgs>
        fields: Prisma.sub_foodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sub_foodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sub_foodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          findFirst: {
            args: Prisma.sub_foodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sub_foodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          findMany: {
            args: Prisma.sub_foodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>[]
          }
          create: {
            args: Prisma.sub_foodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          createMany: {
            args: Prisma.sub_foodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sub_foodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          update: {
            args: Prisma.sub_foodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          deleteMany: {
            args: Prisma.sub_foodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sub_foodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sub_foodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          aggregate: {
            args: Prisma.Sub_foodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_food>
          }
          groupBy: {
            args: Prisma.sub_foodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_foodGroupByOutputType>[]
          }
          count: {
            args: Prisma.sub_foodCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_foodCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    food?: foodOmit
    food_type?: food_typeOmit
    like_res?: like_resOmit
    order?: orderOmit
    rate_res?: rate_resOmit
    restaurant?: restaurantOmit
    sub_food?: sub_foodOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    order: number
    sub_food: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | FoodCountOutputTypeCountOrderArgs
    sub_food?: boolean | FoodCountOutputTypeCountSub_foodArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountSub_foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_foodWhereInput
  }


  /**
   * Count Type Food_typeCountOutputType
   */

  export type Food_typeCountOutputType = {
    food: number
  }

  export type Food_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | Food_typeCountOutputTypeCountFoodArgs
  }

  // Custom InputTypes
  /**
   * Food_typeCountOutputType without action
   */
  export type Food_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_typeCountOutputType
     */
    select?: Food_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Food_typeCountOutputType without action
   */
  export type Food_typeCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    like_res: number
    rate_res: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | RestaurantCountOutputTypeCountLike_resArgs
    rate_res?: boolean | RestaurantCountOutputTypeCountRate_resArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountLike_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_resWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountRate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rate_resWhereInput
  }


  /**
   * Count Type Sub_foodCountOutputType
   */

  export type Sub_foodCountOutputType = {
    order: number
  }

  export type Sub_foodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Sub_foodCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * Sub_foodCountOutputType without action
   */
  export type Sub_foodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_foodCountOutputType
     */
    select?: Sub_foodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sub_foodCountOutputType without action
   */
  export type Sub_foodCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    like_res: number
    order: number
    rate_res: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | UserCountOutputTypeCountLike_resArgs
    order?: boolean | UserCountOutputTypeCountOrderArgs
    rate_res?: boolean | UserCountOutputTypeCountRate_resArgs
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
  export type UserCountOutputTypeCountLike_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_resWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rate_resWhereInput
  }


  /**
   * Models
   */

  /**
   * Model food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    food_id: number | null
    price: number | null
    type_id: number | null
  }

  export type FoodSumAggregateOutputType = {
    food_id: number | null
    price: number | null
    type_id: number | null
  }

  export type FoodMinAggregateOutputType = {
    food_id: number | null
    food_name: string | null
    image: string | null
    price: number | null
    desc: string | null
    type_id: number | null
  }

  export type FoodMaxAggregateOutputType = {
    food_id: number | null
    food_name: string | null
    image: string | null
    price: number | null
    desc: string | null
    type_id: number | null
  }

  export type FoodCountAggregateOutputType = {
    food_id: number
    food_name: number
    image: number
    price: number
    desc: number
    type_id: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    food_id?: true
    price?: true
    type_id?: true
  }

  export type FoodSumAggregateInputType = {
    food_id?: true
    price?: true
    type_id?: true
  }

  export type FoodMinAggregateInputType = {
    food_id?: true
    food_name?: true
    image?: true
    price?: true
    desc?: true
    type_id?: true
  }

  export type FoodMaxAggregateInputType = {
    food_id?: true
    food_name?: true
    image?: true
    price?: true
    desc?: true
    type_id?: true
  }

  export type FoodCountAggregateInputType = {
    food_id?: true
    food_name?: true
    image?: true
    price?: true
    desc?: true
    type_id?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food to aggregate.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type foodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodWhereInput
    orderBy?: foodOrderByWithAggregationInput | foodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: foodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    food_id: number
    food_name: string
    image: string | null
    price: number
    desc: string | null
    type_id: number | null
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends foodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type foodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    food_name?: boolean
    image?: boolean
    price?: boolean
    desc?: boolean
    type_id?: boolean
    food_type?: boolean | food$food_typeArgs<ExtArgs>
    order?: boolean | food$orderArgs<ExtArgs>
    sub_food?: boolean | food$sub_foodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>



  export type foodSelectScalar = {
    food_id?: boolean
    food_name?: boolean
    image?: boolean
    price?: boolean
    desc?: boolean
    type_id?: boolean
  }

  export type foodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"food_id" | "food_name" | "image" | "price" | "desc" | "type_id", ExtArgs["result"]["food"]>
  export type foodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_type?: boolean | food$food_typeArgs<ExtArgs>
    order?: boolean | food$orderArgs<ExtArgs>
    sub_food?: boolean | food$sub_foodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $foodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food"
    objects: {
      food_type: Prisma.$food_typePayload<ExtArgs> | null
      order: Prisma.$orderPayload<ExtArgs>[]
      sub_food: Prisma.$sub_foodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      food_id: number
      food_name: string
      image: string | null
      price: number
      desc: string | null
      type_id: number | null
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type foodGetPayload<S extends boolean | null | undefined | foodDefaultArgs> = $Result.GetResult<Prisma.$foodPayload, S>

  type foodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface foodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food'], meta: { name: 'food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {foodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foodFindUniqueArgs>(args: SelectSubset<T, foodFindUniqueArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foodFindUniqueOrThrowArgs>(args: SelectSubset<T, foodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foodFindFirstArgs>(args?: SelectSubset<T, foodFindFirstArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foodFindFirstOrThrowArgs>(args?: SelectSubset<T, foodFindFirstOrThrowArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `food_id`
     * const foodWithFood_idOnly = await prisma.food.findMany({ select: { food_id: true } })
     * 
     */
    findMany<T extends foodFindManyArgs>(args?: SelectSubset<T, foodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {foodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends foodCreateArgs>(args: SelectSubset<T, foodCreateArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {foodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foodCreateManyArgs>(args?: SelectSubset<T, foodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {foodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends foodDeleteArgs>(args: SelectSubset<T, foodDeleteArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {foodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foodUpdateArgs>(args: SelectSubset<T, foodUpdateArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {foodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foodDeleteManyArgs>(args?: SelectSubset<T, foodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foodUpdateManyArgs>(args: SelectSubset<T, foodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {foodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends foodUpsertArgs>(args: SelectSubset<T, foodUpsertArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends foodCountArgs>(
      args?: Subset<T, foodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodGroupByArgs} args - Group by arguments.
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
      T extends foodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foodGroupByArgs['orderBy'] }
        : { orderBy?: foodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, foodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food model
   */
  readonly fields: foodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food_type<T extends food$food_typeArgs<ExtArgs> = {}>(args?: Subset<T, food$food_typeArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends food$orderArgs<ExtArgs> = {}>(args?: Subset<T, food$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_food<T extends food$sub_foodArgs<ExtArgs> = {}>(args?: Subset<T, food$sub_foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the food model
   */
  interface foodFieldRefs {
    readonly food_id: FieldRef<"food", 'Int'>
    readonly food_name: FieldRef<"food", 'String'>
    readonly image: FieldRef<"food", 'String'>
    readonly price: FieldRef<"food", 'Float'>
    readonly desc: FieldRef<"food", 'String'>
    readonly type_id: FieldRef<"food", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * food findUnique
   */
  export type foodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food findUniqueOrThrow
   */
  export type foodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food findFirst
   */
  export type foodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food findFirstOrThrow
   */
  export type foodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food findMany
   */
  export type foodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food create
   */
  export type foodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The data needed to create a food.
     */
    data: XOR<foodCreateInput, foodUncheckedCreateInput>
  }

  /**
   * food createMany
   */
  export type foodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many foods.
     */
    data: foodCreateManyInput | foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food update
   */
  export type foodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The data needed to update a food.
     */
    data: XOR<foodUpdateInput, foodUncheckedUpdateInput>
    /**
     * Choose, which food to update.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food updateMany
   */
  export type foodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update foods.
     */
    data: XOR<foodUpdateManyMutationInput, foodUncheckedUpdateManyInput>
    /**
     * Filter which foods to update
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to update.
     */
    limit?: number
  }

  /**
   * food upsert
   */
  export type foodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The filter to search for the food to update in case it exists.
     */
    where: foodWhereUniqueInput
    /**
     * In case the food found by the `where` argument doesn't exist, create a new food with this data.
     */
    create: XOR<foodCreateInput, foodUncheckedCreateInput>
    /**
     * In case the food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foodUpdateInput, foodUncheckedUpdateInput>
  }

  /**
   * food delete
   */
  export type foodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter which food to delete.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food deleteMany
   */
  export type foodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to delete
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to delete.
     */
    limit?: number
  }

  /**
   * food.food_type
   */
  export type food$food_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    where?: food_typeWhereInput
  }

  /**
   * food.order
   */
  export type food$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * food.sub_food
   */
  export type food$sub_foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    where?: sub_foodWhereInput
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    cursor?: sub_foodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * food without action
   */
  export type foodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
  }


  /**
   * Model food_type
   */

  export type AggregateFood_type = {
    _count: Food_typeCountAggregateOutputType | null
    _avg: Food_typeAvgAggregateOutputType | null
    _sum: Food_typeSumAggregateOutputType | null
    _min: Food_typeMinAggregateOutputType | null
    _max: Food_typeMaxAggregateOutputType | null
  }

  export type Food_typeAvgAggregateOutputType = {
    type_id: number | null
  }

  export type Food_typeSumAggregateOutputType = {
    type_id: number | null
  }

  export type Food_typeMinAggregateOutputType = {
    type_id: number | null
    type_name: string | null
  }

  export type Food_typeMaxAggregateOutputType = {
    type_id: number | null
    type_name: string | null
  }

  export type Food_typeCountAggregateOutputType = {
    type_id: number
    type_name: number
    _all: number
  }


  export type Food_typeAvgAggregateInputType = {
    type_id?: true
  }

  export type Food_typeSumAggregateInputType = {
    type_id?: true
  }

  export type Food_typeMinAggregateInputType = {
    type_id?: true
    type_name?: true
  }

  export type Food_typeMaxAggregateInputType = {
    type_id?: true
    type_name?: true
  }

  export type Food_typeCountAggregateInputType = {
    type_id?: true
    type_name?: true
    _all?: true
  }

  export type Food_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_type to aggregate.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned food_types
    **/
    _count?: true | Food_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_typeMaxAggregateInputType
  }

  export type GetFood_typeAggregateType<T extends Food_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_type[P]>
      : GetScalarType<T[P], AggregateFood_type[P]>
  }




  export type food_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_typeWhereInput
    orderBy?: food_typeOrderByWithAggregationInput | food_typeOrderByWithAggregationInput[]
    by: Food_typeScalarFieldEnum[] | Food_typeScalarFieldEnum
    having?: food_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_typeCountAggregateInputType | true
    _avg?: Food_typeAvgAggregateInputType
    _sum?: Food_typeSumAggregateInputType
    _min?: Food_typeMinAggregateInputType
    _max?: Food_typeMaxAggregateInputType
  }

  export type Food_typeGroupByOutputType = {
    type_id: number
    type_name: string
    _count: Food_typeCountAggregateOutputType | null
    _avg: Food_typeAvgAggregateOutputType | null
    _sum: Food_typeSumAggregateOutputType | null
    _min: Food_typeMinAggregateOutputType | null
    _max: Food_typeMaxAggregateOutputType | null
  }

  type GetFood_typeGroupByPayload<T extends food_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Food_typeGroupByOutputType[P]>
        }
      >
    >


  export type food_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    type_name?: boolean
    food?: boolean | food_type$foodArgs<ExtArgs>
    _count?: boolean | Food_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_type"]>



  export type food_typeSelectScalar = {
    type_id?: boolean
    type_name?: boolean
  }

  export type food_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type_id" | "type_name", ExtArgs["result"]["food_type"]>
  export type food_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | food_type$foodArgs<ExtArgs>
    _count?: boolean | Food_typeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $food_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food_type"
    objects: {
      food: Prisma.$foodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      type_id: number
      type_name: string
    }, ExtArgs["result"]["food_type"]>
    composites: {}
  }

  type food_typeGetPayload<S extends boolean | null | undefined | food_typeDefaultArgs> = $Result.GetResult<Prisma.$food_typePayload, S>

  type food_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<food_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Food_typeCountAggregateInputType | true
    }

  export interface food_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food_type'], meta: { name: 'food_type' } }
    /**
     * Find zero or one Food_type that matches the filter.
     * @param {food_typeFindUniqueArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends food_typeFindUniqueArgs>(args: SelectSubset<T, food_typeFindUniqueArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {food_typeFindUniqueOrThrowArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends food_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, food_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindFirstArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends food_typeFindFirstArgs>(args?: SelectSubset<T, food_typeFindFirstArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindFirstOrThrowArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends food_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, food_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Food_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_types
     * const food_types = await prisma.food_type.findMany()
     * 
     * // Get first 10 Food_types
     * const food_types = await prisma.food_type.findMany({ take: 10 })
     * 
     * // Only select the `type_id`
     * const food_typeWithType_idOnly = await prisma.food_type.findMany({ select: { type_id: true } })
     * 
     */
    findMany<T extends food_typeFindManyArgs>(args?: SelectSubset<T, food_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food_type.
     * @param {food_typeCreateArgs} args - Arguments to create a Food_type.
     * @example
     * // Create one Food_type
     * const Food_type = await prisma.food_type.create({
     *   data: {
     *     // ... data to create a Food_type
     *   }
     * })
     * 
     */
    create<T extends food_typeCreateArgs>(args: SelectSubset<T, food_typeCreateArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Food_types.
     * @param {food_typeCreateManyArgs} args - Arguments to create many Food_types.
     * @example
     * // Create many Food_types
     * const food_type = await prisma.food_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends food_typeCreateManyArgs>(args?: SelectSubset<T, food_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_type.
     * @param {food_typeDeleteArgs} args - Arguments to delete one Food_type.
     * @example
     * // Delete one Food_type
     * const Food_type = await prisma.food_type.delete({
     *   where: {
     *     // ... filter to delete one Food_type
     *   }
     * })
     * 
     */
    delete<T extends food_typeDeleteArgs>(args: SelectSubset<T, food_typeDeleteArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food_type.
     * @param {food_typeUpdateArgs} args - Arguments to update one Food_type.
     * @example
     * // Update one Food_type
     * const food_type = await prisma.food_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends food_typeUpdateArgs>(args: SelectSubset<T, food_typeUpdateArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Food_types.
     * @param {food_typeDeleteManyArgs} args - Arguments to filter Food_types to delete.
     * @example
     * // Delete a few Food_types
     * const { count } = await prisma.food_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends food_typeDeleteManyArgs>(args?: SelectSubset<T, food_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_types
     * const food_type = await prisma.food_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends food_typeUpdateManyArgs>(args: SelectSubset<T, food_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_type.
     * @param {food_typeUpsertArgs} args - Arguments to update or create a Food_type.
     * @example
     * // Update or create a Food_type
     * const food_type = await prisma.food_type.upsert({
     *   create: {
     *     // ... data to create a Food_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_type we want to update
     *   }
     * })
     */
    upsert<T extends food_typeUpsertArgs>(args: SelectSubset<T, food_typeUpsertArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Food_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeCountArgs} args - Arguments to filter Food_types to count.
     * @example
     * // Count the number of Food_types
     * const count = await prisma.food_type.count({
     *   where: {
     *     // ... the filter for the Food_types we want to count
     *   }
     * })
    **/
    count<T extends food_typeCountArgs>(
      args?: Subset<T, food_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Food_typeAggregateArgs>(args: Subset<T, Food_typeAggregateArgs>): Prisma.PrismaPromise<GetFood_typeAggregateType<T>>

    /**
     * Group by Food_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeGroupByArgs} args - Group by arguments.
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
      T extends food_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: food_typeGroupByArgs['orderBy'] }
        : { orderBy?: food_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, food_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food_type model
   */
  readonly fields: food_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__food_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends food_type$foodArgs<ExtArgs> = {}>(args?: Subset<T, food_type$foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the food_type model
   */
  interface food_typeFieldRefs {
    readonly type_id: FieldRef<"food_type", 'Int'>
    readonly type_name: FieldRef<"food_type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * food_type findUnique
   */
  export type food_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type findUniqueOrThrow
   */
  export type food_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type findFirst
   */
  export type food_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_types.
     */
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type findFirstOrThrow
   */
  export type food_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_types.
     */
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type findMany
   */
  export type food_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_types to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type create
   */
  export type food_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a food_type.
     */
    data: XOR<food_typeCreateInput, food_typeUncheckedCreateInput>
  }

  /**
   * food_type createMany
   */
  export type food_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many food_types.
     */
    data: food_typeCreateManyInput | food_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food_type update
   */
  export type food_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a food_type.
     */
    data: XOR<food_typeUpdateInput, food_typeUncheckedUpdateInput>
    /**
     * Choose, which food_type to update.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type updateMany
   */
  export type food_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update food_types.
     */
    data: XOR<food_typeUpdateManyMutationInput, food_typeUncheckedUpdateManyInput>
    /**
     * Filter which food_types to update
     */
    where?: food_typeWhereInput
    /**
     * Limit how many food_types to update.
     */
    limit?: number
  }

  /**
   * food_type upsert
   */
  export type food_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the food_type to update in case it exists.
     */
    where: food_typeWhereUniqueInput
    /**
     * In case the food_type found by the `where` argument doesn't exist, create a new food_type with this data.
     */
    create: XOR<food_typeCreateInput, food_typeUncheckedCreateInput>
    /**
     * In case the food_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<food_typeUpdateInput, food_typeUncheckedUpdateInput>
  }

  /**
   * food_type delete
   */
  export type food_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter which food_type to delete.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type deleteMany
   */
  export type food_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_types to delete
     */
    where?: food_typeWhereInput
    /**
     * Limit how many food_types to delete.
     */
    limit?: number
  }

  /**
   * food_type.food
   */
  export type food_type$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    cursor?: foodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food_type without action
   */
  export type food_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
  }


  /**
   * Model like_res
   */

  export type AggregateLike_res = {
    _count: Like_resCountAggregateOutputType | null
    _avg: Like_resAvgAggregateOutputType | null
    _sum: Like_resSumAggregateOutputType | null
    _min: Like_resMinAggregateOutputType | null
    _max: Like_resMaxAggregateOutputType | null
  }

  export type Like_resAvgAggregateOutputType = {
    user_id: number | null
    res_id: number | null
  }

  export type Like_resSumAggregateOutputType = {
    user_id: number | null
    res_id: number | null
  }

  export type Like_resMinAggregateOutputType = {
    user_id: number | null
    res_id: number | null
    date_like: Date | null
  }

  export type Like_resMaxAggregateOutputType = {
    user_id: number | null
    res_id: number | null
    date_like: Date | null
  }

  export type Like_resCountAggregateOutputType = {
    user_id: number
    res_id: number
    date_like: number
    _all: number
  }


  export type Like_resAvgAggregateInputType = {
    user_id?: true
    res_id?: true
  }

  export type Like_resSumAggregateInputType = {
    user_id?: true
    res_id?: true
  }

  export type Like_resMinAggregateInputType = {
    user_id?: true
    res_id?: true
    date_like?: true
  }

  export type Like_resMaxAggregateInputType = {
    user_id?: true
    res_id?: true
    date_like?: true
  }

  export type Like_resCountAggregateInputType = {
    user_id?: true
    res_id?: true
    date_like?: true
    _all?: true
  }

  export type Like_resAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like_res to aggregate.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned like_res
    **/
    _count?: true | Like_resCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Like_resAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Like_resSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Like_resMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Like_resMaxAggregateInputType
  }

  export type GetLike_resAggregateType<T extends Like_resAggregateArgs> = {
        [P in keyof T & keyof AggregateLike_res]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike_res[P]>
      : GetScalarType<T[P], AggregateLike_res[P]>
  }




  export type like_resGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: like_resWhereInput
    orderBy?: like_resOrderByWithAggregationInput | like_resOrderByWithAggregationInput[]
    by: Like_resScalarFieldEnum[] | Like_resScalarFieldEnum
    having?: like_resScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Like_resCountAggregateInputType | true
    _avg?: Like_resAvgAggregateInputType
    _sum?: Like_resSumAggregateInputType
    _min?: Like_resMinAggregateInputType
    _max?: Like_resMaxAggregateInputType
  }

  export type Like_resGroupByOutputType = {
    user_id: number
    res_id: number
    date_like: Date | null
    _count: Like_resCountAggregateOutputType | null
    _avg: Like_resAvgAggregateOutputType | null
    _sum: Like_resSumAggregateOutputType | null
    _min: Like_resMinAggregateOutputType | null
    _max: Like_resMaxAggregateOutputType | null
  }

  type GetLike_resGroupByPayload<T extends like_resGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Like_resGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Like_resGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Like_resGroupByOutputType[P]>
            : GetScalarType<T[P], Like_resGroupByOutputType[P]>
        }
      >
    >


  export type like_resSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    res_id?: boolean
    date_like?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like_res"]>



  export type like_resSelectScalar = {
    user_id?: boolean
    res_id?: boolean
    date_like?: boolean
  }

  export type like_resOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "res_id" | "date_like", ExtArgs["result"]["like_res"]>
  export type like_resInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }

  export type $like_resPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "like_res"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      restaurant: Prisma.$restaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      res_id: number
      date_like: Date | null
    }, ExtArgs["result"]["like_res"]>
    composites: {}
  }

  type like_resGetPayload<S extends boolean | null | undefined | like_resDefaultArgs> = $Result.GetResult<Prisma.$like_resPayload, S>

  type like_resCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<like_resFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Like_resCountAggregateInputType | true
    }

  export interface like_resDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like_res'], meta: { name: 'like_res' } }
    /**
     * Find zero or one Like_res that matches the filter.
     * @param {like_resFindUniqueArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends like_resFindUniqueArgs>(args: SelectSubset<T, like_resFindUniqueArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like_res that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {like_resFindUniqueOrThrowArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends like_resFindUniqueOrThrowArgs>(args: SelectSubset<T, like_resFindUniqueOrThrowArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resFindFirstArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends like_resFindFirstArgs>(args?: SelectSubset<T, like_resFindFirstArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like_res that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resFindFirstOrThrowArgs} args - Arguments to find a Like_res
     * @example
     * // Get one Like_res
     * const like_res = await prisma.like_res.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends like_resFindFirstOrThrowArgs>(args?: SelectSubset<T, like_resFindFirstOrThrowArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Like_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Like_res
     * const like_res = await prisma.like_res.findMany()
     * 
     * // Get first 10 Like_res
     * const like_res = await prisma.like_res.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const like_resWithUser_idOnly = await prisma.like_res.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends like_resFindManyArgs>(args?: SelectSubset<T, like_resFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like_res.
     * @param {like_resCreateArgs} args - Arguments to create a Like_res.
     * @example
     * // Create one Like_res
     * const Like_res = await prisma.like_res.create({
     *   data: {
     *     // ... data to create a Like_res
     *   }
     * })
     * 
     */
    create<T extends like_resCreateArgs>(args: SelectSubset<T, like_resCreateArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Like_res.
     * @param {like_resCreateManyArgs} args - Arguments to create many Like_res.
     * @example
     * // Create many Like_res
     * const like_res = await prisma.like_res.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends like_resCreateManyArgs>(args?: SelectSubset<T, like_resCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like_res.
     * @param {like_resDeleteArgs} args - Arguments to delete one Like_res.
     * @example
     * // Delete one Like_res
     * const Like_res = await prisma.like_res.delete({
     *   where: {
     *     // ... filter to delete one Like_res
     *   }
     * })
     * 
     */
    delete<T extends like_resDeleteArgs>(args: SelectSubset<T, like_resDeleteArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like_res.
     * @param {like_resUpdateArgs} args - Arguments to update one Like_res.
     * @example
     * // Update one Like_res
     * const like_res = await prisma.like_res.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends like_resUpdateArgs>(args: SelectSubset<T, like_resUpdateArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Like_res.
     * @param {like_resDeleteManyArgs} args - Arguments to filter Like_res to delete.
     * @example
     * // Delete a few Like_res
     * const { count } = await prisma.like_res.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends like_resDeleteManyArgs>(args?: SelectSubset<T, like_resDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Like_res
     * const like_res = await prisma.like_res.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends like_resUpdateManyArgs>(args: SelectSubset<T, like_resUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like_res.
     * @param {like_resUpsertArgs} args - Arguments to update or create a Like_res.
     * @example
     * // Update or create a Like_res
     * const like_res = await prisma.like_res.upsert({
     *   create: {
     *     // ... data to create a Like_res
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like_res we want to update
     *   }
     * })
     */
    upsert<T extends like_resUpsertArgs>(args: SelectSubset<T, like_resUpsertArgs<ExtArgs>>): Prisma__like_resClient<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resCountArgs} args - Arguments to filter Like_res to count.
     * @example
     * // Count the number of Like_res
     * const count = await prisma.like_res.count({
     *   where: {
     *     // ... the filter for the Like_res we want to count
     *   }
     * })
    **/
    count<T extends like_resCountArgs>(
      args?: Subset<T, like_resCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Like_resCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_resAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Like_resAggregateArgs>(args: Subset<T, Like_resAggregateArgs>): Prisma.PrismaPromise<GetLike_resAggregateType<T>>

    /**
     * Group by Like_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {like_resGroupByArgs} args - Group by arguments.
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
      T extends like_resGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: like_resGroupByArgs['orderBy'] }
        : { orderBy?: like_resGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, like_resGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLike_resGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the like_res model
   */
  readonly fields: like_resFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like_res.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__like_resClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the like_res model
   */
  interface like_resFieldRefs {
    readonly user_id: FieldRef<"like_res", 'Int'>
    readonly res_id: FieldRef<"like_res", 'Int'>
    readonly date_like: FieldRef<"like_res", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * like_res findUnique
   */
  export type like_resFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res findUniqueOrThrow
   */
  export type like_resFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res findFirst
   */
  export type like_resFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for like_res.
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of like_res.
     */
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * like_res findFirstOrThrow
   */
  export type like_resFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for like_res.
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of like_res.
     */
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * like_res findMany
   */
  export type like_resFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter, which like_res to fetch.
     */
    where?: like_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of like_res to fetch.
     */
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing like_res.
     */
    cursor?: like_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` like_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` like_res.
     */
    skip?: number
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * like_res create
   */
  export type like_resCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * The data needed to create a like_res.
     */
    data: XOR<like_resCreateInput, like_resUncheckedCreateInput>
  }

  /**
   * like_res createMany
   */
  export type like_resCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many like_res.
     */
    data: like_resCreateManyInput | like_resCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * like_res update
   */
  export type like_resUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * The data needed to update a like_res.
     */
    data: XOR<like_resUpdateInput, like_resUncheckedUpdateInput>
    /**
     * Choose, which like_res to update.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res updateMany
   */
  export type like_resUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update like_res.
     */
    data: XOR<like_resUpdateManyMutationInput, like_resUncheckedUpdateManyInput>
    /**
     * Filter which like_res to update
     */
    where?: like_resWhereInput
    /**
     * Limit how many like_res to update.
     */
    limit?: number
  }

  /**
   * like_res upsert
   */
  export type like_resUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * The filter to search for the like_res to update in case it exists.
     */
    where: like_resWhereUniqueInput
    /**
     * In case the like_res found by the `where` argument doesn't exist, create a new like_res with this data.
     */
    create: XOR<like_resCreateInput, like_resUncheckedCreateInput>
    /**
     * In case the like_res was found with the provided `where` argument, update it with this data.
     */
    update: XOR<like_resUpdateInput, like_resUncheckedUpdateInput>
  }

  /**
   * like_res delete
   */
  export type like_resDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    /**
     * Filter which like_res to delete.
     */
    where: like_resWhereUniqueInput
  }

  /**
   * like_res deleteMany
   */
  export type like_resDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which like_res to delete
     */
    where?: like_resWhereInput
    /**
     * Limit how many like_res to delete.
     */
    limit?: number
  }

  /**
   * like_res without action
   */
  export type like_resDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    art_sub_id: string | null
  }

  export type OrderMaxAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    art_sub_id: string | null
  }

  export type OrderCountAggregateOutputType = {
    order_id: number
    user_id: number
    food_id: number
    amount: number
    code: number
    art_sub_id: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    art_sub_id?: true
  }

  export type OrderMaxAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    art_sub_id?: true
  }

  export type OrderCountAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    art_sub_id?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    order_id: number
    user_id: number | null
    food_id: number | null
    amount: number
    code: string | null
    art_sub_id: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    food_id?: boolean
    amount?: boolean
    code?: boolean
    art_sub_id?: boolean
    user?: boolean | order$userArgs<ExtArgs>
    food?: boolean | order$foodArgs<ExtArgs>
    sub_food?: boolean | order$sub_foodArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type orderSelectScalar = {
    order_id?: boolean
    user_id?: boolean
    food_id?: boolean
    amount?: boolean
    code?: boolean
    art_sub_id?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "user_id" | "food_id" | "amount" | "code" | "art_sub_id", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
    food?: boolean | order$foodArgs<ExtArgs>
    sub_food?: boolean | order$sub_foodArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      food: Prisma.$foodPayload<ExtArgs> | null
      sub_food: Prisma.$sub_foodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      user_id: number | null
      food_id: number | null
      amount: number
      code: string | null
      art_sub_id: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends order$userArgs<ExtArgs> = {}>(args?: Subset<T, order$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    food<T extends order$foodArgs<ExtArgs> = {}>(args?: Subset<T, order$foodArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_food<T extends order$sub_foodArgs<ExtArgs> = {}>(args?: Subset<T, order$sub_foodArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly order_id: FieldRef<"order", 'Int'>
    readonly user_id: FieldRef<"order", 'Int'>
    readonly food_id: FieldRef<"order", 'Int'>
    readonly amount: FieldRef<"order", 'Int'>
    readonly code: FieldRef<"order", 'String'>
    readonly art_sub_id: FieldRef<"order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.user
   */
  export type order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * order.food
   */
  export type order$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
  }

  /**
   * order.sub_food
   */
  export type order$sub_foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    where?: sub_foodWhereInput
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model rate_res
   */

  export type AggregateRate_res = {
    _count: Rate_resCountAggregateOutputType | null
    _avg: Rate_resAvgAggregateOutputType | null
    _sum: Rate_resSumAggregateOutputType | null
    _min: Rate_resMinAggregateOutputType | null
    _max: Rate_resMaxAggregateOutputType | null
  }

  export type Rate_resAvgAggregateOutputType = {
    user_id: number | null
    res_id: number | null
    amount: number | null
  }

  export type Rate_resSumAggregateOutputType = {
    user_id: number | null
    res_id: number | null
    amount: number | null
  }

  export type Rate_resMinAggregateOutputType = {
    user_id: number | null
    res_id: number | null
    amount: number | null
    date_rate: Date | null
  }

  export type Rate_resMaxAggregateOutputType = {
    user_id: number | null
    res_id: number | null
    amount: number | null
    date_rate: Date | null
  }

  export type Rate_resCountAggregateOutputType = {
    user_id: number
    res_id: number
    amount: number
    date_rate: number
    _all: number
  }


  export type Rate_resAvgAggregateInputType = {
    user_id?: true
    res_id?: true
    amount?: true
  }

  export type Rate_resSumAggregateInputType = {
    user_id?: true
    res_id?: true
    amount?: true
  }

  export type Rate_resMinAggregateInputType = {
    user_id?: true
    res_id?: true
    amount?: true
    date_rate?: true
  }

  export type Rate_resMaxAggregateInputType = {
    user_id?: true
    res_id?: true
    amount?: true
    date_rate?: true
  }

  export type Rate_resCountAggregateInputType = {
    user_id?: true
    res_id?: true
    amount?: true
    date_rate?: true
    _all?: true
  }

  export type Rate_resAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rate_res to aggregate.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rate_res
    **/
    _count?: true | Rate_resCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rate_resAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rate_resSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rate_resMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rate_resMaxAggregateInputType
  }

  export type GetRate_resAggregateType<T extends Rate_resAggregateArgs> = {
        [P in keyof T & keyof AggregateRate_res]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRate_res[P]>
      : GetScalarType<T[P], AggregateRate_res[P]>
  }




  export type rate_resGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rate_resWhereInput
    orderBy?: rate_resOrderByWithAggregationInput | rate_resOrderByWithAggregationInput[]
    by: Rate_resScalarFieldEnum[] | Rate_resScalarFieldEnum
    having?: rate_resScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rate_resCountAggregateInputType | true
    _avg?: Rate_resAvgAggregateInputType
    _sum?: Rate_resSumAggregateInputType
    _min?: Rate_resMinAggregateInputType
    _max?: Rate_resMaxAggregateInputType
  }

  export type Rate_resGroupByOutputType = {
    user_id: number
    res_id: number
    amount: number | null
    date_rate: Date | null
    _count: Rate_resCountAggregateOutputType | null
    _avg: Rate_resAvgAggregateOutputType | null
    _sum: Rate_resSumAggregateOutputType | null
    _min: Rate_resMinAggregateOutputType | null
    _max: Rate_resMaxAggregateOutputType | null
  }

  type GetRate_resGroupByPayload<T extends rate_resGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rate_resGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rate_resGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rate_resGroupByOutputType[P]>
            : GetScalarType<T[P], Rate_resGroupByOutputType[P]>
        }
      >
    >


  export type rate_resSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    res_id?: boolean
    amount?: boolean
    date_rate?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate_res"]>



  export type rate_resSelectScalar = {
    user_id?: boolean
    res_id?: boolean
    amount?: boolean
    date_rate?: boolean
  }

  export type rate_resOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "res_id" | "amount" | "date_rate", ExtArgs["result"]["rate_res"]>
  export type rate_resInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    restaurant?: boolean | restaurantDefaultArgs<ExtArgs>
  }

  export type $rate_resPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rate_res"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      restaurant: Prisma.$restaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      res_id: number
      amount: number | null
      date_rate: Date | null
    }, ExtArgs["result"]["rate_res"]>
    composites: {}
  }

  type rate_resGetPayload<S extends boolean | null | undefined | rate_resDefaultArgs> = $Result.GetResult<Prisma.$rate_resPayload, S>

  type rate_resCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rate_resFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rate_resCountAggregateInputType | true
    }

  export interface rate_resDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rate_res'], meta: { name: 'rate_res' } }
    /**
     * Find zero or one Rate_res that matches the filter.
     * @param {rate_resFindUniqueArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rate_resFindUniqueArgs>(args: SelectSubset<T, rate_resFindUniqueArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rate_res that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rate_resFindUniqueOrThrowArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rate_resFindUniqueOrThrowArgs>(args: SelectSubset<T, rate_resFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resFindFirstArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rate_resFindFirstArgs>(args?: SelectSubset<T, rate_resFindFirstArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate_res that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resFindFirstOrThrowArgs} args - Arguments to find a Rate_res
     * @example
     * // Get one Rate_res
     * const rate_res = await prisma.rate_res.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rate_resFindFirstOrThrowArgs>(args?: SelectSubset<T, rate_resFindFirstOrThrowArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rate_res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rate_res
     * const rate_res = await prisma.rate_res.findMany()
     * 
     * // Get first 10 Rate_res
     * const rate_res = await prisma.rate_res.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const rate_resWithUser_idOnly = await prisma.rate_res.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends rate_resFindManyArgs>(args?: SelectSubset<T, rate_resFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rate_res.
     * @param {rate_resCreateArgs} args - Arguments to create a Rate_res.
     * @example
     * // Create one Rate_res
     * const Rate_res = await prisma.rate_res.create({
     *   data: {
     *     // ... data to create a Rate_res
     *   }
     * })
     * 
     */
    create<T extends rate_resCreateArgs>(args: SelectSubset<T, rate_resCreateArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rate_res.
     * @param {rate_resCreateManyArgs} args - Arguments to create many Rate_res.
     * @example
     * // Create many Rate_res
     * const rate_res = await prisma.rate_res.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rate_resCreateManyArgs>(args?: SelectSubset<T, rate_resCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rate_res.
     * @param {rate_resDeleteArgs} args - Arguments to delete one Rate_res.
     * @example
     * // Delete one Rate_res
     * const Rate_res = await prisma.rate_res.delete({
     *   where: {
     *     // ... filter to delete one Rate_res
     *   }
     * })
     * 
     */
    delete<T extends rate_resDeleteArgs>(args: SelectSubset<T, rate_resDeleteArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rate_res.
     * @param {rate_resUpdateArgs} args - Arguments to update one Rate_res.
     * @example
     * // Update one Rate_res
     * const rate_res = await prisma.rate_res.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rate_resUpdateArgs>(args: SelectSubset<T, rate_resUpdateArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rate_res.
     * @param {rate_resDeleteManyArgs} args - Arguments to filter Rate_res to delete.
     * @example
     * // Delete a few Rate_res
     * const { count } = await prisma.rate_res.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rate_resDeleteManyArgs>(args?: SelectSubset<T, rate_resDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rate_res
     * const rate_res = await prisma.rate_res.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rate_resUpdateManyArgs>(args: SelectSubset<T, rate_resUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rate_res.
     * @param {rate_resUpsertArgs} args - Arguments to update or create a Rate_res.
     * @example
     * // Update or create a Rate_res
     * const rate_res = await prisma.rate_res.upsert({
     *   create: {
     *     // ... data to create a Rate_res
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rate_res we want to update
     *   }
     * })
     */
    upsert<T extends rate_resUpsertArgs>(args: SelectSubset<T, rate_resUpsertArgs<ExtArgs>>): Prisma__rate_resClient<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resCountArgs} args - Arguments to filter Rate_res to count.
     * @example
     * // Count the number of Rate_res
     * const count = await prisma.rate_res.count({
     *   where: {
     *     // ... the filter for the Rate_res we want to count
     *   }
     * })
    **/
    count<T extends rate_resCountArgs>(
      args?: Subset<T, rate_resCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rate_resCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_resAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rate_resAggregateArgs>(args: Subset<T, Rate_resAggregateArgs>): Prisma.PrismaPromise<GetRate_resAggregateType<T>>

    /**
     * Group by Rate_res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rate_resGroupByArgs} args - Group by arguments.
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
      T extends rate_resGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rate_resGroupByArgs['orderBy'] }
        : { orderBy?: rate_resGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rate_resGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRate_resGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rate_res model
   */
  readonly fields: rate_resFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rate_res.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rate_resClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends restaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantDefaultArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rate_res model
   */
  interface rate_resFieldRefs {
    readonly user_id: FieldRef<"rate_res", 'Int'>
    readonly res_id: FieldRef<"rate_res", 'Int'>
    readonly amount: FieldRef<"rate_res", 'Int'>
    readonly date_rate: FieldRef<"rate_res", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rate_res findUnique
   */
  export type rate_resFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res findUniqueOrThrow
   */
  export type rate_resFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res findFirst
   */
  export type rate_resFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rate_res.
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rate_res.
     */
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * rate_res findFirstOrThrow
   */
  export type rate_resFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rate_res.
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rate_res.
     */
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * rate_res findMany
   */
  export type rate_resFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter, which rate_res to fetch.
     */
    where?: rate_resWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rate_res to fetch.
     */
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rate_res.
     */
    cursor?: rate_resWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rate_res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rate_res.
     */
    skip?: number
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * rate_res create
   */
  export type rate_resCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * The data needed to create a rate_res.
     */
    data: XOR<rate_resCreateInput, rate_resUncheckedCreateInput>
  }

  /**
   * rate_res createMany
   */
  export type rate_resCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rate_res.
     */
    data: rate_resCreateManyInput | rate_resCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rate_res update
   */
  export type rate_resUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * The data needed to update a rate_res.
     */
    data: XOR<rate_resUpdateInput, rate_resUncheckedUpdateInput>
    /**
     * Choose, which rate_res to update.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res updateMany
   */
  export type rate_resUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rate_res.
     */
    data: XOR<rate_resUpdateManyMutationInput, rate_resUncheckedUpdateManyInput>
    /**
     * Filter which rate_res to update
     */
    where?: rate_resWhereInput
    /**
     * Limit how many rate_res to update.
     */
    limit?: number
  }

  /**
   * rate_res upsert
   */
  export type rate_resUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * The filter to search for the rate_res to update in case it exists.
     */
    where: rate_resWhereUniqueInput
    /**
     * In case the rate_res found by the `where` argument doesn't exist, create a new rate_res with this data.
     */
    create: XOR<rate_resCreateInput, rate_resUncheckedCreateInput>
    /**
     * In case the rate_res was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rate_resUpdateInput, rate_resUncheckedUpdateInput>
  }

  /**
   * rate_res delete
   */
  export type rate_resDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    /**
     * Filter which rate_res to delete.
     */
    where: rate_resWhereUniqueInput
  }

  /**
   * rate_res deleteMany
   */
  export type rate_resDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rate_res to delete
     */
    where?: rate_resWhereInput
    /**
     * Limit how many rate_res to delete.
     */
    limit?: number
  }

  /**
   * rate_res without action
   */
  export type rate_resDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
  }


  /**
   * Model restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    res_id: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    res_id: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    res_id: number | null
    res_name: string | null
    image: string | null
    desc: string | null
  }

  export type RestaurantMaxAggregateOutputType = {
    res_id: number | null
    res_name: string | null
    image: string | null
    desc: string | null
  }

  export type RestaurantCountAggregateOutputType = {
    res_id: number
    res_name: number
    image: number
    desc: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    res_id?: true
  }

  export type RestaurantSumAggregateInputType = {
    res_id?: true
  }

  export type RestaurantMinAggregateInputType = {
    res_id?: true
    res_name?: true
    image?: true
    desc?: true
  }

  export type RestaurantMaxAggregateInputType = {
    res_id?: true
    res_name?: true
    image?: true
    desc?: true
  }

  export type RestaurantCountAggregateInputType = {
    res_id?: true
    res_name?: true
    image?: true
    desc?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant to aggregate.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantWhereInput
    orderBy?: restaurantOrderByWithAggregationInput | restaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: restaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    res_id: number
    res_name: string
    image: string | null
    desc: string | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    res_id?: boolean
    res_name?: boolean
    image?: boolean
    desc?: boolean
    like_res?: boolean | restaurant$like_resArgs<ExtArgs>
    rate_res?: boolean | restaurant$rate_resArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>



  export type restaurantSelectScalar = {
    res_id?: boolean
    res_name?: boolean
    image?: boolean
    desc?: boolean
  }

  export type restaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"res_id" | "res_name" | "image" | "desc", ExtArgs["result"]["restaurant"]>
  export type restaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | restaurant$like_resArgs<ExtArgs>
    rate_res?: boolean | restaurant$rate_resArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurant"
    objects: {
      like_res: Prisma.$like_resPayload<ExtArgs>[]
      rate_res: Prisma.$rate_resPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      res_id: number
      res_name: string
      image: string | null
      desc: string | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type restaurantGetPayload<S extends boolean | null | undefined | restaurantDefaultArgs> = $Result.GetResult<Prisma.$restaurantPayload, S>

  type restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant'], meta: { name: 'restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {restaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantFindUniqueArgs>(args: SelectSubset<T, restaurantFindUniqueArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantFindFirstArgs>(args?: SelectSubset<T, restaurantFindFirstArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `res_id`
     * const restaurantWithRes_idOnly = await prisma.restaurant.findMany({ select: { res_id: true } })
     * 
     */
    findMany<T extends restaurantFindManyArgs>(args?: SelectSubset<T, restaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {restaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends restaurantCreateArgs>(args: SelectSubset<T, restaurantCreateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantCreateManyArgs>(args?: SelectSubset<T, restaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {restaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends restaurantDeleteArgs>(args: SelectSubset<T, restaurantDeleteArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {restaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantUpdateArgs>(args: SelectSubset<T, restaurantUpdateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantDeleteManyArgs>(args?: SelectSubset<T, restaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantUpdateManyArgs>(args: SelectSubset<T, restaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {restaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends restaurantUpsertArgs>(args: SelectSubset<T, restaurantUpsertArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantCountArgs>(
      args?: Subset<T, restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantGroupByArgs} args - Group by arguments.
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
      T extends restaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantGroupByArgs['orderBy'] }
        : { orderBy?: restaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, restaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurant model
   */
  readonly fields: restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    like_res<T extends restaurant$like_resArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$like_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rate_res<T extends restaurant$rate_resArgs<ExtArgs> = {}>(args?: Subset<T, restaurant$rate_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the restaurant model
   */
  interface restaurantFieldRefs {
    readonly res_id: FieldRef<"restaurant", 'Int'>
    readonly res_name: FieldRef<"restaurant", 'String'>
    readonly image: FieldRef<"restaurant", 'String'>
    readonly desc: FieldRef<"restaurant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * restaurant findUnique
   */
  export type restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findUniqueOrThrow
   */
  export type restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findFirst
   */
  export type restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findFirstOrThrow
   */
  export type restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findMany
   */
  export type restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant create
   */
  export type restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a restaurant.
     */
    data: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
  }

  /**
   * restaurant createMany
   */
  export type restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant update
   */
  export type restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a restaurant.
     */
    data: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
    /**
     * Choose, which restaurant to update.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant updateMany
   */
  export type restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurant upsert
   */
  export type restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the restaurant to update in case it exists.
     */
    where: restaurantWhereUniqueInput
    /**
     * In case the restaurant found by the `where` argument doesn't exist, create a new restaurant with this data.
     */
    create: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
    /**
     * In case the restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
  }

  /**
   * restaurant delete
   */
  export type restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
    /**
     * Filter which restaurant to delete.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant deleteMany
   */
  export type restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurant.like_res
   */
  export type restaurant$like_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    where?: like_resWhereInput
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    cursor?: like_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * restaurant.rate_res
   */
  export type restaurant$rate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    where?: rate_resWhereInput
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    cursor?: rate_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * restaurant without action
   */
  export type restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantInclude<ExtArgs> | null
  }


  /**
   * Model sub_food
   */

  export type AggregateSub_food = {
    _count: Sub_foodCountAggregateOutputType | null
    _avg: Sub_foodAvgAggregateOutputType | null
    _sum: Sub_foodSumAggregateOutputType | null
    _min: Sub_foodMinAggregateOutputType | null
    _max: Sub_foodMaxAggregateOutputType | null
  }

  export type Sub_foodAvgAggregateOutputType = {
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodSumAggregateOutputType = {
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodMinAggregateOutputType = {
    sub_id: string | null
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodMaxAggregateOutputType = {
    sub_id: string | null
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodCountAggregateOutputType = {
    sub_id: number
    sub_name: number
    sub_price: number
    food_id: number
    _all: number
  }


  export type Sub_foodAvgAggregateInputType = {
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodSumAggregateInputType = {
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodMinAggregateInputType = {
    sub_id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodMaxAggregateInputType = {
    sub_id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodCountAggregateInputType = {
    sub_id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
    _all?: true
  }

  export type Sub_foodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_food to aggregate.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sub_foods
    **/
    _count?: true | Sub_foodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_foodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_foodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_foodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_foodMaxAggregateInputType
  }

  export type GetSub_foodAggregateType<T extends Sub_foodAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_food]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_food[P]>
      : GetScalarType<T[P], AggregateSub_food[P]>
  }




  export type sub_foodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_foodWhereInput
    orderBy?: sub_foodOrderByWithAggregationInput | sub_foodOrderByWithAggregationInput[]
    by: Sub_foodScalarFieldEnum[] | Sub_foodScalarFieldEnum
    having?: sub_foodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_foodCountAggregateInputType | true
    _avg?: Sub_foodAvgAggregateInputType
    _sum?: Sub_foodSumAggregateInputType
    _min?: Sub_foodMinAggregateInputType
    _max?: Sub_foodMaxAggregateInputType
  }

  export type Sub_foodGroupByOutputType = {
    sub_id: string
    sub_name: string
    sub_price: number
    food_id: number | null
    _count: Sub_foodCountAggregateOutputType | null
    _avg: Sub_foodAvgAggregateOutputType | null
    _sum: Sub_foodSumAggregateOutputType | null
    _min: Sub_foodMinAggregateOutputType | null
    _max: Sub_foodMaxAggregateOutputType | null
  }

  type GetSub_foodGroupByPayload<T extends sub_foodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_foodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_foodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_foodGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_foodGroupByOutputType[P]>
        }
      >
    >


  export type sub_foodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_id?: boolean
    sub_name?: boolean
    sub_price?: boolean
    food_id?: boolean
    order?: boolean | sub_food$orderArgs<ExtArgs>
    food?: boolean | sub_food$foodArgs<ExtArgs>
    _count?: boolean | Sub_foodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_food"]>



  export type sub_foodSelectScalar = {
    sub_id?: boolean
    sub_name?: boolean
    sub_price?: boolean
    food_id?: boolean
  }

  export type sub_foodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_id" | "sub_name" | "sub_price" | "food_id", ExtArgs["result"]["sub_food"]>
  export type sub_foodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | sub_food$orderArgs<ExtArgs>
    food?: boolean | sub_food$foodArgs<ExtArgs>
    _count?: boolean | Sub_foodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sub_foodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sub_food"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>[]
      food: Prisma.$foodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_id: string
      sub_name: string
      sub_price: number
      food_id: number | null
    }, ExtArgs["result"]["sub_food"]>
    composites: {}
  }

  type sub_foodGetPayload<S extends boolean | null | undefined | sub_foodDefaultArgs> = $Result.GetResult<Prisma.$sub_foodPayload, S>

  type sub_foodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sub_foodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_foodCountAggregateInputType | true
    }

  export interface sub_foodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sub_food'], meta: { name: 'sub_food' } }
    /**
     * Find zero or one Sub_food that matches the filter.
     * @param {sub_foodFindUniqueArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sub_foodFindUniqueArgs>(args: SelectSubset<T, sub_foodFindUniqueArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sub_foodFindUniqueOrThrowArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sub_foodFindUniqueOrThrowArgs>(args: SelectSubset<T, sub_foodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodFindFirstArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sub_foodFindFirstArgs>(args?: SelectSubset<T, sub_foodFindFirstArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodFindFirstOrThrowArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sub_foodFindFirstOrThrowArgs>(args?: SelectSubset<T, sub_foodFindFirstOrThrowArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_foods
     * const sub_foods = await prisma.sub_food.findMany()
     * 
     * // Get first 10 Sub_foods
     * const sub_foods = await prisma.sub_food.findMany({ take: 10 })
     * 
     * // Only select the `sub_id`
     * const sub_foodWithSub_idOnly = await prisma.sub_food.findMany({ select: { sub_id: true } })
     * 
     */
    findMany<T extends sub_foodFindManyArgs>(args?: SelectSubset<T, sub_foodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_food.
     * @param {sub_foodCreateArgs} args - Arguments to create a Sub_food.
     * @example
     * // Create one Sub_food
     * const Sub_food = await prisma.sub_food.create({
     *   data: {
     *     // ... data to create a Sub_food
     *   }
     * })
     * 
     */
    create<T extends sub_foodCreateArgs>(args: SelectSubset<T, sub_foodCreateArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_foods.
     * @param {sub_foodCreateManyArgs} args - Arguments to create many Sub_foods.
     * @example
     * // Create many Sub_foods
     * const sub_food = await prisma.sub_food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sub_foodCreateManyArgs>(args?: SelectSubset<T, sub_foodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub_food.
     * @param {sub_foodDeleteArgs} args - Arguments to delete one Sub_food.
     * @example
     * // Delete one Sub_food
     * const Sub_food = await prisma.sub_food.delete({
     *   where: {
     *     // ... filter to delete one Sub_food
     *   }
     * })
     * 
     */
    delete<T extends sub_foodDeleteArgs>(args: SelectSubset<T, sub_foodDeleteArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_food.
     * @param {sub_foodUpdateArgs} args - Arguments to update one Sub_food.
     * @example
     * // Update one Sub_food
     * const sub_food = await prisma.sub_food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sub_foodUpdateArgs>(args: SelectSubset<T, sub_foodUpdateArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_foods.
     * @param {sub_foodDeleteManyArgs} args - Arguments to filter Sub_foods to delete.
     * @example
     * // Delete a few Sub_foods
     * const { count } = await prisma.sub_food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sub_foodDeleteManyArgs>(args?: SelectSubset<T, sub_foodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_foods
     * const sub_food = await prisma.sub_food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sub_foodUpdateManyArgs>(args: SelectSubset<T, sub_foodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub_food.
     * @param {sub_foodUpsertArgs} args - Arguments to update or create a Sub_food.
     * @example
     * // Update or create a Sub_food
     * const sub_food = await prisma.sub_food.upsert({
     *   create: {
     *     // ... data to create a Sub_food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_food we want to update
     *   }
     * })
     */
    upsert<T extends sub_foodUpsertArgs>(args: SelectSubset<T, sub_foodUpsertArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodCountArgs} args - Arguments to filter Sub_foods to count.
     * @example
     * // Count the number of Sub_foods
     * const count = await prisma.sub_food.count({
     *   where: {
     *     // ... the filter for the Sub_foods we want to count
     *   }
     * })
    **/
    count<T extends sub_foodCountArgs>(
      args?: Subset<T, sub_foodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_foodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_foodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sub_foodAggregateArgs>(args: Subset<T, Sub_foodAggregateArgs>): Prisma.PrismaPromise<GetSub_foodAggregateType<T>>

    /**
     * Group by Sub_food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodGroupByArgs} args - Group by arguments.
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
      T extends sub_foodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sub_foodGroupByArgs['orderBy'] }
        : { orderBy?: sub_foodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sub_foodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_foodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sub_food model
   */
  readonly fields: sub_foodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sub_food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sub_foodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends sub_food$orderArgs<ExtArgs> = {}>(args?: Subset<T, sub_food$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    food<T extends sub_food$foodArgs<ExtArgs> = {}>(args?: Subset<T, sub_food$foodArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sub_food model
   */
  interface sub_foodFieldRefs {
    readonly sub_id: FieldRef<"sub_food", 'String'>
    readonly sub_name: FieldRef<"sub_food", 'String'>
    readonly sub_price: FieldRef<"sub_food", 'Float'>
    readonly food_id: FieldRef<"sub_food", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sub_food findUnique
   */
  export type sub_foodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food findUniqueOrThrow
   */
  export type sub_foodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food findFirst
   */
  export type sub_foodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_foods.
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_foods.
     */
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * sub_food findFirstOrThrow
   */
  export type sub_foodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_foods.
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_foods.
     */
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * sub_food findMany
   */
  export type sub_foodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sub_foods.
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * sub_food create
   */
  export type sub_foodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * The data needed to create a sub_food.
     */
    data: XOR<sub_foodCreateInput, sub_foodUncheckedCreateInput>
  }

  /**
   * sub_food createMany
   */
  export type sub_foodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sub_foods.
     */
    data: sub_foodCreateManyInput | sub_foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sub_food update
   */
  export type sub_foodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * The data needed to update a sub_food.
     */
    data: XOR<sub_foodUpdateInput, sub_foodUncheckedUpdateInput>
    /**
     * Choose, which sub_food to update.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food updateMany
   */
  export type sub_foodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sub_foods.
     */
    data: XOR<sub_foodUpdateManyMutationInput, sub_foodUncheckedUpdateManyInput>
    /**
     * Filter which sub_foods to update
     */
    where?: sub_foodWhereInput
    /**
     * Limit how many sub_foods to update.
     */
    limit?: number
  }

  /**
   * sub_food upsert
   */
  export type sub_foodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * The filter to search for the sub_food to update in case it exists.
     */
    where: sub_foodWhereUniqueInput
    /**
     * In case the sub_food found by the `where` argument doesn't exist, create a new sub_food with this data.
     */
    create: XOR<sub_foodCreateInput, sub_foodUncheckedCreateInput>
    /**
     * In case the sub_food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sub_foodUpdateInput, sub_foodUncheckedUpdateInput>
  }

  /**
   * sub_food delete
   */
  export type sub_foodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter which sub_food to delete.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food deleteMany
   */
  export type sub_foodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_foods to delete
     */
    where?: sub_foodWhereInput
    /**
     * Limit how many sub_foods to delete.
     */
    limit?: number
  }

  /**
   * sub_food.order
   */
  export type sub_food$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * sub_food.food
   */
  export type sub_food$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
  }

  /**
   * sub_food without action
   */
  export type sub_foodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    full_name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    full_name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    like_res?: boolean | user$like_resArgs<ExtArgs>
    order?: boolean | user$orderArgs<ExtArgs>
    rate_res?: boolean | user$rate_resArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "full_name" | "email" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    like_res?: boolean | user$like_resArgs<ExtArgs>
    order?: boolean | user$orderArgs<ExtArgs>
    rate_res?: boolean | user$rate_resArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      like_res: Prisma.$like_resPayload<ExtArgs>[]
      order: Prisma.$orderPayload<ExtArgs>[]
      rate_res: Prisma.$rate_resPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      full_name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    like_res<T extends user$like_resArgs<ExtArgs> = {}>(args?: Subset<T, user$like_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$like_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends user$orderArgs<ExtArgs> = {}>(args?: Subset<T, user$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rate_res<T extends user$rate_resArgs<ExtArgs> = {}>(args?: Subset<T, user$rate_resArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rate_resPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly full_name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.like_res
   */
  export type user$like_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like_res
     */
    select?: like_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the like_res
     */
    omit?: like_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: like_resInclude<ExtArgs> | null
    where?: like_resWhereInput
    orderBy?: like_resOrderByWithRelationInput | like_resOrderByWithRelationInput[]
    cursor?: like_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_resScalarFieldEnum | Like_resScalarFieldEnum[]
  }

  /**
   * user.order
   */
  export type user$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user.rate_res
   */
  export type user$rate_resArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rate_res
     */
    select?: rate_resSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rate_res
     */
    omit?: rate_resOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rate_resInclude<ExtArgs> | null
    where?: rate_resWhereInput
    orderBy?: rate_resOrderByWithRelationInput | rate_resOrderByWithRelationInput[]
    cursor?: rate_resWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rate_resScalarFieldEnum | Rate_resScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const FoodScalarFieldEnum: {
    food_id: 'food_id',
    food_name: 'food_name',
    image: 'image',
    price: 'price',
    desc: 'desc',
    type_id: 'type_id'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const Food_typeScalarFieldEnum: {
    type_id: 'type_id',
    type_name: 'type_name'
  };

  export type Food_typeScalarFieldEnum = (typeof Food_typeScalarFieldEnum)[keyof typeof Food_typeScalarFieldEnum]


  export const Like_resScalarFieldEnum: {
    user_id: 'user_id',
    res_id: 'res_id',
    date_like: 'date_like'
  };

  export type Like_resScalarFieldEnum = (typeof Like_resScalarFieldEnum)[keyof typeof Like_resScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id',
    food_id: 'food_id',
    amount: 'amount',
    code: 'code',
    art_sub_id: 'art_sub_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Rate_resScalarFieldEnum: {
    user_id: 'user_id',
    res_id: 'res_id',
    amount: 'amount',
    date_rate: 'date_rate'
  };

  export type Rate_resScalarFieldEnum = (typeof Rate_resScalarFieldEnum)[keyof typeof Rate_resScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    res_id: 'res_id',
    res_name: 'res_name',
    image: 'image',
    desc: 'desc'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const Sub_foodScalarFieldEnum: {
    sub_id: 'sub_id',
    sub_name: 'sub_name',
    sub_price: 'sub_price',
    food_id: 'food_id'
  };

  export type Sub_foodScalarFieldEnum = (typeof Sub_foodScalarFieldEnum)[keyof typeof Sub_foodScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const foodOrderByRelevanceFieldEnum: {
    food_name: 'food_name',
    image: 'image',
    desc: 'desc'
  };

  export type foodOrderByRelevanceFieldEnum = (typeof foodOrderByRelevanceFieldEnum)[keyof typeof foodOrderByRelevanceFieldEnum]


  export const food_typeOrderByRelevanceFieldEnum: {
    type_name: 'type_name'
  };

  export type food_typeOrderByRelevanceFieldEnum = (typeof food_typeOrderByRelevanceFieldEnum)[keyof typeof food_typeOrderByRelevanceFieldEnum]


  export const orderOrderByRelevanceFieldEnum: {
    code: 'code',
    art_sub_id: 'art_sub_id'
  };

  export type orderOrderByRelevanceFieldEnum = (typeof orderOrderByRelevanceFieldEnum)[keyof typeof orderOrderByRelevanceFieldEnum]


  export const restaurantOrderByRelevanceFieldEnum: {
    res_name: 'res_name',
    image: 'image',
    desc: 'desc'
  };

  export type restaurantOrderByRelevanceFieldEnum = (typeof restaurantOrderByRelevanceFieldEnum)[keyof typeof restaurantOrderByRelevanceFieldEnum]


  export const sub_foodOrderByRelevanceFieldEnum: {
    sub_id: 'sub_id',
    sub_name: 'sub_name'
  };

  export type sub_foodOrderByRelevanceFieldEnum = (typeof sub_foodOrderByRelevanceFieldEnum)[keyof typeof sub_foodOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type foodWhereInput = {
    AND?: foodWhereInput | foodWhereInput[]
    OR?: foodWhereInput[]
    NOT?: foodWhereInput | foodWhereInput[]
    food_id?: IntFilter<"food"> | number
    food_name?: StringFilter<"food"> | string
    image?: StringNullableFilter<"food"> | string | null
    price?: FloatFilter<"food"> | number
    desc?: StringNullableFilter<"food"> | string | null
    type_id?: IntNullableFilter<"food"> | number | null
    food_type?: XOR<Food_typeNullableScalarRelationFilter, food_typeWhereInput> | null
    order?: OrderListRelationFilter
    sub_food?: Sub_foodListRelationFilter
  }

  export type foodOrderByWithRelationInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    desc?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    food_type?: food_typeOrderByWithRelationInput
    order?: orderOrderByRelationAggregateInput
    sub_food?: sub_foodOrderByRelationAggregateInput
    _relevance?: foodOrderByRelevanceInput
  }

  export type foodWhereUniqueInput = Prisma.AtLeast<{
    food_id?: number
    AND?: foodWhereInput | foodWhereInput[]
    OR?: foodWhereInput[]
    NOT?: foodWhereInput | foodWhereInput[]
    food_name?: StringFilter<"food"> | string
    image?: StringNullableFilter<"food"> | string | null
    price?: FloatFilter<"food"> | number
    desc?: StringNullableFilter<"food"> | string | null
    type_id?: IntNullableFilter<"food"> | number | null
    food_type?: XOR<Food_typeNullableScalarRelationFilter, food_typeWhereInput> | null
    order?: OrderListRelationFilter
    sub_food?: Sub_foodListRelationFilter
  }, "food_id">

  export type foodOrderByWithAggregationInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    desc?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    _count?: foodCountOrderByAggregateInput
    _avg?: foodAvgOrderByAggregateInput
    _max?: foodMaxOrderByAggregateInput
    _min?: foodMinOrderByAggregateInput
    _sum?: foodSumOrderByAggregateInput
  }

  export type foodScalarWhereWithAggregatesInput = {
    AND?: foodScalarWhereWithAggregatesInput | foodScalarWhereWithAggregatesInput[]
    OR?: foodScalarWhereWithAggregatesInput[]
    NOT?: foodScalarWhereWithAggregatesInput | foodScalarWhereWithAggregatesInput[]
    food_id?: IntWithAggregatesFilter<"food"> | number
    food_name?: StringWithAggregatesFilter<"food"> | string
    image?: StringNullableWithAggregatesFilter<"food"> | string | null
    price?: FloatWithAggregatesFilter<"food"> | number
    desc?: StringNullableWithAggregatesFilter<"food"> | string | null
    type_id?: IntNullableWithAggregatesFilter<"food"> | number | null
  }

  export type food_typeWhereInput = {
    AND?: food_typeWhereInput | food_typeWhereInput[]
    OR?: food_typeWhereInput[]
    NOT?: food_typeWhereInput | food_typeWhereInput[]
    type_id?: IntFilter<"food_type"> | number
    type_name?: StringFilter<"food_type"> | string
    food?: FoodListRelationFilter
  }

  export type food_typeOrderByWithRelationInput = {
    type_id?: SortOrder
    type_name?: SortOrder
    food?: foodOrderByRelationAggregateInput
    _relevance?: food_typeOrderByRelevanceInput
  }

  export type food_typeWhereUniqueInput = Prisma.AtLeast<{
    type_id?: number
    AND?: food_typeWhereInput | food_typeWhereInput[]
    OR?: food_typeWhereInput[]
    NOT?: food_typeWhereInput | food_typeWhereInput[]
    type_name?: StringFilter<"food_type"> | string
    food?: FoodListRelationFilter
  }, "type_id">

  export type food_typeOrderByWithAggregationInput = {
    type_id?: SortOrder
    type_name?: SortOrder
    _count?: food_typeCountOrderByAggregateInput
    _avg?: food_typeAvgOrderByAggregateInput
    _max?: food_typeMaxOrderByAggregateInput
    _min?: food_typeMinOrderByAggregateInput
    _sum?: food_typeSumOrderByAggregateInput
  }

  export type food_typeScalarWhereWithAggregatesInput = {
    AND?: food_typeScalarWhereWithAggregatesInput | food_typeScalarWhereWithAggregatesInput[]
    OR?: food_typeScalarWhereWithAggregatesInput[]
    NOT?: food_typeScalarWhereWithAggregatesInput | food_typeScalarWhereWithAggregatesInput[]
    type_id?: IntWithAggregatesFilter<"food_type"> | number
    type_name?: StringWithAggregatesFilter<"food_type"> | string
  }

  export type like_resWhereInput = {
    AND?: like_resWhereInput | like_resWhereInput[]
    OR?: like_resWhereInput[]
    NOT?: like_resWhereInput | like_resWhereInput[]
    user_id?: IntFilter<"like_res"> | number
    res_id?: IntFilter<"like_res"> | number
    date_like?: DateTimeNullableFilter<"like_res"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }

  export type like_resOrderByWithRelationInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    restaurant?: restaurantOrderByWithRelationInput
  }

  export type like_resWhereUniqueInput = Prisma.AtLeast<{
    user_id_res_id?: like_resUser_idRes_idCompoundUniqueInput
    AND?: like_resWhereInput | like_resWhereInput[]
    OR?: like_resWhereInput[]
    NOT?: like_resWhereInput | like_resWhereInput[]
    user_id?: IntFilter<"like_res"> | number
    res_id?: IntFilter<"like_res"> | number
    date_like?: DateTimeNullableFilter<"like_res"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }, "user_id_res_id">

  export type like_resOrderByWithAggregationInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrderInput | SortOrder
    _count?: like_resCountOrderByAggregateInput
    _avg?: like_resAvgOrderByAggregateInput
    _max?: like_resMaxOrderByAggregateInput
    _min?: like_resMinOrderByAggregateInput
    _sum?: like_resSumOrderByAggregateInput
  }

  export type like_resScalarWhereWithAggregatesInput = {
    AND?: like_resScalarWhereWithAggregatesInput | like_resScalarWhereWithAggregatesInput[]
    OR?: like_resScalarWhereWithAggregatesInput[]
    NOT?: like_resScalarWhereWithAggregatesInput | like_resScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"like_res"> | number
    res_id?: IntWithAggregatesFilter<"like_res"> | number
    date_like?: DateTimeNullableWithAggregatesFilter<"like_res"> | Date | string | null
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    order_id?: IntFilter<"order"> | number
    user_id?: IntNullableFilter<"order"> | number | null
    food_id?: IntNullableFilter<"order"> | number | null
    amount?: IntFilter<"order"> | number
    code?: StringNullableFilter<"order"> | string | null
    art_sub_id?: StringNullableFilter<"order"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
    sub_food?: XOR<Sub_foodNullableScalarRelationFilter, sub_foodWhereInput> | null
  }

  export type orderOrderByWithRelationInput = {
    order_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    code?: SortOrderInput | SortOrder
    art_sub_id?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    food?: foodOrderByWithRelationInput
    sub_food?: sub_foodOrderByWithRelationInput
    _relevance?: orderOrderByRelevanceInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    user_id?: IntNullableFilter<"order"> | number | null
    food_id?: IntNullableFilter<"order"> | number | null
    amount?: IntFilter<"order"> | number
    code?: StringNullableFilter<"order"> | string | null
    art_sub_id?: StringNullableFilter<"order"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
    sub_food?: XOR<Sub_foodNullableScalarRelationFilter, sub_foodWhereInput> | null
  }, "order_id">

  export type orderOrderByWithAggregationInput = {
    order_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    code?: SortOrderInput | SortOrder
    art_sub_id?: SortOrderInput | SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"order"> | number
    user_id?: IntNullableWithAggregatesFilter<"order"> | number | null
    food_id?: IntNullableWithAggregatesFilter<"order"> | number | null
    amount?: IntWithAggregatesFilter<"order"> | number
    code?: StringNullableWithAggregatesFilter<"order"> | string | null
    art_sub_id?: StringNullableWithAggregatesFilter<"order"> | string | null
  }

  export type rate_resWhereInput = {
    AND?: rate_resWhereInput | rate_resWhereInput[]
    OR?: rate_resWhereInput[]
    NOT?: rate_resWhereInput | rate_resWhereInput[]
    user_id?: IntFilter<"rate_res"> | number
    res_id?: IntFilter<"rate_res"> | number
    amount?: IntNullableFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }

  export type rate_resOrderByWithRelationInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    date_rate?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    restaurant?: restaurantOrderByWithRelationInput
  }

  export type rate_resWhereUniqueInput = Prisma.AtLeast<{
    user_id_res_id?: rate_resUser_idRes_idCompoundUniqueInput
    AND?: rate_resWhereInput | rate_resWhereInput[]
    OR?: rate_resWhereInput[]
    NOT?: rate_resWhereInput | rate_resWhereInput[]
    user_id?: IntFilter<"rate_res"> | number
    res_id?: IntFilter<"rate_res"> | number
    amount?: IntNullableFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableFilter<"rate_res"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, restaurantWhereInput>
  }, "user_id_res_id">

  export type rate_resOrderByWithAggregationInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    date_rate?: SortOrderInput | SortOrder
    _count?: rate_resCountOrderByAggregateInput
    _avg?: rate_resAvgOrderByAggregateInput
    _max?: rate_resMaxOrderByAggregateInput
    _min?: rate_resMinOrderByAggregateInput
    _sum?: rate_resSumOrderByAggregateInput
  }

  export type rate_resScalarWhereWithAggregatesInput = {
    AND?: rate_resScalarWhereWithAggregatesInput | rate_resScalarWhereWithAggregatesInput[]
    OR?: rate_resScalarWhereWithAggregatesInput[]
    NOT?: rate_resScalarWhereWithAggregatesInput | rate_resScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"rate_res"> | number
    res_id?: IntWithAggregatesFilter<"rate_res"> | number
    amount?: IntNullableWithAggregatesFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableWithAggregatesFilter<"rate_res"> | Date | string | null
  }

  export type restaurantWhereInput = {
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    res_id?: IntFilter<"restaurant"> | number
    res_name?: StringFilter<"restaurant"> | string
    image?: StringNullableFilter<"restaurant"> | string | null
    desc?: StringNullableFilter<"restaurant"> | string | null
    like_res?: Like_resListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }

  export type restaurantOrderByWithRelationInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    like_res?: like_resOrderByRelationAggregateInput
    rate_res?: rate_resOrderByRelationAggregateInput
    _relevance?: restaurantOrderByRelevanceInput
  }

  export type restaurantWhereUniqueInput = Prisma.AtLeast<{
    res_id?: number
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    res_name?: StringFilter<"restaurant"> | string
    image?: StringNullableFilter<"restaurant"> | string | null
    desc?: StringNullableFilter<"restaurant"> | string | null
    like_res?: Like_resListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }, "res_id">

  export type restaurantOrderByWithAggregationInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    _count?: restaurantCountOrderByAggregateInput
    _avg?: restaurantAvgOrderByAggregateInput
    _max?: restaurantMaxOrderByAggregateInput
    _min?: restaurantMinOrderByAggregateInput
    _sum?: restaurantSumOrderByAggregateInput
  }

  export type restaurantScalarWhereWithAggregatesInput = {
    AND?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    OR?: restaurantScalarWhereWithAggregatesInput[]
    NOT?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    res_id?: IntWithAggregatesFilter<"restaurant"> | number
    res_name?: StringWithAggregatesFilter<"restaurant"> | string
    image?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    desc?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
  }

  export type sub_foodWhereInput = {
    AND?: sub_foodWhereInput | sub_foodWhereInput[]
    OR?: sub_foodWhereInput[]
    NOT?: sub_foodWhereInput | sub_foodWhereInput[]
    sub_id?: StringFilter<"sub_food"> | string
    sub_name?: StringFilter<"sub_food"> | string
    sub_price?: FloatFilter<"sub_food"> | number
    food_id?: IntNullableFilter<"sub_food"> | number | null
    order?: OrderListRelationFilter
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
  }

  export type sub_foodOrderByWithRelationInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrderInput | SortOrder
    order?: orderOrderByRelationAggregateInput
    food?: foodOrderByWithRelationInput
    _relevance?: sub_foodOrderByRelevanceInput
  }

  export type sub_foodWhereUniqueInput = Prisma.AtLeast<{
    sub_id?: string
    AND?: sub_foodWhereInput | sub_foodWhereInput[]
    OR?: sub_foodWhereInput[]
    NOT?: sub_foodWhereInput | sub_foodWhereInput[]
    sub_name?: StringFilter<"sub_food"> | string
    sub_price?: FloatFilter<"sub_food"> | number
    food_id?: IntNullableFilter<"sub_food"> | number | null
    order?: OrderListRelationFilter
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
  }, "sub_id">

  export type sub_foodOrderByWithAggregationInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrderInput | SortOrder
    _count?: sub_foodCountOrderByAggregateInput
    _avg?: sub_foodAvgOrderByAggregateInput
    _max?: sub_foodMaxOrderByAggregateInput
    _min?: sub_foodMinOrderByAggregateInput
    _sum?: sub_foodSumOrderByAggregateInput
  }

  export type sub_foodScalarWhereWithAggregatesInput = {
    AND?: sub_foodScalarWhereWithAggregatesInput | sub_foodScalarWhereWithAggregatesInput[]
    OR?: sub_foodScalarWhereWithAggregatesInput[]
    NOT?: sub_foodScalarWhereWithAggregatesInput | sub_foodScalarWhereWithAggregatesInput[]
    sub_id?: StringWithAggregatesFilter<"sub_food"> | string
    sub_name?: StringWithAggregatesFilter<"sub_food"> | string
    sub_price?: FloatWithAggregatesFilter<"sub_food"> | number
    food_id?: IntNullableWithAggregatesFilter<"sub_food"> | number | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    full_name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    like_res?: Like_resListRelationFilter
    order?: OrderListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    like_res?: like_resOrderByRelationAggregateInput
    order?: orderOrderByRelationAggregateInput
    rate_res?: rate_resOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    full_name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    like_res?: Like_resListRelationFilter
    order?: OrderListRelationFilter
    rate_res?: Rate_resListRelationFilter
  }, "user_id" | "email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    full_name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type foodCreateInput = {
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    food_type?: food_typeCreateNestedOneWithoutFoodInput
    order?: orderCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateInput = {
    food_id?: number
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    type_id?: number | null
    order?: orderUncheckedCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodUpdateInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    food_type?: food_typeUpdateOneWithoutFoodNestedInput
    order?: orderUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    order?: orderUncheckedUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type foodCreateManyInput = {
    food_id?: number
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    type_id?: number | null
  }

  export type foodUpdateManyMutationInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type foodUncheckedUpdateManyInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type food_typeCreateInput = {
    type_name: string
    food?: foodCreateNestedManyWithoutFood_typeInput
  }

  export type food_typeUncheckedCreateInput = {
    type_id?: number
    type_name: string
    food?: foodUncheckedCreateNestedManyWithoutFood_typeInput
  }

  export type food_typeUpdateInput = {
    type_name?: StringFieldUpdateOperationsInput | string
    food?: foodUpdateManyWithoutFood_typeNestedInput
  }

  export type food_typeUncheckedUpdateInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_name?: StringFieldUpdateOperationsInput | string
    food?: foodUncheckedUpdateManyWithoutFood_typeNestedInput
  }

  export type food_typeCreateManyInput = {
    type_id?: number
    type_name: string
  }

  export type food_typeUpdateManyMutationInput = {
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type food_typeUncheckedUpdateManyInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type like_resCreateInput = {
    date_like?: Date | string | null
    user: userCreateNestedOneWithoutLike_resInput
    restaurant: restaurantCreateNestedOneWithoutLike_resInput
  }

  export type like_resUncheckedCreateInput = {
    user_id: number
    res_id: number
    date_like?: Date | string | null
  }

  export type like_resUpdateInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutLike_resNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutLike_resNestedInput
  }

  export type like_resUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    res_id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type like_resCreateManyInput = {
    user_id: number
    res_id: number
    date_like?: Date | string | null
  }

  export type like_resUpdateManyMutationInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type like_resUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    res_id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderCreateInput = {
    amount: number
    code?: string | null
    user?: userCreateNestedOneWithoutOrderInput
    food?: foodCreateNestedOneWithoutOrderInput
    sub_food?: sub_foodCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    order_id?: number
    user_id?: number | null
    food_id?: number | null
    amount: number
    code?: string | null
    art_sub_id?: string | null
  }

  export type orderUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutOrderNestedInput
    food?: foodUpdateOneWithoutOrderNestedInput
    sub_food?: sub_foodUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    art_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orderCreateManyInput = {
    order_id?: number
    user_id?: number | null
    food_id?: number | null
    amount: number
    code?: string | null
    art_sub_id?: string | null
  }

  export type orderUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    art_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rate_resCreateInput = {
    amount?: number | null
    date_rate?: Date | string | null
    user: userCreateNestedOneWithoutRate_resInput
    restaurant: restaurantCreateNestedOneWithoutRate_resInput
  }

  export type rate_resUncheckedCreateInput = {
    user_id: number
    res_id: number
    amount?: number | null
    date_rate?: Date | string | null
  }

  export type rate_resUpdateInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutRate_resNestedInput
    restaurant?: restaurantUpdateOneRequiredWithoutRate_resNestedInput
  }

  export type rate_resUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    res_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rate_resCreateManyInput = {
    user_id: number
    res_id: number
    amount?: number | null
    date_rate?: Date | string | null
  }

  export type rate_resUpdateManyMutationInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rate_resUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    res_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurantCreateInput = {
    res_name: string
    image?: string | null
    desc?: string | null
    like_res?: like_resCreateNestedManyWithoutRestaurantInput
    rate_res?: rate_resCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateInput = {
    res_id?: number
    res_name: string
    image?: string | null
    desc?: string | null
    like_res?: like_resUncheckedCreateNestedManyWithoutRestaurantInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUpdateInput = {
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    like_res?: like_resUpdateManyWithoutRestaurantNestedInput
    rate_res?: rate_resUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    like_res?: like_resUncheckedUpdateManyWithoutRestaurantNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantCreateManyInput = {
    res_id?: number
    res_name: string
    image?: string | null
    desc?: string | null
  }

  export type restaurantUpdateManyMutationInput = {
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUncheckedUpdateManyInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_foodCreateInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    order?: orderCreateNestedManyWithoutSub_foodInput
    food?: foodCreateNestedOneWithoutSub_foodInput
  }

  export type sub_foodUncheckedCreateInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    food_id?: number | null
    order?: orderUncheckedCreateNestedManyWithoutSub_foodInput
  }

  export type sub_foodUpdateInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateManyWithoutSub_foodNestedInput
    food?: foodUpdateOneWithoutSub_foodNestedInput
  }

  export type sub_foodUncheckedUpdateInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    order?: orderUncheckedUpdateManyWithoutSub_foodNestedInput
  }

  export type sub_foodCreateManyInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    food_id?: number | null
  }

  export type sub_foodUpdateManyMutationInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
  }

  export type sub_foodUncheckedUpdateManyInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateInput = {
    full_name: string
    email: string
    password: string
    like_res?: like_resCreateNestedManyWithoutUserInput
    order?: orderCreateNestedManyWithoutUserInput
    rate_res?: rate_resCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    full_name: string
    email: string
    password: string
    like_res?: like_resUncheckedCreateNestedManyWithoutUserInput
    order?: orderUncheckedCreateNestedManyWithoutUserInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    like_res?: like_resUpdateManyWithoutUserNestedInput
    order?: orderUpdateManyWithoutUserNestedInput
    rate_res?: rate_resUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    like_res?: like_resUncheckedUpdateManyWithoutUserNestedInput
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: number
    full_name: string
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Food_typeNullableScalarRelationFilter = {
    is?: food_typeWhereInput | null
    isNot?: food_typeWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type Sub_foodListRelationFilter = {
    every?: sub_foodWhereInput
    some?: sub_foodWhereInput
    none?: sub_foodWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sub_foodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type foodOrderByRelevanceInput = {
    fields: foodOrderByRelevanceFieldEnum | foodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type foodCountOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    type_id?: SortOrder
  }

  export type foodAvgOrderByAggregateInput = {
    food_id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
  }

  export type foodMaxOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    type_id?: SortOrder
  }

  export type foodMinOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    desc?: SortOrder
    type_id?: SortOrder
  }

  export type foodSumOrderByAggregateInput = {
    food_id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FoodListRelationFilter = {
    every?: foodWhereInput
    some?: foodWhereInput
    none?: foodWhereInput
  }

  export type foodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type food_typeOrderByRelevanceInput = {
    fields: food_typeOrderByRelevanceFieldEnum | food_typeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type food_typeCountOrderByAggregateInput = {
    type_id?: SortOrder
    type_name?: SortOrder
  }

  export type food_typeAvgOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type food_typeMaxOrderByAggregateInput = {
    type_id?: SortOrder
    type_name?: SortOrder
  }

  export type food_typeMinOrderByAggregateInput = {
    type_id?: SortOrder
    type_name?: SortOrder
  }

  export type food_typeSumOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type RestaurantScalarRelationFilter = {
    is?: restaurantWhereInput
    isNot?: restaurantWhereInput
  }

  export type like_resUser_idRes_idCompoundUniqueInput = {
    user_id: number
    res_id: number
  }

  export type like_resCountOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrder
  }

  export type like_resAvgOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
  }

  export type like_resMaxOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrder
  }

  export type like_resMinOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    date_like?: SortOrder
  }

  export type like_resSumOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type FoodNullableScalarRelationFilter = {
    is?: foodWhereInput | null
    isNot?: foodWhereInput | null
  }

  export type Sub_foodNullableScalarRelationFilter = {
    is?: sub_foodWhereInput | null
    isNot?: sub_foodWhereInput | null
  }

  export type orderOrderByRelevanceInput = {
    fields: orderOrderByRelevanceFieldEnum | orderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type orderCountOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    art_sub_id?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    art_sub_id?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    art_sub_id?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
  }

  export type rate_resUser_idRes_idCompoundUniqueInput = {
    user_id: number
    res_id: number
  }

  export type rate_resCountOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
  }

  export type rate_resAvgOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
  }

  export type rate_resMaxOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
  }

  export type rate_resMinOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
  }

  export type rate_resSumOrderByAggregateInput = {
    user_id?: SortOrder
    res_id?: SortOrder
    amount?: SortOrder
  }

  export type Like_resListRelationFilter = {
    every?: like_resWhereInput
    some?: like_resWhereInput
    none?: like_resWhereInput
  }

  export type Rate_resListRelationFilter = {
    every?: rate_resWhereInput
    some?: rate_resWhereInput
    none?: rate_resWhereInput
  }

  export type like_resOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rate_resOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type restaurantOrderByRelevanceInput = {
    fields: restaurantOrderByRelevanceFieldEnum | restaurantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type restaurantCountOrderByAggregateInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
  }

  export type restaurantAvgOrderByAggregateInput = {
    res_id?: SortOrder
  }

  export type restaurantMaxOrderByAggregateInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
  }

  export type restaurantMinOrderByAggregateInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrder
    desc?: SortOrder
  }

  export type restaurantSumOrderByAggregateInput = {
    res_id?: SortOrder
  }

  export type sub_foodOrderByRelevanceInput = {
    fields: sub_foodOrderByRelevanceFieldEnum | sub_foodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sub_foodCountOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodAvgOrderByAggregateInput = {
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodMaxOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodMinOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodSumOrderByAggregateInput = {
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type food_typeCreateNestedOneWithoutFoodInput = {
    create?: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
    connectOrCreate?: food_typeCreateOrConnectWithoutFoodInput
    connect?: food_typeWhereUniqueInput
  }

  export type orderCreateNestedManyWithoutFoodInput = {
    create?: XOR<orderCreateWithoutFoodInput, orderUncheckedCreateWithoutFoodInput> | orderCreateWithoutFoodInput[] | orderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutFoodInput | orderCreateOrConnectWithoutFoodInput[]
    createMany?: orderCreateManyFoodInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type sub_foodCreateNestedManyWithoutFoodInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<orderCreateWithoutFoodInput, orderUncheckedCreateWithoutFoodInput> | orderCreateWithoutFoodInput[] | orderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutFoodInput | orderCreateOrConnectWithoutFoodInput[]
    createMany?: orderCreateManyFoodInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type sub_foodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type food_typeUpdateOneWithoutFoodNestedInput = {
    create?: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
    connectOrCreate?: food_typeCreateOrConnectWithoutFoodInput
    upsert?: food_typeUpsertWithoutFoodInput
    disconnect?: food_typeWhereInput | boolean
    delete?: food_typeWhereInput | boolean
    connect?: food_typeWhereUniqueInput
    update?: XOR<XOR<food_typeUpdateToOneWithWhereWithoutFoodInput, food_typeUpdateWithoutFoodInput>, food_typeUncheckedUpdateWithoutFoodInput>
  }

  export type orderUpdateManyWithoutFoodNestedInput = {
    create?: XOR<orderCreateWithoutFoodInput, orderUncheckedCreateWithoutFoodInput> | orderCreateWithoutFoodInput[] | orderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutFoodInput | orderCreateOrConnectWithoutFoodInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutFoodInput | orderUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: orderCreateManyFoodInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutFoodInput | orderUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: orderUpdateManyWithWhereWithoutFoodInput | orderUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type sub_foodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    upsert?: sub_foodUpsertWithWhereUniqueWithoutFoodInput | sub_foodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    set?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    disconnect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    delete?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    update?: sub_foodUpdateWithWhereUniqueWithoutFoodInput | sub_foodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: sub_foodUpdateManyWithWhereWithoutFoodInput | sub_foodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<orderCreateWithoutFoodInput, orderUncheckedCreateWithoutFoodInput> | orderCreateWithoutFoodInput[] | orderUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutFoodInput | orderCreateOrConnectWithoutFoodInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutFoodInput | orderUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: orderCreateManyFoodInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutFoodInput | orderUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: orderUpdateManyWithWhereWithoutFoodInput | orderUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type sub_foodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    upsert?: sub_foodUpsertWithWhereUniqueWithoutFoodInput | sub_foodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    set?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    disconnect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    delete?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    update?: sub_foodUpdateWithWhereUniqueWithoutFoodInput | sub_foodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: sub_foodUpdateManyWithWhereWithoutFoodInput | sub_foodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
  }

  export type foodCreateNestedManyWithoutFood_typeInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
  }

  export type foodUncheckedCreateNestedManyWithoutFood_typeInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
  }

  export type foodUpdateManyWithoutFood_typeNestedInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    upsert?: foodUpsertWithWhereUniqueWithoutFood_typeInput | foodUpsertWithWhereUniqueWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    set?: foodWhereUniqueInput | foodWhereUniqueInput[]
    disconnect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    delete?: foodWhereUniqueInput | foodWhereUniqueInput[]
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    update?: foodUpdateWithWhereUniqueWithoutFood_typeInput | foodUpdateWithWhereUniqueWithoutFood_typeInput[]
    updateMany?: foodUpdateManyWithWhereWithoutFood_typeInput | foodUpdateManyWithWhereWithoutFood_typeInput[]
    deleteMany?: foodScalarWhereInput | foodScalarWhereInput[]
  }

  export type foodUncheckedUpdateManyWithoutFood_typeNestedInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    upsert?: foodUpsertWithWhereUniqueWithoutFood_typeInput | foodUpsertWithWhereUniqueWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    set?: foodWhereUniqueInput | foodWhereUniqueInput[]
    disconnect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    delete?: foodWhereUniqueInput | foodWhereUniqueInput[]
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    update?: foodUpdateWithWhereUniqueWithoutFood_typeInput | foodUpdateWithWhereUniqueWithoutFood_typeInput[]
    updateMany?: foodUpdateManyWithWhereWithoutFood_typeInput | foodUpdateManyWithWhereWithoutFood_typeInput[]
    deleteMany?: foodScalarWhereInput | foodScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutLike_resInput = {
    create?: XOR<userCreateWithoutLike_resInput, userUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: userCreateOrConnectWithoutLike_resInput
    connect?: userWhereUniqueInput
  }

  export type restaurantCreateNestedOneWithoutLike_resInput = {
    create?: XOR<restaurantCreateWithoutLike_resInput, restaurantUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutLike_resInput
    connect?: restaurantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutLike_resNestedInput = {
    create?: XOR<userCreateWithoutLike_resInput, userUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: userCreateOrConnectWithoutLike_resInput
    upsert?: userUpsertWithoutLike_resInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLike_resInput, userUpdateWithoutLike_resInput>, userUncheckedUpdateWithoutLike_resInput>
  }

  export type restaurantUpdateOneRequiredWithoutLike_resNestedInput = {
    create?: XOR<restaurantCreateWithoutLike_resInput, restaurantUncheckedCreateWithoutLike_resInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutLike_resInput
    upsert?: restaurantUpsertWithoutLike_resInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutLike_resInput, restaurantUpdateWithoutLike_resInput>, restaurantUncheckedUpdateWithoutLike_resInput>
  }

  export type userCreateNestedOneWithoutOrderInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    connect?: userWhereUniqueInput
  }

  export type foodCreateNestedOneWithoutOrderInput = {
    create?: XOR<foodCreateWithoutOrderInput, foodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: foodCreateOrConnectWithoutOrderInput
    connect?: foodWhereUniqueInput
  }

  export type sub_foodCreateNestedOneWithoutOrderInput = {
    create?: XOR<sub_foodCreateWithoutOrderInput, sub_foodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: sub_foodCreateOrConnectWithoutOrderInput
    connect?: sub_foodWhereUniqueInput
  }

  export type userUpdateOneWithoutOrderNestedInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    upsert?: userUpsertWithoutOrderInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrderInput, userUpdateWithoutOrderInput>, userUncheckedUpdateWithoutOrderInput>
  }

  export type foodUpdateOneWithoutOrderNestedInput = {
    create?: XOR<foodCreateWithoutOrderInput, foodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: foodCreateOrConnectWithoutOrderInput
    upsert?: foodUpsertWithoutOrderInput
    disconnect?: foodWhereInput | boolean
    delete?: foodWhereInput | boolean
    connect?: foodWhereUniqueInput
    update?: XOR<XOR<foodUpdateToOneWithWhereWithoutOrderInput, foodUpdateWithoutOrderInput>, foodUncheckedUpdateWithoutOrderInput>
  }

  export type sub_foodUpdateOneWithoutOrderNestedInput = {
    create?: XOR<sub_foodCreateWithoutOrderInput, sub_foodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: sub_foodCreateOrConnectWithoutOrderInput
    upsert?: sub_foodUpsertWithoutOrderInput
    disconnect?: sub_foodWhereInput | boolean
    delete?: sub_foodWhereInput | boolean
    connect?: sub_foodWhereUniqueInput
    update?: XOR<XOR<sub_foodUpdateToOneWithWhereWithoutOrderInput, sub_foodUpdateWithoutOrderInput>, sub_foodUncheckedUpdateWithoutOrderInput>
  }

  export type userCreateNestedOneWithoutRate_resInput = {
    create?: XOR<userCreateWithoutRate_resInput, userUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: userCreateOrConnectWithoutRate_resInput
    connect?: userWhereUniqueInput
  }

  export type restaurantCreateNestedOneWithoutRate_resInput = {
    create?: XOR<restaurantCreateWithoutRate_resInput, restaurantUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutRate_resInput
    connect?: restaurantWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutRate_resNestedInput = {
    create?: XOR<userCreateWithoutRate_resInput, userUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: userCreateOrConnectWithoutRate_resInput
    upsert?: userUpsertWithoutRate_resInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRate_resInput, userUpdateWithoutRate_resInput>, userUncheckedUpdateWithoutRate_resInput>
  }

  export type restaurantUpdateOneRequiredWithoutRate_resNestedInput = {
    create?: XOR<restaurantCreateWithoutRate_resInput, restaurantUncheckedCreateWithoutRate_resInput>
    connectOrCreate?: restaurantCreateOrConnectWithoutRate_resInput
    upsert?: restaurantUpsertWithoutRate_resInput
    connect?: restaurantWhereUniqueInput
    update?: XOR<XOR<restaurantUpdateToOneWithWhereWithoutRate_resInput, restaurantUpdateWithoutRate_resInput>, restaurantUncheckedUpdateWithoutRate_resInput>
  }

  export type like_resCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<like_resCreateWithoutRestaurantInput, like_resUncheckedCreateWithoutRestaurantInput> | like_resCreateWithoutRestaurantInput[] | like_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantInput | like_resCreateOrConnectWithoutRestaurantInput[]
    createMany?: like_resCreateManyRestaurantInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type rate_resCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<rate_resCreateWithoutRestaurantInput, rate_resUncheckedCreateWithoutRestaurantInput> | rate_resCreateWithoutRestaurantInput[] | rate_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantInput | rate_resCreateOrConnectWithoutRestaurantInput[]
    createMany?: rate_resCreateManyRestaurantInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<like_resCreateWithoutRestaurantInput, like_resUncheckedCreateWithoutRestaurantInput> | like_resCreateWithoutRestaurantInput[] | like_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantInput | like_resCreateOrConnectWithoutRestaurantInput[]
    createMany?: like_resCreateManyRestaurantInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type rate_resUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<rate_resCreateWithoutRestaurantInput, rate_resUncheckedCreateWithoutRestaurantInput> | rate_resCreateWithoutRestaurantInput[] | rate_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantInput | rate_resCreateOrConnectWithoutRestaurantInput[]
    createMany?: rate_resCreateManyRestaurantInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<like_resCreateWithoutRestaurantInput, like_resUncheckedCreateWithoutRestaurantInput> | like_resCreateWithoutRestaurantInput[] | like_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantInput | like_resCreateOrConnectWithoutRestaurantInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutRestaurantInput | like_resUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: like_resCreateManyRestaurantInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutRestaurantInput | like_resUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutRestaurantInput | like_resUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type rate_resUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<rate_resCreateWithoutRestaurantInput, rate_resUncheckedCreateWithoutRestaurantInput> | rate_resCreateWithoutRestaurantInput[] | rate_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantInput | rate_resCreateOrConnectWithoutRestaurantInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutRestaurantInput | rate_resUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: rate_resCreateManyRestaurantInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutRestaurantInput | rate_resUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutRestaurantInput | rate_resUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type like_resUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<like_resCreateWithoutRestaurantInput, like_resUncheckedCreateWithoutRestaurantInput> | like_resCreateWithoutRestaurantInput[] | like_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutRestaurantInput | like_resCreateOrConnectWithoutRestaurantInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutRestaurantInput | like_resUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: like_resCreateManyRestaurantInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutRestaurantInput | like_resUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutRestaurantInput | like_resUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type rate_resUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<rate_resCreateWithoutRestaurantInput, rate_resUncheckedCreateWithoutRestaurantInput> | rate_resCreateWithoutRestaurantInput[] | rate_resUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutRestaurantInput | rate_resCreateOrConnectWithoutRestaurantInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutRestaurantInput | rate_resUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: rate_resCreateManyRestaurantInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutRestaurantInput | rate_resUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutRestaurantInput | rate_resUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type orderCreateNestedManyWithoutSub_foodInput = {
    create?: XOR<orderCreateWithoutSub_foodInput, orderUncheckedCreateWithoutSub_foodInput> | orderCreateWithoutSub_foodInput[] | orderUncheckedCreateWithoutSub_foodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutSub_foodInput | orderCreateOrConnectWithoutSub_foodInput[]
    createMany?: orderCreateManySub_foodInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type foodCreateNestedOneWithoutSub_foodInput = {
    create?: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
    connectOrCreate?: foodCreateOrConnectWithoutSub_foodInput
    connect?: foodWhereUniqueInput
  }

  export type orderUncheckedCreateNestedManyWithoutSub_foodInput = {
    create?: XOR<orderCreateWithoutSub_foodInput, orderUncheckedCreateWithoutSub_foodInput> | orderCreateWithoutSub_foodInput[] | orderUncheckedCreateWithoutSub_foodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutSub_foodInput | orderCreateOrConnectWithoutSub_foodInput[]
    createMany?: orderCreateManySub_foodInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type orderUpdateManyWithoutSub_foodNestedInput = {
    create?: XOR<orderCreateWithoutSub_foodInput, orderUncheckedCreateWithoutSub_foodInput> | orderCreateWithoutSub_foodInput[] | orderUncheckedCreateWithoutSub_foodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutSub_foodInput | orderCreateOrConnectWithoutSub_foodInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutSub_foodInput | orderUpsertWithWhereUniqueWithoutSub_foodInput[]
    createMany?: orderCreateManySub_foodInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutSub_foodInput | orderUpdateWithWhereUniqueWithoutSub_foodInput[]
    updateMany?: orderUpdateManyWithWhereWithoutSub_foodInput | orderUpdateManyWithWhereWithoutSub_foodInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type foodUpdateOneWithoutSub_foodNestedInput = {
    create?: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
    connectOrCreate?: foodCreateOrConnectWithoutSub_foodInput
    upsert?: foodUpsertWithoutSub_foodInput
    disconnect?: foodWhereInput | boolean
    delete?: foodWhereInput | boolean
    connect?: foodWhereUniqueInput
    update?: XOR<XOR<foodUpdateToOneWithWhereWithoutSub_foodInput, foodUpdateWithoutSub_foodInput>, foodUncheckedUpdateWithoutSub_foodInput>
  }

  export type orderUncheckedUpdateManyWithoutSub_foodNestedInput = {
    create?: XOR<orderCreateWithoutSub_foodInput, orderUncheckedCreateWithoutSub_foodInput> | orderCreateWithoutSub_foodInput[] | orderUncheckedCreateWithoutSub_foodInput[]
    connectOrCreate?: orderCreateOrConnectWithoutSub_foodInput | orderCreateOrConnectWithoutSub_foodInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutSub_foodInput | orderUpsertWithWhereUniqueWithoutSub_foodInput[]
    createMany?: orderCreateManySub_foodInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutSub_foodInput | orderUpdateWithWhereUniqueWithoutSub_foodInput[]
    updateMany?: orderUpdateManyWithWhereWithoutSub_foodInput | orderUpdateManyWithWhereWithoutSub_foodInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type like_resCreateNestedManyWithoutUserInput = {
    create?: XOR<like_resCreateWithoutUserInput, like_resUncheckedCreateWithoutUserInput> | like_resCreateWithoutUserInput[] | like_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUserInput | like_resCreateOrConnectWithoutUserInput[]
    createMany?: like_resCreateManyUserInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type rate_resCreateNestedManyWithoutUserInput = {
    create?: XOR<rate_resCreateWithoutUserInput, rate_resUncheckedCreateWithoutUserInput> | rate_resCreateWithoutUserInput[] | rate_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUserInput | rate_resCreateOrConnectWithoutUserInput[]
    createMany?: rate_resCreateManyUserInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<like_resCreateWithoutUserInput, like_resUncheckedCreateWithoutUserInput> | like_resCreateWithoutUserInput[] | like_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUserInput | like_resCreateOrConnectWithoutUserInput[]
    createMany?: like_resCreateManyUserInputEnvelope
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type rate_resUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<rate_resCreateWithoutUserInput, rate_resUncheckedCreateWithoutUserInput> | rate_resCreateWithoutUserInput[] | rate_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUserInput | rate_resCreateOrConnectWithoutUserInput[]
    createMany?: rate_resCreateManyUserInputEnvelope
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
  }

  export type like_resUpdateManyWithoutUserNestedInput = {
    create?: XOR<like_resCreateWithoutUserInput, like_resUncheckedCreateWithoutUserInput> | like_resCreateWithoutUserInput[] | like_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUserInput | like_resCreateOrConnectWithoutUserInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutUserInput | like_resUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: like_resCreateManyUserInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutUserInput | like_resUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutUserInput | like_resUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type rate_resUpdateManyWithoutUserNestedInput = {
    create?: XOR<rate_resCreateWithoutUserInput, rate_resUncheckedCreateWithoutUserInput> | rate_resCreateWithoutUserInput[] | rate_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUserInput | rate_resCreateOrConnectWithoutUserInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutUserInput | rate_resUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: rate_resCreateManyUserInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutUserInput | rate_resUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutUserInput | rate_resUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type like_resUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<like_resCreateWithoutUserInput, like_resUncheckedCreateWithoutUserInput> | like_resCreateWithoutUserInput[] | like_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: like_resCreateOrConnectWithoutUserInput | like_resCreateOrConnectWithoutUserInput[]
    upsert?: like_resUpsertWithWhereUniqueWithoutUserInput | like_resUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: like_resCreateManyUserInputEnvelope
    set?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    disconnect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    delete?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    connect?: like_resWhereUniqueInput | like_resWhereUniqueInput[]
    update?: like_resUpdateWithWhereUniqueWithoutUserInput | like_resUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: like_resUpdateManyWithWhereWithoutUserInput | like_resUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: like_resScalarWhereInput | like_resScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type rate_resUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<rate_resCreateWithoutUserInput, rate_resUncheckedCreateWithoutUserInput> | rate_resCreateWithoutUserInput[] | rate_resUncheckedCreateWithoutUserInput[]
    connectOrCreate?: rate_resCreateOrConnectWithoutUserInput | rate_resCreateOrConnectWithoutUserInput[]
    upsert?: rate_resUpsertWithWhereUniqueWithoutUserInput | rate_resUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: rate_resCreateManyUserInputEnvelope
    set?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    disconnect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    delete?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    connect?: rate_resWhereUniqueInput | rate_resWhereUniqueInput[]
    update?: rate_resUpdateWithWhereUniqueWithoutUserInput | rate_resUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: rate_resUpdateManyWithWhereWithoutUserInput | rate_resUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type food_typeCreateWithoutFoodInput = {
    type_name: string
  }

  export type food_typeUncheckedCreateWithoutFoodInput = {
    type_id?: number
    type_name: string
  }

  export type food_typeCreateOrConnectWithoutFoodInput = {
    where: food_typeWhereUniqueInput
    create: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
  }

  export type orderCreateWithoutFoodInput = {
    amount: number
    code?: string | null
    user?: userCreateNestedOneWithoutOrderInput
    sub_food?: sub_foodCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutFoodInput = {
    order_id?: number
    user_id?: number | null
    amount: number
    code?: string | null
    art_sub_id?: string | null
  }

  export type orderCreateOrConnectWithoutFoodInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutFoodInput, orderUncheckedCreateWithoutFoodInput>
  }

  export type orderCreateManyFoodInputEnvelope = {
    data: orderCreateManyFoodInput | orderCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type sub_foodCreateWithoutFoodInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    order?: orderCreateNestedManyWithoutSub_foodInput
  }

  export type sub_foodUncheckedCreateWithoutFoodInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    order?: orderUncheckedCreateNestedManyWithoutSub_foodInput
  }

  export type sub_foodCreateOrConnectWithoutFoodInput = {
    where: sub_foodWhereUniqueInput
    create: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput>
  }

  export type sub_foodCreateManyFoodInputEnvelope = {
    data: sub_foodCreateManyFoodInput | sub_foodCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type food_typeUpsertWithoutFoodInput = {
    update: XOR<food_typeUpdateWithoutFoodInput, food_typeUncheckedUpdateWithoutFoodInput>
    create: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
    where?: food_typeWhereInput
  }

  export type food_typeUpdateToOneWithWhereWithoutFoodInput = {
    where?: food_typeWhereInput
    data: XOR<food_typeUpdateWithoutFoodInput, food_typeUncheckedUpdateWithoutFoodInput>
  }

  export type food_typeUpdateWithoutFoodInput = {
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type food_typeUncheckedUpdateWithoutFoodInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type orderUpsertWithWhereUniqueWithoutFoodInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutFoodInput, orderUncheckedUpdateWithoutFoodInput>
    create: XOR<orderCreateWithoutFoodInput, orderUncheckedCreateWithoutFoodInput>
  }

  export type orderUpdateWithWhereUniqueWithoutFoodInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutFoodInput, orderUncheckedUpdateWithoutFoodInput>
  }

  export type orderUpdateManyWithWhereWithoutFoodInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutFoodInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    order_id?: IntFilter<"order"> | number
    user_id?: IntNullableFilter<"order"> | number | null
    food_id?: IntNullableFilter<"order"> | number | null
    amount?: IntFilter<"order"> | number
    code?: StringNullableFilter<"order"> | string | null
    art_sub_id?: StringNullableFilter<"order"> | string | null
  }

  export type sub_foodUpsertWithWhereUniqueWithoutFoodInput = {
    where: sub_foodWhereUniqueInput
    update: XOR<sub_foodUpdateWithoutFoodInput, sub_foodUncheckedUpdateWithoutFoodInput>
    create: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput>
  }

  export type sub_foodUpdateWithWhereUniqueWithoutFoodInput = {
    where: sub_foodWhereUniqueInput
    data: XOR<sub_foodUpdateWithoutFoodInput, sub_foodUncheckedUpdateWithoutFoodInput>
  }

  export type sub_foodUpdateManyWithWhereWithoutFoodInput = {
    where: sub_foodScalarWhereInput
    data: XOR<sub_foodUpdateManyMutationInput, sub_foodUncheckedUpdateManyWithoutFoodInput>
  }

  export type sub_foodScalarWhereInput = {
    AND?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
    OR?: sub_foodScalarWhereInput[]
    NOT?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
    sub_id?: StringFilter<"sub_food"> | string
    sub_name?: StringFilter<"sub_food"> | string
    sub_price?: FloatFilter<"sub_food"> | number
    food_id?: IntNullableFilter<"sub_food"> | number | null
  }

  export type foodCreateWithoutFood_typeInput = {
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    order?: orderCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateWithoutFood_typeInput = {
    food_id?: number
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    order?: orderUncheckedCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodCreateOrConnectWithoutFood_typeInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput>
  }

  export type foodCreateManyFood_typeInputEnvelope = {
    data: foodCreateManyFood_typeInput | foodCreateManyFood_typeInput[]
    skipDuplicates?: boolean
  }

  export type foodUpsertWithWhereUniqueWithoutFood_typeInput = {
    where: foodWhereUniqueInput
    update: XOR<foodUpdateWithoutFood_typeInput, foodUncheckedUpdateWithoutFood_typeInput>
    create: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput>
  }

  export type foodUpdateWithWhereUniqueWithoutFood_typeInput = {
    where: foodWhereUniqueInput
    data: XOR<foodUpdateWithoutFood_typeInput, foodUncheckedUpdateWithoutFood_typeInput>
  }

  export type foodUpdateManyWithWhereWithoutFood_typeInput = {
    where: foodScalarWhereInput
    data: XOR<foodUpdateManyMutationInput, foodUncheckedUpdateManyWithoutFood_typeInput>
  }

  export type foodScalarWhereInput = {
    AND?: foodScalarWhereInput | foodScalarWhereInput[]
    OR?: foodScalarWhereInput[]
    NOT?: foodScalarWhereInput | foodScalarWhereInput[]
    food_id?: IntFilter<"food"> | number
    food_name?: StringFilter<"food"> | string
    image?: StringNullableFilter<"food"> | string | null
    price?: FloatFilter<"food"> | number
    desc?: StringNullableFilter<"food"> | string | null
    type_id?: IntNullableFilter<"food"> | number | null
  }

  export type userCreateWithoutLike_resInput = {
    full_name: string
    email: string
    password: string
    order?: orderCreateNestedManyWithoutUserInput
    rate_res?: rate_resCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLike_resInput = {
    user_id?: number
    full_name: string
    email: string
    password: string
    order?: orderUncheckedCreateNestedManyWithoutUserInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLike_resInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLike_resInput, userUncheckedCreateWithoutLike_resInput>
  }

  export type restaurantCreateWithoutLike_resInput = {
    res_name: string
    image?: string | null
    desc?: string | null
    rate_res?: rate_resCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateWithoutLike_resInput = {
    res_id?: number
    res_name: string
    image?: string | null
    desc?: string | null
    rate_res?: rate_resUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantCreateOrConnectWithoutLike_resInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutLike_resInput, restaurantUncheckedCreateWithoutLike_resInput>
  }

  export type userUpsertWithoutLike_resInput = {
    update: XOR<userUpdateWithoutLike_resInput, userUncheckedUpdateWithoutLike_resInput>
    create: XOR<userCreateWithoutLike_resInput, userUncheckedCreateWithoutLike_resInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLike_resInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLike_resInput, userUncheckedUpdateWithoutLike_resInput>
  }

  export type userUpdateWithoutLike_resInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    order?: orderUpdateManyWithoutUserNestedInput
    rate_res?: rate_resUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLike_resInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutUserNestedInput
  }

  export type restaurantUpsertWithoutLike_resInput = {
    update: XOR<restaurantUpdateWithoutLike_resInput, restaurantUncheckedUpdateWithoutLike_resInput>
    create: XOR<restaurantCreateWithoutLike_resInput, restaurantUncheckedCreateWithoutLike_resInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutLike_resInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutLike_resInput, restaurantUncheckedUpdateWithoutLike_resInput>
  }

  export type restaurantUpdateWithoutLike_resInput = {
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rate_res?: rate_resUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateWithoutLike_resInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    rate_res?: rate_resUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type userCreateWithoutOrderInput = {
    full_name: string
    email: string
    password: string
    like_res?: like_resCreateNestedManyWithoutUserInput
    rate_res?: rate_resCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutOrderInput = {
    user_id?: number
    full_name: string
    email: string
    password: string
    like_res?: like_resUncheckedCreateNestedManyWithoutUserInput
    rate_res?: rate_resUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutOrderInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
  }

  export type foodCreateWithoutOrderInput = {
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    food_type?: food_typeCreateNestedOneWithoutFoodInput
    sub_food?: sub_foodCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateWithoutOrderInput = {
    food_id?: number
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    type_id?: number | null
    sub_food?: sub_foodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodCreateOrConnectWithoutOrderInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutOrderInput, foodUncheckedCreateWithoutOrderInput>
  }

  export type sub_foodCreateWithoutOrderInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    food?: foodCreateNestedOneWithoutSub_foodInput
  }

  export type sub_foodUncheckedCreateWithoutOrderInput = {
    sub_id: string
    sub_name: string
    sub_price: number
    food_id?: number | null
  }

  export type sub_foodCreateOrConnectWithoutOrderInput = {
    where: sub_foodWhereUniqueInput
    create: XOR<sub_foodCreateWithoutOrderInput, sub_foodUncheckedCreateWithoutOrderInput>
  }

  export type userUpsertWithoutOrderInput = {
    update: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrderInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
  }

  export type userUpdateWithoutOrderInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    like_res?: like_resUpdateManyWithoutUserNestedInput
    rate_res?: rate_resUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutOrderInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    like_res?: like_resUncheckedUpdateManyWithoutUserNestedInput
    rate_res?: rate_resUncheckedUpdateManyWithoutUserNestedInput
  }

  export type foodUpsertWithoutOrderInput = {
    update: XOR<foodUpdateWithoutOrderInput, foodUncheckedUpdateWithoutOrderInput>
    create: XOR<foodCreateWithoutOrderInput, foodUncheckedCreateWithoutOrderInput>
    where?: foodWhereInput
  }

  export type foodUpdateToOneWithWhereWithoutOrderInput = {
    where?: foodWhereInput
    data: XOR<foodUpdateWithoutOrderInput, foodUncheckedUpdateWithoutOrderInput>
  }

  export type foodUpdateWithoutOrderInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    food_type?: food_typeUpdateOneWithoutFoodNestedInput
    sub_food?: sub_foodUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateWithoutOrderInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    sub_food?: sub_foodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type sub_foodUpsertWithoutOrderInput = {
    update: XOR<sub_foodUpdateWithoutOrderInput, sub_foodUncheckedUpdateWithoutOrderInput>
    create: XOR<sub_foodCreateWithoutOrderInput, sub_foodUncheckedCreateWithoutOrderInput>
    where?: sub_foodWhereInput
  }

  export type sub_foodUpdateToOneWithWhereWithoutOrderInput = {
    where?: sub_foodWhereInput
    data: XOR<sub_foodUpdateWithoutOrderInput, sub_foodUncheckedUpdateWithoutOrderInput>
  }

  export type sub_foodUpdateWithoutOrderInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    food?: foodUpdateOneWithoutSub_foodNestedInput
  }

  export type sub_foodUncheckedUpdateWithoutOrderInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateWithoutRate_resInput = {
    full_name: string
    email: string
    password: string
    like_res?: like_resCreateNestedManyWithoutUserInput
    order?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRate_resInput = {
    user_id?: number
    full_name: string
    email: string
    password: string
    like_res?: like_resUncheckedCreateNestedManyWithoutUserInput
    order?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRate_resInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRate_resInput, userUncheckedCreateWithoutRate_resInput>
  }

  export type restaurantCreateWithoutRate_resInput = {
    res_name: string
    image?: string | null
    desc?: string | null
    like_res?: like_resCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantUncheckedCreateWithoutRate_resInput = {
    res_id?: number
    res_name: string
    image?: string | null
    desc?: string | null
    like_res?: like_resUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type restaurantCreateOrConnectWithoutRate_resInput = {
    where: restaurantWhereUniqueInput
    create: XOR<restaurantCreateWithoutRate_resInput, restaurantUncheckedCreateWithoutRate_resInput>
  }

  export type userUpsertWithoutRate_resInput = {
    update: XOR<userUpdateWithoutRate_resInput, userUncheckedUpdateWithoutRate_resInput>
    create: XOR<userCreateWithoutRate_resInput, userUncheckedCreateWithoutRate_resInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRate_resInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRate_resInput, userUncheckedUpdateWithoutRate_resInput>
  }

  export type userUpdateWithoutRate_resInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    like_res?: like_resUpdateManyWithoutUserNestedInput
    order?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRate_resInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    like_res?: like_resUncheckedUpdateManyWithoutUserNestedInput
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type restaurantUpsertWithoutRate_resInput = {
    update: XOR<restaurantUpdateWithoutRate_resInput, restaurantUncheckedUpdateWithoutRate_resInput>
    create: XOR<restaurantCreateWithoutRate_resInput, restaurantUncheckedCreateWithoutRate_resInput>
    where?: restaurantWhereInput
  }

  export type restaurantUpdateToOneWithWhereWithoutRate_resInput = {
    where?: restaurantWhereInput
    data: XOR<restaurantUpdateWithoutRate_resInput, restaurantUncheckedUpdateWithoutRate_resInput>
  }

  export type restaurantUpdateWithoutRate_resInput = {
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    like_res?: like_resUpdateManyWithoutRestaurantNestedInput
  }

  export type restaurantUncheckedUpdateWithoutRate_resInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    res_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    like_res?: like_resUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type like_resCreateWithoutRestaurantInput = {
    date_like?: Date | string | null
    user: userCreateNestedOneWithoutLike_resInput
  }

  export type like_resUncheckedCreateWithoutRestaurantInput = {
    user_id: number
    date_like?: Date | string | null
  }

  export type like_resCreateOrConnectWithoutRestaurantInput = {
    where: like_resWhereUniqueInput
    create: XOR<like_resCreateWithoutRestaurantInput, like_resUncheckedCreateWithoutRestaurantInput>
  }

  export type like_resCreateManyRestaurantInputEnvelope = {
    data: like_resCreateManyRestaurantInput | like_resCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type rate_resCreateWithoutRestaurantInput = {
    amount?: number | null
    date_rate?: Date | string | null
    user: userCreateNestedOneWithoutRate_resInput
  }

  export type rate_resUncheckedCreateWithoutRestaurantInput = {
    user_id: number
    amount?: number | null
    date_rate?: Date | string | null
  }

  export type rate_resCreateOrConnectWithoutRestaurantInput = {
    where: rate_resWhereUniqueInput
    create: XOR<rate_resCreateWithoutRestaurantInput, rate_resUncheckedCreateWithoutRestaurantInput>
  }

  export type rate_resCreateManyRestaurantInputEnvelope = {
    data: rate_resCreateManyRestaurantInput | rate_resCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type like_resUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: like_resWhereUniqueInput
    update: XOR<like_resUpdateWithoutRestaurantInput, like_resUncheckedUpdateWithoutRestaurantInput>
    create: XOR<like_resCreateWithoutRestaurantInput, like_resUncheckedCreateWithoutRestaurantInput>
  }

  export type like_resUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: like_resWhereUniqueInput
    data: XOR<like_resUpdateWithoutRestaurantInput, like_resUncheckedUpdateWithoutRestaurantInput>
  }

  export type like_resUpdateManyWithWhereWithoutRestaurantInput = {
    where: like_resScalarWhereInput
    data: XOR<like_resUpdateManyMutationInput, like_resUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type like_resScalarWhereInput = {
    AND?: like_resScalarWhereInput | like_resScalarWhereInput[]
    OR?: like_resScalarWhereInput[]
    NOT?: like_resScalarWhereInput | like_resScalarWhereInput[]
    user_id?: IntFilter<"like_res"> | number
    res_id?: IntFilter<"like_res"> | number
    date_like?: DateTimeNullableFilter<"like_res"> | Date | string | null
  }

  export type rate_resUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: rate_resWhereUniqueInput
    update: XOR<rate_resUpdateWithoutRestaurantInput, rate_resUncheckedUpdateWithoutRestaurantInput>
    create: XOR<rate_resCreateWithoutRestaurantInput, rate_resUncheckedCreateWithoutRestaurantInput>
  }

  export type rate_resUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: rate_resWhereUniqueInput
    data: XOR<rate_resUpdateWithoutRestaurantInput, rate_resUncheckedUpdateWithoutRestaurantInput>
  }

  export type rate_resUpdateManyWithWhereWithoutRestaurantInput = {
    where: rate_resScalarWhereInput
    data: XOR<rate_resUpdateManyMutationInput, rate_resUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type rate_resScalarWhereInput = {
    AND?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
    OR?: rate_resScalarWhereInput[]
    NOT?: rate_resScalarWhereInput | rate_resScalarWhereInput[]
    user_id?: IntFilter<"rate_res"> | number
    res_id?: IntFilter<"rate_res"> | number
    amount?: IntNullableFilter<"rate_res"> | number | null
    date_rate?: DateTimeNullableFilter<"rate_res"> | Date | string | null
  }

  export type orderCreateWithoutSub_foodInput = {
    amount: number
    code?: string | null
    user?: userCreateNestedOneWithoutOrderInput
    food?: foodCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutSub_foodInput = {
    order_id?: number
    user_id?: number | null
    food_id?: number | null
    amount: number
    code?: string | null
  }

  export type orderCreateOrConnectWithoutSub_foodInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutSub_foodInput, orderUncheckedCreateWithoutSub_foodInput>
  }

  export type orderCreateManySub_foodInputEnvelope = {
    data: orderCreateManySub_foodInput | orderCreateManySub_foodInput[]
    skipDuplicates?: boolean
  }

  export type foodCreateWithoutSub_foodInput = {
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    food_type?: food_typeCreateNestedOneWithoutFoodInput
    order?: orderCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateWithoutSub_foodInput = {
    food_id?: number
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
    type_id?: number | null
    order?: orderUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodCreateOrConnectWithoutSub_foodInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
  }

  export type orderUpsertWithWhereUniqueWithoutSub_foodInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutSub_foodInput, orderUncheckedUpdateWithoutSub_foodInput>
    create: XOR<orderCreateWithoutSub_foodInput, orderUncheckedCreateWithoutSub_foodInput>
  }

  export type orderUpdateWithWhereUniqueWithoutSub_foodInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutSub_foodInput, orderUncheckedUpdateWithoutSub_foodInput>
  }

  export type orderUpdateManyWithWhereWithoutSub_foodInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutSub_foodInput>
  }

  export type foodUpsertWithoutSub_foodInput = {
    update: XOR<foodUpdateWithoutSub_foodInput, foodUncheckedUpdateWithoutSub_foodInput>
    create: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
    where?: foodWhereInput
  }

  export type foodUpdateToOneWithWhereWithoutSub_foodInput = {
    where?: foodWhereInput
    data: XOR<foodUpdateWithoutSub_foodInput, foodUncheckedUpdateWithoutSub_foodInput>
  }

  export type foodUpdateWithoutSub_foodInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    food_type?: food_typeUpdateOneWithoutFoodNestedInput
    order?: orderUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateWithoutSub_foodInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    order?: orderUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type like_resCreateWithoutUserInput = {
    date_like?: Date | string | null
    restaurant: restaurantCreateNestedOneWithoutLike_resInput
  }

  export type like_resUncheckedCreateWithoutUserInput = {
    res_id: number
    date_like?: Date | string | null
  }

  export type like_resCreateOrConnectWithoutUserInput = {
    where: like_resWhereUniqueInput
    create: XOR<like_resCreateWithoutUserInput, like_resUncheckedCreateWithoutUserInput>
  }

  export type like_resCreateManyUserInputEnvelope = {
    data: like_resCreateManyUserInput | like_resCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUserInput = {
    amount: number
    code?: string | null
    food?: foodCreateNestedOneWithoutOrderInput
    sub_food?: sub_foodCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    order_id?: number
    food_id?: number | null
    amount: number
    code?: string | null
    art_sub_id?: string | null
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rate_resCreateWithoutUserInput = {
    amount?: number | null
    date_rate?: Date | string | null
    restaurant: restaurantCreateNestedOneWithoutRate_resInput
  }

  export type rate_resUncheckedCreateWithoutUserInput = {
    res_id: number
    amount?: number | null
    date_rate?: Date | string | null
  }

  export type rate_resCreateOrConnectWithoutUserInput = {
    where: rate_resWhereUniqueInput
    create: XOR<rate_resCreateWithoutUserInput, rate_resUncheckedCreateWithoutUserInput>
  }

  export type rate_resCreateManyUserInputEnvelope = {
    data: rate_resCreateManyUserInput | rate_resCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type like_resUpsertWithWhereUniqueWithoutUserInput = {
    where: like_resWhereUniqueInput
    update: XOR<like_resUpdateWithoutUserInput, like_resUncheckedUpdateWithoutUserInput>
    create: XOR<like_resCreateWithoutUserInput, like_resUncheckedCreateWithoutUserInput>
  }

  export type like_resUpdateWithWhereUniqueWithoutUserInput = {
    where: like_resWhereUniqueInput
    data: XOR<like_resUpdateWithoutUserInput, like_resUncheckedUpdateWithoutUserInput>
  }

  export type like_resUpdateManyWithWhereWithoutUserInput = {
    where: like_resScalarWhereInput
    data: XOR<like_resUpdateManyMutationInput, like_resUncheckedUpdateManyWithoutUserInput>
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type rate_resUpsertWithWhereUniqueWithoutUserInput = {
    where: rate_resWhereUniqueInput
    update: XOR<rate_resUpdateWithoutUserInput, rate_resUncheckedUpdateWithoutUserInput>
    create: XOR<rate_resCreateWithoutUserInput, rate_resUncheckedCreateWithoutUserInput>
  }

  export type rate_resUpdateWithWhereUniqueWithoutUserInput = {
    where: rate_resWhereUniqueInput
    data: XOR<rate_resUpdateWithoutUserInput, rate_resUncheckedUpdateWithoutUserInput>
  }

  export type rate_resUpdateManyWithWhereWithoutUserInput = {
    where: rate_resScalarWhereInput
    data: XOR<rate_resUpdateManyMutationInput, rate_resUncheckedUpdateManyWithoutUserInput>
  }

  export type orderCreateManyFoodInput = {
    order_id?: number
    user_id?: number | null
    amount: number
    code?: string | null
    art_sub_id?: string | null
  }

  export type sub_foodCreateManyFoodInput = {
    sub_id: string
    sub_name: string
    sub_price: number
  }

  export type orderUpdateWithoutFoodInput = {
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutOrderNestedInput
    sub_food?: sub_foodUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutFoodInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    art_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orderUncheckedUpdateManyWithoutFoodInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    art_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_foodUpdateWithoutFoodInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateManyWithoutSub_foodNestedInput
  }

  export type sub_foodUncheckedUpdateWithoutFoodInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
    order?: orderUncheckedUpdateManyWithoutSub_foodNestedInput
  }

  export type sub_foodUncheckedUpdateManyWithoutFoodInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    sub_name?: StringFieldUpdateOperationsInput | string
    sub_price?: FloatFieldUpdateOperationsInput | number
  }

  export type foodCreateManyFood_typeInput = {
    food_id?: number
    food_name: string
    image?: string | null
    price: number
    desc?: string | null
  }

  export type foodUpdateWithoutFood_typeInput = {
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    order?: orderUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateWithoutFood_typeInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    order?: orderUncheckedUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateManyWithoutFood_typeInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type like_resCreateManyRestaurantInput = {
    user_id: number
    date_like?: Date | string | null
  }

  export type rate_resCreateManyRestaurantInput = {
    user_id: number
    amount?: number | null
    date_rate?: Date | string | null
  }

  export type like_resUpdateWithoutRestaurantInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutLike_resNestedInput
  }

  export type like_resUncheckedUpdateWithoutRestaurantInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type like_resUncheckedUpdateManyWithoutRestaurantInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rate_resUpdateWithoutRestaurantInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutRate_resNestedInput
  }

  export type rate_resUncheckedUpdateWithoutRestaurantInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rate_resUncheckedUpdateManyWithoutRestaurantInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderCreateManySub_foodInput = {
    order_id?: number
    user_id?: number | null
    food_id?: number | null
    amount: number
    code?: string | null
  }

  export type orderUpdateWithoutSub_foodInput = {
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutOrderNestedInput
    food?: foodUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutSub_foodInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orderUncheckedUpdateManyWithoutSub_foodInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type like_resCreateManyUserInput = {
    res_id: number
    date_like?: Date | string | null
  }

  export type orderCreateManyUserInput = {
    order_id?: number
    food_id?: number | null
    amount: number
    code?: string | null
    art_sub_id?: string | null
  }

  export type rate_resCreateManyUserInput = {
    res_id: number
    amount?: number | null
    date_rate?: Date | string | null
  }

  export type like_resUpdateWithoutUserInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurant?: restaurantUpdateOneRequiredWithoutLike_resNestedInput
  }

  export type like_resUncheckedUpdateWithoutUserInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type like_resUncheckedUpdateManyWithoutUserInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    food?: foodUpdateOneWithoutOrderNestedInput
    sub_food?: sub_foodUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    art_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    art_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rate_resUpdateWithoutUserInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurant?: restaurantUpdateOneRequiredWithoutRate_resNestedInput
  }

  export type rate_resUncheckedUpdateWithoutUserInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rate_resUncheckedUpdateManyWithoutUserInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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