
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model PixelArt
 * 
 */
export type PixelArt = $Result.DefaultSelection<Prisma.$PixelArtPayload>
/**
 * Model DailyPrompt
 * 
 */
export type DailyPrompt = $Result.DefaultSelection<Prisma.$DailyPromptPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Streak
 * 
 */
export type Streak = $Result.DefaultSelection<Prisma.$StreakPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model BadgeOnProfile
 * 
 */
export type BadgeOnProfile = $Result.DefaultSelection<Prisma.$BadgeOnProfilePayload>

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>
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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pixelArt`: Exposes CRUD operations for the **PixelArt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PixelArts
    * const pixelArts = await prisma.pixelArt.findMany()
    * ```
    */
  get pixelArt(): Prisma.PixelArtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyPrompt`: Exposes CRUD operations for the **DailyPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyPrompts
    * const dailyPrompts = await prisma.dailyPrompt.findMany()
    * ```
    */
  get dailyPrompt(): Prisma.DailyPromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streak`: Exposes CRUD operations for the **Streak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streaks
    * const streaks = await prisma.streak.findMany()
    * ```
    */
  get streak(): Prisma.StreakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badgeOnProfile`: Exposes CRUD operations for the **BadgeOnProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BadgeOnProfiles
    * const badgeOnProfiles = await prisma.badgeOnProfile.findMany()
    * ```
    */
  get badgeOnProfile(): Prisma.BadgeOnProfileDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Profile: 'Profile',
    PixelArt: 'PixelArt',
    DailyPrompt: 'DailyPrompt',
    Account: 'Account',
    Session: 'Session',
    Like: 'Like',
    Follow: 'Follow',
    Comment: 'Comment',
    Streak: 'Streak',
    Badge: 'Badge',
    BadgeOnProfile: 'BadgeOnProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "pixelArt" | "dailyPrompt" | "account" | "session" | "like" | "follow" | "comment" | "streak" | "badge" | "badgeOnProfile"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      PixelArt: {
        payload: Prisma.$PixelArtPayload<ExtArgs>
        fields: Prisma.PixelArtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PixelArtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PixelArtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>
          }
          findFirst: {
            args: Prisma.PixelArtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PixelArtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>
          }
          findMany: {
            args: Prisma.PixelArtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>[]
          }
          create: {
            args: Prisma.PixelArtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>
          }
          createMany: {
            args: Prisma.PixelArtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PixelArtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>
          }
          update: {
            args: Prisma.PixelArtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>
          }
          deleteMany: {
            args: Prisma.PixelArtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PixelArtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PixelArtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PixelArtPayload>
          }
          aggregate: {
            args: Prisma.PixelArtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePixelArt>
          }
          groupBy: {
            args: Prisma.PixelArtGroupByArgs<ExtArgs>
            result: $Utils.Optional<PixelArtGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PixelArtFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PixelArtAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PixelArtCountArgs<ExtArgs>
            result: $Utils.Optional<PixelArtCountAggregateOutputType> | number
          }
        }
      }
      DailyPrompt: {
        payload: Prisma.$DailyPromptPayload<ExtArgs>
        fields: Prisma.DailyPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>
          }
          findFirst: {
            args: Prisma.DailyPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>
          }
          findMany: {
            args: Prisma.DailyPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>[]
          }
          create: {
            args: Prisma.DailyPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>
          }
          createMany: {
            args: Prisma.DailyPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>
          }
          update: {
            args: Prisma.DailyPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>
          }
          deleteMany: {
            args: Prisma.DailyPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPromptPayload>
          }
          aggregate: {
            args: Prisma.DailyPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyPrompt>
          }
          groupBy: {
            args: Prisma.DailyPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyPromptGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DailyPromptFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DailyPromptAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DailyPromptCountArgs<ExtArgs>
            result: $Utils.Optional<DailyPromptCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Streak: {
        payload: Prisma.$StreakPayload<ExtArgs>
        fields: Prisma.StreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findFirst: {
            args: Prisma.StreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findMany: {
            args: Prisma.StreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          create: {
            args: Prisma.StreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          createMany: {
            args: Prisma.StreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          update: {
            args: Prisma.StreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          deleteMany: {
            args: Prisma.StreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          aggregate: {
            args: Prisma.StreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreak>
          }
          groupBy: {
            args: Prisma.StreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreakGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StreakFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StreakAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StreakCountArgs<ExtArgs>
            result: $Utils.Optional<StreakCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BadgeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BadgeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      BadgeOnProfile: {
        payload: Prisma.$BadgeOnProfilePayload<ExtArgs>
        fields: Prisma.BadgeOnProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeOnProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeOnProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>
          }
          findFirst: {
            args: Prisma.BadgeOnProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeOnProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>
          }
          findMany: {
            args: Prisma.BadgeOnProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>[]
          }
          create: {
            args: Prisma.BadgeOnProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>
          }
          createMany: {
            args: Prisma.BadgeOnProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BadgeOnProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>
          }
          update: {
            args: Prisma.BadgeOnProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>
          }
          deleteMany: {
            args: Prisma.BadgeOnProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeOnProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeOnProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgeOnProfilePayload>
          }
          aggregate: {
            args: Prisma.BadgeOnProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadgeOnProfile>
          }
          groupBy: {
            args: Prisma.BadgeOnProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeOnProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BadgeOnProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BadgeOnProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BadgeOnProfileCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeOnProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    }
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    profile?: ProfileOmit
    pixelArt?: PixelArtOmit
    dailyPrompt?: DailyPromptOmit
    account?: AccountOmit
    session?: SessionOmit
    like?: LikeOmit
    follow?: FollowOmit
    comment?: CommentOmit
    streak?: StreakOmit
    badge?: BadgeOmit
    badgeOnProfile?: BadgeOnProfileOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    pixelArts: number
    likes: number
    comments: number
    followers: number
    following: number
    streaks: number
    badges: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pixelArts?: boolean | ProfileCountOutputTypeCountPixelArtsArgs
    likes?: boolean | ProfileCountOutputTypeCountLikesArgs
    comments?: boolean | ProfileCountOutputTypeCountCommentsArgs
    followers?: boolean | ProfileCountOutputTypeCountFollowersArgs
    following?: boolean | ProfileCountOutputTypeCountFollowingArgs
    streaks?: boolean | ProfileCountOutputTypeCountStreaksArgs
    badges?: boolean | ProfileCountOutputTypeCountBadgesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPixelArtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PixelArtWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountStreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeOnProfileWhereInput
  }


  /**
   * Count Type PixelArtCountOutputType
   */

  export type PixelArtCountOutputType = {
    likes: number
    comments: number
  }

  export type PixelArtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PixelArtCountOutputTypeCountLikesArgs
    comments?: boolean | PixelArtCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PixelArtCountOutputType without action
   */
  export type PixelArtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArtCountOutputType
     */
    select?: PixelArtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PixelArtCountOutputType without action
   */
  export type PixelArtCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * PixelArtCountOutputType without action
   */
  export type PixelArtCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type DailyPromptCountOutputType
   */

  export type DailyPromptCountOutputType = {
    pixelArts: number
  }

  export type DailyPromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pixelArts?: boolean | DailyPromptCountOutputTypeCountPixelArtsArgs
  }

  // Custom InputTypes
  /**
   * DailyPromptCountOutputType without action
   */
  export type DailyPromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPromptCountOutputType
     */
    select?: DailyPromptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyPromptCountOutputType without action
   */
  export type DailyPromptCountOutputTypeCountPixelArtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PixelArtWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    profiles: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | BadgeCountOutputTypeCountProfilesArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeOnProfileWhereInput
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
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
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
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    pixelArtCount: number | null
    likesReceivedCount: number | null
    pixelArtLikedCount: number | null
    commentCount: number | null
    currentStreak: number | null
    maxStreakCount: number | null
  }

  export type ProfileSumAggregateOutputType = {
    pixelArtCount: number | null
    likesReceivedCount: number | null
    pixelArtLikedCount: number | null
    commentCount: number | null
    currentStreak: number | null
    maxStreakCount: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    email: string | null
    name: string | null
    username: string | null
    bio: string | null
    pixelArtCount: number | null
    likesReceivedCount: number | null
    pixelArtLikedCount: number | null
    commentCount: number | null
    currentStreak: number | null
    maxStreakCount: number | null
    lastActivity: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    email: string | null
    name: string | null
    username: string | null
    bio: string | null
    pixelArtCount: number | null
    likesReceivedCount: number | null
    pixelArtLikedCount: number | null
    commentCount: number | null
    currentStreak: number | null
    maxStreakCount: number | null
    lastActivity: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    name: number
    username: number
    avatarConfig: number
    bio: number
    socialLinks: number
    pixelArtCount: number
    likesReceivedCount: number
    pixelArtLikedCount: number
    commentCount: number
    currentStreak: number
    maxStreakCount: number
    lastActivity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    pixelArtCount?: true
    likesReceivedCount?: true
    pixelArtLikedCount?: true
    commentCount?: true
    currentStreak?: true
    maxStreakCount?: true
  }

  export type ProfileSumAggregateInputType = {
    pixelArtCount?: true
    likesReceivedCount?: true
    pixelArtLikedCount?: true
    commentCount?: true
    currentStreak?: true
    maxStreakCount?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    name?: true
    username?: true
    bio?: true
    pixelArtCount?: true
    likesReceivedCount?: true
    pixelArtLikedCount?: true
    commentCount?: true
    currentStreak?: true
    maxStreakCount?: true
    lastActivity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    name?: true
    username?: true
    bio?: true
    pixelArtCount?: true
    likesReceivedCount?: true
    pixelArtLikedCount?: true
    commentCount?: true
    currentStreak?: true
    maxStreakCount?: true
    lastActivity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    name?: true
    username?: true
    avatarConfig?: true
    bio?: true
    socialLinks?: true
    pixelArtCount?: true
    likesReceivedCount?: true
    pixelArtLikedCount?: true
    commentCount?: true
    currentStreak?: true
    maxStreakCount?: true
    lastActivity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    email: string | null
    name: string | null
    username: string | null
    avatarConfig: JsonValue | null
    bio: string | null
    socialLinks: JsonValue | null
    pixelArtCount: number
    likesReceivedCount: number
    pixelArtLikedCount: number
    commentCount: number
    currentStreak: number
    maxStreakCount: number
    lastActivity: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatarConfig?: boolean
    bio?: boolean
    socialLinks?: boolean
    pixelArtCount?: boolean
    likesReceivedCount?: boolean
    pixelArtLikedCount?: boolean
    commentCount?: boolean
    currentStreak?: boolean
    maxStreakCount?: boolean
    lastActivity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pixelArts?: boolean | Profile$pixelArtsArgs<ExtArgs>
    likes?: boolean | Profile$likesArgs<ExtArgs>
    comments?: boolean | Profile$commentsArgs<ExtArgs>
    followers?: boolean | Profile$followersArgs<ExtArgs>
    following?: boolean | Profile$followingArgs<ExtArgs>
    streaks?: boolean | Profile$streaksArgs<ExtArgs>
    badges?: boolean | Profile$badgesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatarConfig?: boolean
    bio?: boolean
    socialLinks?: boolean
    pixelArtCount?: boolean
    likesReceivedCount?: boolean
    pixelArtLikedCount?: boolean
    commentCount?: boolean
    currentStreak?: boolean
    maxStreakCount?: boolean
    lastActivity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "email" | "name" | "username" | "avatarConfig" | "bio" | "socialLinks" | "pixelArtCount" | "likesReceivedCount" | "pixelArtLikedCount" | "commentCount" | "currentStreak" | "maxStreakCount" | "lastActivity" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pixelArts?: boolean | Profile$pixelArtsArgs<ExtArgs>
    likes?: boolean | Profile$likesArgs<ExtArgs>
    comments?: boolean | Profile$commentsArgs<ExtArgs>
    followers?: boolean | Profile$followersArgs<ExtArgs>
    following?: boolean | Profile$followingArgs<ExtArgs>
    streaks?: boolean | Profile$streaksArgs<ExtArgs>
    badges?: boolean | Profile$badgesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pixelArts: Prisma.$PixelArtPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      followers: Prisma.$FollowPayload<ExtArgs>[]
      following: Prisma.$FollowPayload<ExtArgs>[]
      streaks: Prisma.$StreakPayload<ExtArgs>[]
      badges: Prisma.$BadgeOnProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      email: string | null
      name: string | null
      username: string | null
      avatarConfig: Prisma.JsonValue | null
      bio: string | null
      socialLinks: Prisma.JsonValue | null
      pixelArtCount: number
      likesReceivedCount: number
      pixelArtLikedCount: number
      commentCount: number
      currentStreak: number
      maxStreakCount: number
      lastActivity: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * @param {ProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const profile = await prisma.profile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Profile.
     * @param {ProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const profile = await prisma.profile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pixelArts<T extends Profile$pixelArtsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$pixelArtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Profile$likesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Profile$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends Profile$followersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends Profile$followingArgs<ExtArgs> = {}>(args?: Subset<T, Profile$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streaks<T extends Profile$streaksArgs<ExtArgs> = {}>(args?: Subset<T, Profile$streaksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badges<T extends Profile$badgesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly avatarConfig: FieldRef<"Profile", 'Json'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly socialLinks: FieldRef<"Profile", 'Json'>
    readonly pixelArtCount: FieldRef<"Profile", 'Int'>
    readonly likesReceivedCount: FieldRef<"Profile", 'Int'>
    readonly pixelArtLikedCount: FieldRef<"Profile", 'Int'>
    readonly commentCount: FieldRef<"Profile", 'Int'>
    readonly currentStreak: FieldRef<"Profile", 'Int'>
    readonly maxStreakCount: FieldRef<"Profile", 'Int'>
    readonly lastActivity: FieldRef<"Profile", 'DateTime'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile findRaw
   */
  export type ProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profile aggregateRaw
   */
  export type ProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profile.pixelArts
   */
  export type Profile$pixelArtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    where?: PixelArtWhereInput
    orderBy?: PixelArtOrderByWithRelationInput | PixelArtOrderByWithRelationInput[]
    cursor?: PixelArtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PixelArtScalarFieldEnum | PixelArtScalarFieldEnum[]
  }

  /**
   * Profile.likes
   */
  export type Profile$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Profile.comments
   */
  export type Profile$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Profile.followers
   */
  export type Profile$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Profile.following
   */
  export type Profile$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Profile.streaks
   */
  export type Profile$streaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    cursor?: StreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Profile.badges
   */
  export type Profile$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    where?: BadgeOnProfileWhereInput
    orderBy?: BadgeOnProfileOrderByWithRelationInput | BadgeOnProfileOrderByWithRelationInput[]
    cursor?: BadgeOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeOnProfileScalarFieldEnum | BadgeOnProfileScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model PixelArt
   */

  export type AggregatePixelArt = {
    _count: PixelArtCountAggregateOutputType | null
    _avg: PixelArtAvgAggregateOutputType | null
    _sum: PixelArtSumAggregateOutputType | null
    _min: PixelArtMinAggregateOutputType | null
    _max: PixelArtMaxAggregateOutputType | null
  }

  export type PixelArtAvgAggregateOutputType = {
    gridSize: number | null
    likesCount: number | null
  }

  export type PixelArtSumAggregateOutputType = {
    gridSize: number | null
    likesCount: number | null
  }

  export type PixelArtMinAggregateOutputType = {
    id: string | null
    data: string | null
    gridSize: number | null
    imageUrl: string | null
    title: string | null
    editable: boolean | null
    addToTodaysPixelArts: boolean | null
    likesCount: number | null
    profileId: string | null
    dailyPromptId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PixelArtMaxAggregateOutputType = {
    id: string | null
    data: string | null
    gridSize: number | null
    imageUrl: string | null
    title: string | null
    editable: boolean | null
    addToTodaysPixelArts: boolean | null
    likesCount: number | null
    profileId: string | null
    dailyPromptId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PixelArtCountAggregateOutputType = {
    id: number
    data: number
    gridSize: number
    imageUrl: number
    title: number
    editable: number
    addToTodaysPixelArts: number
    likesCount: number
    profileId: number
    dailyPromptId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PixelArtAvgAggregateInputType = {
    gridSize?: true
    likesCount?: true
  }

  export type PixelArtSumAggregateInputType = {
    gridSize?: true
    likesCount?: true
  }

  export type PixelArtMinAggregateInputType = {
    id?: true
    data?: true
    gridSize?: true
    imageUrl?: true
    title?: true
    editable?: true
    addToTodaysPixelArts?: true
    likesCount?: true
    profileId?: true
    dailyPromptId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PixelArtMaxAggregateInputType = {
    id?: true
    data?: true
    gridSize?: true
    imageUrl?: true
    title?: true
    editable?: true
    addToTodaysPixelArts?: true
    likesCount?: true
    profileId?: true
    dailyPromptId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PixelArtCountAggregateInputType = {
    id?: true
    data?: true
    gridSize?: true
    imageUrl?: true
    title?: true
    editable?: true
    addToTodaysPixelArts?: true
    likesCount?: true
    profileId?: true
    dailyPromptId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PixelArtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PixelArt to aggregate.
     */
    where?: PixelArtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PixelArts to fetch.
     */
    orderBy?: PixelArtOrderByWithRelationInput | PixelArtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PixelArtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PixelArts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PixelArts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PixelArts
    **/
    _count?: true | PixelArtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PixelArtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PixelArtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PixelArtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PixelArtMaxAggregateInputType
  }

  export type GetPixelArtAggregateType<T extends PixelArtAggregateArgs> = {
        [P in keyof T & keyof AggregatePixelArt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePixelArt[P]>
      : GetScalarType<T[P], AggregatePixelArt[P]>
  }




  export type PixelArtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PixelArtWhereInput
    orderBy?: PixelArtOrderByWithAggregationInput | PixelArtOrderByWithAggregationInput[]
    by: PixelArtScalarFieldEnum[] | PixelArtScalarFieldEnum
    having?: PixelArtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PixelArtCountAggregateInputType | true
    _avg?: PixelArtAvgAggregateInputType
    _sum?: PixelArtSumAggregateInputType
    _min?: PixelArtMinAggregateInputType
    _max?: PixelArtMaxAggregateInputType
  }

  export type PixelArtGroupByOutputType = {
    id: string
    data: string
    gridSize: number
    imageUrl: string
    title: string
    editable: boolean
    addToTodaysPixelArts: boolean
    likesCount: number
    profileId: string
    dailyPromptId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PixelArtCountAggregateOutputType | null
    _avg: PixelArtAvgAggregateOutputType | null
    _sum: PixelArtSumAggregateOutputType | null
    _min: PixelArtMinAggregateOutputType | null
    _max: PixelArtMaxAggregateOutputType | null
  }

  type GetPixelArtGroupByPayload<T extends PixelArtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PixelArtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PixelArtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PixelArtGroupByOutputType[P]>
            : GetScalarType<T[P], PixelArtGroupByOutputType[P]>
        }
      >
    >


  export type PixelArtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    gridSize?: boolean
    imageUrl?: boolean
    title?: boolean
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: boolean
    profileId?: boolean
    dailyPromptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    dailyPrompt?: boolean | PixelArt$dailyPromptArgs<ExtArgs>
    likes?: boolean | PixelArt$likesArgs<ExtArgs>
    comments?: boolean | PixelArt$commentsArgs<ExtArgs>
    _count?: boolean | PixelArtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pixelArt"]>



  export type PixelArtSelectScalar = {
    id?: boolean
    data?: boolean
    gridSize?: boolean
    imageUrl?: boolean
    title?: boolean
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: boolean
    profileId?: boolean
    dailyPromptId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PixelArtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "gridSize" | "imageUrl" | "title" | "editable" | "addToTodaysPixelArts" | "likesCount" | "profileId" | "dailyPromptId" | "createdAt" | "updatedAt", ExtArgs["result"]["pixelArt"]>
  export type PixelArtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    dailyPrompt?: boolean | PixelArt$dailyPromptArgs<ExtArgs>
    likes?: boolean | PixelArt$likesArgs<ExtArgs>
    comments?: boolean | PixelArt$commentsArgs<ExtArgs>
    _count?: boolean | PixelArtCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PixelArtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PixelArt"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      dailyPrompt: Prisma.$DailyPromptPayload<ExtArgs> | null
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: string
      gridSize: number
      imageUrl: string
      title: string
      editable: boolean
      addToTodaysPixelArts: boolean
      likesCount: number
      profileId: string
      dailyPromptId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pixelArt"]>
    composites: {}
  }

  type PixelArtGetPayload<S extends boolean | null | undefined | PixelArtDefaultArgs> = $Result.GetResult<Prisma.$PixelArtPayload, S>

  type PixelArtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PixelArtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PixelArtCountAggregateInputType | true
    }

  export interface PixelArtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PixelArt'], meta: { name: 'PixelArt' } }
    /**
     * Find zero or one PixelArt that matches the filter.
     * @param {PixelArtFindUniqueArgs} args - Arguments to find a PixelArt
     * @example
     * // Get one PixelArt
     * const pixelArt = await prisma.pixelArt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PixelArtFindUniqueArgs>(args: SelectSubset<T, PixelArtFindUniqueArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PixelArt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PixelArtFindUniqueOrThrowArgs} args - Arguments to find a PixelArt
     * @example
     * // Get one PixelArt
     * const pixelArt = await prisma.pixelArt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PixelArtFindUniqueOrThrowArgs>(args: SelectSubset<T, PixelArtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PixelArt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtFindFirstArgs} args - Arguments to find a PixelArt
     * @example
     * // Get one PixelArt
     * const pixelArt = await prisma.pixelArt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PixelArtFindFirstArgs>(args?: SelectSubset<T, PixelArtFindFirstArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PixelArt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtFindFirstOrThrowArgs} args - Arguments to find a PixelArt
     * @example
     * // Get one PixelArt
     * const pixelArt = await prisma.pixelArt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PixelArtFindFirstOrThrowArgs>(args?: SelectSubset<T, PixelArtFindFirstOrThrowArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PixelArts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PixelArts
     * const pixelArts = await prisma.pixelArt.findMany()
     * 
     * // Get first 10 PixelArts
     * const pixelArts = await prisma.pixelArt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pixelArtWithIdOnly = await prisma.pixelArt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PixelArtFindManyArgs>(args?: SelectSubset<T, PixelArtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PixelArt.
     * @param {PixelArtCreateArgs} args - Arguments to create a PixelArt.
     * @example
     * // Create one PixelArt
     * const PixelArt = await prisma.pixelArt.create({
     *   data: {
     *     // ... data to create a PixelArt
     *   }
     * })
     * 
     */
    create<T extends PixelArtCreateArgs>(args: SelectSubset<T, PixelArtCreateArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PixelArts.
     * @param {PixelArtCreateManyArgs} args - Arguments to create many PixelArts.
     * @example
     * // Create many PixelArts
     * const pixelArt = await prisma.pixelArt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PixelArtCreateManyArgs>(args?: SelectSubset<T, PixelArtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PixelArt.
     * @param {PixelArtDeleteArgs} args - Arguments to delete one PixelArt.
     * @example
     * // Delete one PixelArt
     * const PixelArt = await prisma.pixelArt.delete({
     *   where: {
     *     // ... filter to delete one PixelArt
     *   }
     * })
     * 
     */
    delete<T extends PixelArtDeleteArgs>(args: SelectSubset<T, PixelArtDeleteArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PixelArt.
     * @param {PixelArtUpdateArgs} args - Arguments to update one PixelArt.
     * @example
     * // Update one PixelArt
     * const pixelArt = await prisma.pixelArt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PixelArtUpdateArgs>(args: SelectSubset<T, PixelArtUpdateArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PixelArts.
     * @param {PixelArtDeleteManyArgs} args - Arguments to filter PixelArts to delete.
     * @example
     * // Delete a few PixelArts
     * const { count } = await prisma.pixelArt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PixelArtDeleteManyArgs>(args?: SelectSubset<T, PixelArtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PixelArts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PixelArts
     * const pixelArt = await prisma.pixelArt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PixelArtUpdateManyArgs>(args: SelectSubset<T, PixelArtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PixelArt.
     * @param {PixelArtUpsertArgs} args - Arguments to update or create a PixelArt.
     * @example
     * // Update or create a PixelArt
     * const pixelArt = await prisma.pixelArt.upsert({
     *   create: {
     *     // ... data to create a PixelArt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PixelArt we want to update
     *   }
     * })
     */
    upsert<T extends PixelArtUpsertArgs>(args: SelectSubset<T, PixelArtUpsertArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PixelArts that matches the filter.
     * @param {PixelArtFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const pixelArt = await prisma.pixelArt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PixelArtFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PixelArt.
     * @param {PixelArtAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const pixelArt = await prisma.pixelArt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PixelArtAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PixelArts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtCountArgs} args - Arguments to filter PixelArts to count.
     * @example
     * // Count the number of PixelArts
     * const count = await prisma.pixelArt.count({
     *   where: {
     *     // ... the filter for the PixelArts we want to count
     *   }
     * })
    **/
    count<T extends PixelArtCountArgs>(
      args?: Subset<T, PixelArtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PixelArtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PixelArt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PixelArtAggregateArgs>(args: Subset<T, PixelArtAggregateArgs>): Prisma.PrismaPromise<GetPixelArtAggregateType<T>>

    /**
     * Group by PixelArt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PixelArtGroupByArgs} args - Group by arguments.
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
      T extends PixelArtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PixelArtGroupByArgs['orderBy'] }
        : { orderBy?: PixelArtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PixelArtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPixelArtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PixelArt model
   */
  readonly fields: PixelArtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PixelArt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PixelArtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dailyPrompt<T extends PixelArt$dailyPromptArgs<ExtArgs> = {}>(args?: Subset<T, PixelArt$dailyPromptArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    likes<T extends PixelArt$likesArgs<ExtArgs> = {}>(args?: Subset<T, PixelArt$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends PixelArt$commentsArgs<ExtArgs> = {}>(args?: Subset<T, PixelArt$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PixelArt model
   */
  interface PixelArtFieldRefs {
    readonly id: FieldRef<"PixelArt", 'String'>
    readonly data: FieldRef<"PixelArt", 'String'>
    readonly gridSize: FieldRef<"PixelArt", 'Int'>
    readonly imageUrl: FieldRef<"PixelArt", 'String'>
    readonly title: FieldRef<"PixelArt", 'String'>
    readonly editable: FieldRef<"PixelArt", 'Boolean'>
    readonly addToTodaysPixelArts: FieldRef<"PixelArt", 'Boolean'>
    readonly likesCount: FieldRef<"PixelArt", 'Int'>
    readonly profileId: FieldRef<"PixelArt", 'String'>
    readonly dailyPromptId: FieldRef<"PixelArt", 'String'>
    readonly createdAt: FieldRef<"PixelArt", 'DateTime'>
    readonly updatedAt: FieldRef<"PixelArt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PixelArt findUnique
   */
  export type PixelArtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * Filter, which PixelArt to fetch.
     */
    where: PixelArtWhereUniqueInput
  }

  /**
   * PixelArt findUniqueOrThrow
   */
  export type PixelArtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * Filter, which PixelArt to fetch.
     */
    where: PixelArtWhereUniqueInput
  }

  /**
   * PixelArt findFirst
   */
  export type PixelArtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * Filter, which PixelArt to fetch.
     */
    where?: PixelArtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PixelArts to fetch.
     */
    orderBy?: PixelArtOrderByWithRelationInput | PixelArtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PixelArts.
     */
    cursor?: PixelArtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PixelArts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PixelArts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PixelArts.
     */
    distinct?: PixelArtScalarFieldEnum | PixelArtScalarFieldEnum[]
  }

  /**
   * PixelArt findFirstOrThrow
   */
  export type PixelArtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * Filter, which PixelArt to fetch.
     */
    where?: PixelArtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PixelArts to fetch.
     */
    orderBy?: PixelArtOrderByWithRelationInput | PixelArtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PixelArts.
     */
    cursor?: PixelArtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PixelArts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PixelArts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PixelArts.
     */
    distinct?: PixelArtScalarFieldEnum | PixelArtScalarFieldEnum[]
  }

  /**
   * PixelArt findMany
   */
  export type PixelArtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * Filter, which PixelArts to fetch.
     */
    where?: PixelArtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PixelArts to fetch.
     */
    orderBy?: PixelArtOrderByWithRelationInput | PixelArtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PixelArts.
     */
    cursor?: PixelArtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PixelArts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PixelArts.
     */
    skip?: number
    distinct?: PixelArtScalarFieldEnum | PixelArtScalarFieldEnum[]
  }

  /**
   * PixelArt create
   */
  export type PixelArtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * The data needed to create a PixelArt.
     */
    data: XOR<PixelArtCreateInput, PixelArtUncheckedCreateInput>
  }

  /**
   * PixelArt createMany
   */
  export type PixelArtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PixelArts.
     */
    data: PixelArtCreateManyInput | PixelArtCreateManyInput[]
  }

  /**
   * PixelArt update
   */
  export type PixelArtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * The data needed to update a PixelArt.
     */
    data: XOR<PixelArtUpdateInput, PixelArtUncheckedUpdateInput>
    /**
     * Choose, which PixelArt to update.
     */
    where: PixelArtWhereUniqueInput
  }

  /**
   * PixelArt updateMany
   */
  export type PixelArtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PixelArts.
     */
    data: XOR<PixelArtUpdateManyMutationInput, PixelArtUncheckedUpdateManyInput>
    /**
     * Filter which PixelArts to update
     */
    where?: PixelArtWhereInput
    /**
     * Limit how many PixelArts to update.
     */
    limit?: number
  }

  /**
   * PixelArt upsert
   */
  export type PixelArtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * The filter to search for the PixelArt to update in case it exists.
     */
    where: PixelArtWhereUniqueInput
    /**
     * In case the PixelArt found by the `where` argument doesn't exist, create a new PixelArt with this data.
     */
    create: XOR<PixelArtCreateInput, PixelArtUncheckedCreateInput>
    /**
     * In case the PixelArt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PixelArtUpdateInput, PixelArtUncheckedUpdateInput>
  }

  /**
   * PixelArt delete
   */
  export type PixelArtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    /**
     * Filter which PixelArt to delete.
     */
    where: PixelArtWhereUniqueInput
  }

  /**
   * PixelArt deleteMany
   */
  export type PixelArtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PixelArts to delete
     */
    where?: PixelArtWhereInput
    /**
     * Limit how many PixelArts to delete.
     */
    limit?: number
  }

  /**
   * PixelArt findRaw
   */
  export type PixelArtFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PixelArt aggregateRaw
   */
  export type PixelArtAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PixelArt.dailyPrompt
   */
  export type PixelArt$dailyPromptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    where?: DailyPromptWhereInput
  }

  /**
   * PixelArt.likes
   */
  export type PixelArt$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * PixelArt.comments
   */
  export type PixelArt$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * PixelArt without action
   */
  export type PixelArtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
  }


  /**
   * Model DailyPrompt
   */

  export type AggregateDailyPrompt = {
    _count: DailyPromptCountAggregateOutputType | null
    _min: DailyPromptMinAggregateOutputType | null
    _max: DailyPromptMaxAggregateOutputType | null
  }

  export type DailyPromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    promptDescription: string | null
    promptDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyPromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    promptDescription: string | null
    promptDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyPromptCountAggregateOutputType = {
    id: number
    prompt: number
    promptDescription: number
    promptDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyPromptMinAggregateInputType = {
    id?: true
    prompt?: true
    promptDescription?: true
    promptDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyPromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    promptDescription?: true
    promptDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyPromptCountAggregateInputType = {
    id?: true
    prompt?: true
    promptDescription?: true
    promptDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPrompt to aggregate.
     */
    where?: DailyPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrompts to fetch.
     */
    orderBy?: DailyPromptOrderByWithRelationInput | DailyPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyPrompts
    **/
    _count?: true | DailyPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyPromptMaxAggregateInputType
  }

  export type GetDailyPromptAggregateType<T extends DailyPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyPrompt[P]>
      : GetScalarType<T[P], AggregateDailyPrompt[P]>
  }




  export type DailyPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPromptWhereInput
    orderBy?: DailyPromptOrderByWithAggregationInput | DailyPromptOrderByWithAggregationInput[]
    by: DailyPromptScalarFieldEnum[] | DailyPromptScalarFieldEnum
    having?: DailyPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyPromptCountAggregateInputType | true
    _min?: DailyPromptMinAggregateInputType
    _max?: DailyPromptMaxAggregateInputType
  }

  export type DailyPromptGroupByOutputType = {
    id: string
    prompt: string
    promptDescription: string
    promptDate: Date
    createdAt: Date
    updatedAt: Date
    _count: DailyPromptCountAggregateOutputType | null
    _min: DailyPromptMinAggregateOutputType | null
    _max: DailyPromptMaxAggregateOutputType | null
  }

  type GetDailyPromptGroupByPayload<T extends DailyPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyPromptGroupByOutputType[P]>
            : GetScalarType<T[P], DailyPromptGroupByOutputType[P]>
        }
      >
    >


  export type DailyPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    promptDescription?: boolean
    promptDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pixelArts?: boolean | DailyPrompt$pixelArtsArgs<ExtArgs>
    _count?: boolean | DailyPromptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPrompt"]>



  export type DailyPromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    promptDescription?: boolean
    promptDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "promptDescription" | "promptDate" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyPrompt"]>
  export type DailyPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pixelArts?: boolean | DailyPrompt$pixelArtsArgs<ExtArgs>
    _count?: boolean | DailyPromptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DailyPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyPrompt"
    objects: {
      pixelArts: Prisma.$PixelArtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      promptDescription: string
      promptDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyPrompt"]>
    composites: {}
  }

  type DailyPromptGetPayload<S extends boolean | null | undefined | DailyPromptDefaultArgs> = $Result.GetResult<Prisma.$DailyPromptPayload, S>

  type DailyPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyPromptCountAggregateInputType | true
    }

  export interface DailyPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyPrompt'], meta: { name: 'DailyPrompt' } }
    /**
     * Find zero or one DailyPrompt that matches the filter.
     * @param {DailyPromptFindUniqueArgs} args - Arguments to find a DailyPrompt
     * @example
     * // Get one DailyPrompt
     * const dailyPrompt = await prisma.dailyPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyPromptFindUniqueArgs>(args: SelectSubset<T, DailyPromptFindUniqueArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyPromptFindUniqueOrThrowArgs} args - Arguments to find a DailyPrompt
     * @example
     * // Get one DailyPrompt
     * const dailyPrompt = await prisma.dailyPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptFindFirstArgs} args - Arguments to find a DailyPrompt
     * @example
     * // Get one DailyPrompt
     * const dailyPrompt = await prisma.dailyPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyPromptFindFirstArgs>(args?: SelectSubset<T, DailyPromptFindFirstArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptFindFirstOrThrowArgs} args - Arguments to find a DailyPrompt
     * @example
     * // Get one DailyPrompt
     * const dailyPrompt = await prisma.dailyPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyPrompts
     * const dailyPrompts = await prisma.dailyPrompt.findMany()
     * 
     * // Get first 10 DailyPrompts
     * const dailyPrompts = await prisma.dailyPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyPromptWithIdOnly = await prisma.dailyPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyPromptFindManyArgs>(args?: SelectSubset<T, DailyPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyPrompt.
     * @param {DailyPromptCreateArgs} args - Arguments to create a DailyPrompt.
     * @example
     * // Create one DailyPrompt
     * const DailyPrompt = await prisma.dailyPrompt.create({
     *   data: {
     *     // ... data to create a DailyPrompt
     *   }
     * })
     * 
     */
    create<T extends DailyPromptCreateArgs>(args: SelectSubset<T, DailyPromptCreateArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyPrompts.
     * @param {DailyPromptCreateManyArgs} args - Arguments to create many DailyPrompts.
     * @example
     * // Create many DailyPrompts
     * const dailyPrompt = await prisma.dailyPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyPromptCreateManyArgs>(args?: SelectSubset<T, DailyPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyPrompt.
     * @param {DailyPromptDeleteArgs} args - Arguments to delete one DailyPrompt.
     * @example
     * // Delete one DailyPrompt
     * const DailyPrompt = await prisma.dailyPrompt.delete({
     *   where: {
     *     // ... filter to delete one DailyPrompt
     *   }
     * })
     * 
     */
    delete<T extends DailyPromptDeleteArgs>(args: SelectSubset<T, DailyPromptDeleteArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyPrompt.
     * @param {DailyPromptUpdateArgs} args - Arguments to update one DailyPrompt.
     * @example
     * // Update one DailyPrompt
     * const dailyPrompt = await prisma.dailyPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyPromptUpdateArgs>(args: SelectSubset<T, DailyPromptUpdateArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyPrompts.
     * @param {DailyPromptDeleteManyArgs} args - Arguments to filter DailyPrompts to delete.
     * @example
     * // Delete a few DailyPrompts
     * const { count } = await prisma.dailyPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyPromptDeleteManyArgs>(args?: SelectSubset<T, DailyPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyPrompts
     * const dailyPrompt = await prisma.dailyPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyPromptUpdateManyArgs>(args: SelectSubset<T, DailyPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyPrompt.
     * @param {DailyPromptUpsertArgs} args - Arguments to update or create a DailyPrompt.
     * @example
     * // Update or create a DailyPrompt
     * const dailyPrompt = await prisma.dailyPrompt.upsert({
     *   create: {
     *     // ... data to create a DailyPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyPrompt we want to update
     *   }
     * })
     */
    upsert<T extends DailyPromptUpsertArgs>(args: SelectSubset<T, DailyPromptUpsertArgs<ExtArgs>>): Prisma__DailyPromptClient<$Result.GetResult<Prisma.$DailyPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyPrompts that matches the filter.
     * @param {DailyPromptFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dailyPrompt = await prisma.dailyPrompt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DailyPromptFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DailyPrompt.
     * @param {DailyPromptAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dailyPrompt = await prisma.dailyPrompt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DailyPromptAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DailyPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptCountArgs} args - Arguments to filter DailyPrompts to count.
     * @example
     * // Count the number of DailyPrompts
     * const count = await prisma.dailyPrompt.count({
     *   where: {
     *     // ... the filter for the DailyPrompts we want to count
     *   }
     * })
    **/
    count<T extends DailyPromptCountArgs>(
      args?: Subset<T, DailyPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyPromptAggregateArgs>(args: Subset<T, DailyPromptAggregateArgs>): Prisma.PrismaPromise<GetDailyPromptAggregateType<T>>

    /**
     * Group by DailyPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPromptGroupByArgs} args - Group by arguments.
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
      T extends DailyPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyPromptGroupByArgs['orderBy'] }
        : { orderBy?: DailyPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyPrompt model
   */
  readonly fields: DailyPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pixelArts<T extends DailyPrompt$pixelArtsArgs<ExtArgs> = {}>(args?: Subset<T, DailyPrompt$pixelArtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DailyPrompt model
   */
  interface DailyPromptFieldRefs {
    readonly id: FieldRef<"DailyPrompt", 'String'>
    readonly prompt: FieldRef<"DailyPrompt", 'String'>
    readonly promptDescription: FieldRef<"DailyPrompt", 'String'>
    readonly promptDate: FieldRef<"DailyPrompt", 'DateTime'>
    readonly createdAt: FieldRef<"DailyPrompt", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyPrompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyPrompt findUnique
   */
  export type DailyPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrompt to fetch.
     */
    where: DailyPromptWhereUniqueInput
  }

  /**
   * DailyPrompt findUniqueOrThrow
   */
  export type DailyPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrompt to fetch.
     */
    where: DailyPromptWhereUniqueInput
  }

  /**
   * DailyPrompt findFirst
   */
  export type DailyPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrompt to fetch.
     */
    where?: DailyPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrompts to fetch.
     */
    orderBy?: DailyPromptOrderByWithRelationInput | DailyPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPrompts.
     */
    cursor?: DailyPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPrompts.
     */
    distinct?: DailyPromptScalarFieldEnum | DailyPromptScalarFieldEnum[]
  }

  /**
   * DailyPrompt findFirstOrThrow
   */
  export type DailyPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrompt to fetch.
     */
    where?: DailyPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrompts to fetch.
     */
    orderBy?: DailyPromptOrderByWithRelationInput | DailyPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPrompts.
     */
    cursor?: DailyPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPrompts.
     */
    distinct?: DailyPromptScalarFieldEnum | DailyPromptScalarFieldEnum[]
  }

  /**
   * DailyPrompt findMany
   */
  export type DailyPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * Filter, which DailyPrompts to fetch.
     */
    where?: DailyPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrompts to fetch.
     */
    orderBy?: DailyPromptOrderByWithRelationInput | DailyPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyPrompts.
     */
    cursor?: DailyPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrompts.
     */
    skip?: number
    distinct?: DailyPromptScalarFieldEnum | DailyPromptScalarFieldEnum[]
  }

  /**
   * DailyPrompt create
   */
  export type DailyPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyPrompt.
     */
    data: XOR<DailyPromptCreateInput, DailyPromptUncheckedCreateInput>
  }

  /**
   * DailyPrompt createMany
   */
  export type DailyPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyPrompts.
     */
    data: DailyPromptCreateManyInput | DailyPromptCreateManyInput[]
  }

  /**
   * DailyPrompt update
   */
  export type DailyPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyPrompt.
     */
    data: XOR<DailyPromptUpdateInput, DailyPromptUncheckedUpdateInput>
    /**
     * Choose, which DailyPrompt to update.
     */
    where: DailyPromptWhereUniqueInput
  }

  /**
   * DailyPrompt updateMany
   */
  export type DailyPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyPrompts.
     */
    data: XOR<DailyPromptUpdateManyMutationInput, DailyPromptUncheckedUpdateManyInput>
    /**
     * Filter which DailyPrompts to update
     */
    where?: DailyPromptWhereInput
    /**
     * Limit how many DailyPrompts to update.
     */
    limit?: number
  }

  /**
   * DailyPrompt upsert
   */
  export type DailyPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyPrompt to update in case it exists.
     */
    where: DailyPromptWhereUniqueInput
    /**
     * In case the DailyPrompt found by the `where` argument doesn't exist, create a new DailyPrompt with this data.
     */
    create: XOR<DailyPromptCreateInput, DailyPromptUncheckedCreateInput>
    /**
     * In case the DailyPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyPromptUpdateInput, DailyPromptUncheckedUpdateInput>
  }

  /**
   * DailyPrompt delete
   */
  export type DailyPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
    /**
     * Filter which DailyPrompt to delete.
     */
    where: DailyPromptWhereUniqueInput
  }

  /**
   * DailyPrompt deleteMany
   */
  export type DailyPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPrompts to delete
     */
    where?: DailyPromptWhereInput
    /**
     * Limit how many DailyPrompts to delete.
     */
    limit?: number
  }

  /**
   * DailyPrompt findRaw
   */
  export type DailyPromptFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyPrompt aggregateRaw
   */
  export type DailyPromptAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyPrompt.pixelArts
   */
  export type DailyPrompt$pixelArtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PixelArt
     */
    select?: PixelArtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PixelArt
     */
    omit?: PixelArtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PixelArtInclude<ExtArgs> | null
    where?: PixelArtWhereInput
    orderBy?: PixelArtOrderByWithRelationInput | PixelArtOrderByWithRelationInput[]
    cursor?: PixelArtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PixelArtScalarFieldEnum | PixelArtScalarFieldEnum[]
  }

  /**
   * DailyPrompt without action
   */
  export type DailyPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrompt
     */
    select?: DailyPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPrompt
     */
    omit?: DailyPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPromptInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    pixelArtId: string | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    pixelArtId: string | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    profileId: number
    pixelArtId: number
    createdAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    profileId?: true
    pixelArtId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    profileId?: true
    pixelArtId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    profileId?: true
    pixelArtId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    profileId: string
    pixelArtId: string
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    pixelArtId?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    pixelArt?: boolean | PixelArtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>



  export type LikeSelectScalar = {
    id?: boolean
    profileId?: boolean
    pixelArtId?: boolean
    createdAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "pixelArtId" | "createdAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    pixelArt?: boolean | PixelArtDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      pixelArt: Prisma.$PixelArtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      pixelArtId: string
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * @param {LikeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const like = await prisma.like.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LikeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Like.
     * @param {LikeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const like = await prisma.like.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LikeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pixelArt<T extends PixelArtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PixelArtDefaultArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly profileId: FieldRef<"Like", 'String'>
    readonly pixelArtId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like findRaw
   */
  export type LikeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Like aggregateRaw
   */
  export type LikeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    followerId: string
    followingId: string
    createdAt: Date
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    following?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>



  export type FollowSelectScalar = {
    id?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "followerId" | "followingId" | "createdAt", ExtArgs["result"]["follow"]>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | ProfileDefaultArgs<ExtArgs>
    following?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$ProfilePayload<ExtArgs>
      following: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      followerId: string
      followingId: string
      createdAt: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * @param {FollowFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const follow = await prisma.follow.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FollowFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Follow.
     * @param {FollowAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const follow = await prisma.follow.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FollowAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly followerId: FieldRef<"Follow", 'String'>
    readonly followingId: FieldRef<"Follow", 'String'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow findRaw
   */
  export type FollowFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Follow aggregateRaw
   */
  export type FollowAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    profileId: string | null
    pixelArtId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    profileId: string | null
    pixelArtId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    profileId: number
    pixelArtId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    profileId?: true
    pixelArtId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    profileId?: true
    pixelArtId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    profileId?: true
    pixelArtId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    profileId: string
    pixelArtId: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    profileId?: boolean
    pixelArtId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    pixelArt?: boolean | PixelArtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    profileId?: boolean
    pixelArtId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "profileId" | "pixelArtId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    pixelArt?: boolean | PixelArtDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      pixelArt: Prisma.$PixelArtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      profileId: string
      pixelArtId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comment = await prisma.comment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comment.
     * @param {CommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comment = await prisma.comment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pixelArt<T extends PixelArtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PixelArtDefaultArgs<ExtArgs>>): Prisma__PixelArtClient<$Result.GetResult<Prisma.$PixelArtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly profileId: FieldRef<"Comment", 'String'>
    readonly pixelArtId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment findRaw
   */
  export type CommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment aggregateRaw
   */
  export type CommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Streak
   */

  export type AggregateStreak = {
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  export type StreakAvgAggregateOutputType = {
    count: number | null
  }

  export type StreakSumAggregateOutputType = {
    count: number | null
  }

  export type StreakMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    startDate: Date | null
    endDate: Date | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreakMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    startDate: Date | null
    endDate: Date | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreakCountAggregateOutputType = {
    id: number
    profileId: number
    startDate: number
    endDate: number
    count: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreakAvgAggregateInputType = {
    count?: true
  }

  export type StreakSumAggregateInputType = {
    count?: true
  }

  export type StreakMinAggregateInputType = {
    id?: true
    profileId?: true
    startDate?: true
    endDate?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreakMaxAggregateInputType = {
    id?: true
    profileId?: true
    startDate?: true
    endDate?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreakCountAggregateInputType = {
    id?: true
    profileId?: true
    startDate?: true
    endDate?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streak to aggregate.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streaks
    **/
    _count?: true | StreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreakMaxAggregateInputType
  }

  export type GetStreakAggregateType<T extends StreakAggregateArgs> = {
        [P in keyof T & keyof AggregateStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreak[P]>
      : GetScalarType<T[P], AggregateStreak[P]>
  }




  export type StreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithAggregationInput | StreakOrderByWithAggregationInput[]
    by: StreakScalarFieldEnum[] | StreakScalarFieldEnum
    having?: StreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreakCountAggregateInputType | true
    _avg?: StreakAvgAggregateInputType
    _sum?: StreakSumAggregateInputType
    _min?: StreakMinAggregateInputType
    _max?: StreakMaxAggregateInputType
  }

  export type StreakGroupByOutputType = {
    id: string
    profileId: string
    startDate: Date
    endDate: Date | null
    count: number
    createdAt: Date
    updatedAt: Date
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  type GetStreakGroupByPayload<T extends StreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreakGroupByOutputType[P]>
            : GetScalarType<T[P], StreakGroupByOutputType[P]>
        }
      >
    >


  export type StreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    startDate?: boolean
    endDate?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>



  export type StreakSelectScalar = {
    id?: boolean
    profileId?: boolean
    startDate?: boolean
    endDate?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "startDate" | "endDate" | "count" | "createdAt" | "updatedAt", ExtArgs["result"]["streak"]>
  export type StreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $StreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streak"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      startDate: Date
      endDate: Date | null
      count: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streak"]>
    composites: {}
  }

  type StreakGetPayload<S extends boolean | null | undefined | StreakDefaultArgs> = $Result.GetResult<Prisma.$StreakPayload, S>

  type StreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreakCountAggregateInputType | true
    }

  export interface StreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streak'], meta: { name: 'Streak' } }
    /**
     * Find zero or one Streak that matches the filter.
     * @param {StreakFindUniqueArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreakFindUniqueArgs>(args: SelectSubset<T, StreakFindUniqueArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreakFindUniqueOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreakFindUniqueOrThrowArgs>(args: SelectSubset<T, StreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreakFindFirstArgs>(args?: SelectSubset<T, StreakFindFirstArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreakFindFirstOrThrowArgs>(args?: SelectSubset<T, StreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streaks
     * const streaks = await prisma.streak.findMany()
     * 
     * // Get first 10 Streaks
     * const streaks = await prisma.streak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streakWithIdOnly = await prisma.streak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreakFindManyArgs>(args?: SelectSubset<T, StreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streak.
     * @param {StreakCreateArgs} args - Arguments to create a Streak.
     * @example
     * // Create one Streak
     * const Streak = await prisma.streak.create({
     *   data: {
     *     // ... data to create a Streak
     *   }
     * })
     * 
     */
    create<T extends StreakCreateArgs>(args: SelectSubset<T, StreakCreateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streaks.
     * @param {StreakCreateManyArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreakCreateManyArgs>(args?: SelectSubset<T, StreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Streak.
     * @param {StreakDeleteArgs} args - Arguments to delete one Streak.
     * @example
     * // Delete one Streak
     * const Streak = await prisma.streak.delete({
     *   where: {
     *     // ... filter to delete one Streak
     *   }
     * })
     * 
     */
    delete<T extends StreakDeleteArgs>(args: SelectSubset<T, StreakDeleteArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streak.
     * @param {StreakUpdateArgs} args - Arguments to update one Streak.
     * @example
     * // Update one Streak
     * const streak = await prisma.streak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreakUpdateArgs>(args: SelectSubset<T, StreakUpdateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streaks.
     * @param {StreakDeleteManyArgs} args - Arguments to filter Streaks to delete.
     * @example
     * // Delete a few Streaks
     * const { count } = await prisma.streak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreakDeleteManyArgs>(args?: SelectSubset<T, StreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreakUpdateManyArgs>(args: SelectSubset<T, StreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Streak.
     * @param {StreakUpsertArgs} args - Arguments to update or create a Streak.
     * @example
     * // Update or create a Streak
     * const streak = await prisma.streak.upsert({
     *   create: {
     *     // ... data to create a Streak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streak we want to update
     *   }
     * })
     */
    upsert<T extends StreakUpsertArgs>(args: SelectSubset<T, StreakUpsertArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streaks that matches the filter.
     * @param {StreakFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const streak = await prisma.streak.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StreakFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Streak.
     * @param {StreakAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const streak = await prisma.streak.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StreakAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakCountArgs} args - Arguments to filter Streaks to count.
     * @example
     * // Count the number of Streaks
     * const count = await prisma.streak.count({
     *   where: {
     *     // ... the filter for the Streaks we want to count
     *   }
     * })
    **/
    count<T extends StreakCountArgs>(
      args?: Subset<T, StreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreakAggregateArgs>(args: Subset<T, StreakAggregateArgs>): Prisma.PrismaPromise<GetStreakAggregateType<T>>

    /**
     * Group by Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakGroupByArgs} args - Group by arguments.
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
      T extends StreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreakGroupByArgs['orderBy'] }
        : { orderBy?: StreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streak model
   */
  readonly fields: StreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Streak model
   */
  interface StreakFieldRefs {
    readonly id: FieldRef<"Streak", 'String'>
    readonly profileId: FieldRef<"Streak", 'String'>
    readonly startDate: FieldRef<"Streak", 'DateTime'>
    readonly endDate: FieldRef<"Streak", 'DateTime'>
    readonly count: FieldRef<"Streak", 'Int'>
    readonly createdAt: FieldRef<"Streak", 'DateTime'>
    readonly updatedAt: FieldRef<"Streak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Streak findUnique
   */
  export type StreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findUniqueOrThrow
   */
  export type StreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findFirst
   */
  export type StreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findFirstOrThrow
   */
  export type StreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findMany
   */
  export type StreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streaks to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak create
   */
  export type StreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to create a Streak.
     */
    data: XOR<StreakCreateInput, StreakUncheckedCreateInput>
  }

  /**
   * Streak createMany
   */
  export type StreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
  }

  /**
   * Streak update
   */
  export type StreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to update a Streak.
     */
    data: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
    /**
     * Choose, which Streak to update.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak updateMany
   */
  export type StreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
  }

  /**
   * Streak upsert
   */
  export type StreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The filter to search for the Streak to update in case it exists.
     */
    where: StreakWhereUniqueInput
    /**
     * In case the Streak found by the `where` argument doesn't exist, create a new Streak with this data.
     */
    create: XOR<StreakCreateInput, StreakUncheckedCreateInput>
    /**
     * In case the Streak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
  }

  /**
   * Streak delete
   */
  export type StreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter which Streak to delete.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak deleteMany
   */
  export type StreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streaks to delete
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to delete.
     */
    limit?: number
  }

  /**
   * Streak findRaw
   */
  export type StreakFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Streak aggregateRaw
   */
  export type StreakAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Streak without action
   */
  export type StreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    requirement: number | null
  }

  export type BadgeSumAggregateOutputType = {
    requirement: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    requirement: number | null
    type: string | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    requirement: number | null
    type: string | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    requirement: number
    type: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    requirement?: true
  }

  export type BadgeSumAggregateInputType = {
    requirement?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    requirement?: true
    type?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    requirement?: true
    type?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    requirement?: true
    type?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    requirement: number
    type: string
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    requirement?: boolean
    type?: boolean
    profiles?: boolean | Badge$profilesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>



  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    requirement?: boolean
    type?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "requirement" | "type", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | Badge$profilesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      profiles: Prisma.$BadgeOnProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      requirement: number
      type: string
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * @param {BadgeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const badge = await prisma.badge.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BadgeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Badge.
     * @param {BadgeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const badge = await prisma.badge.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BadgeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends Badge$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Badge$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly icon: FieldRef<"Badge", 'String'>
    readonly requirement: FieldRef<"Badge", 'Int'>
    readonly type: FieldRef<"Badge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge findRaw
   */
  export type BadgeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Badge aggregateRaw
   */
  export type BadgeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Badge.profiles
   */
  export type Badge$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    where?: BadgeOnProfileWhereInput
    orderBy?: BadgeOnProfileOrderByWithRelationInput | BadgeOnProfileOrderByWithRelationInput[]
    cursor?: BadgeOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeOnProfileScalarFieldEnum | BadgeOnProfileScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model BadgeOnProfile
   */

  export type AggregateBadgeOnProfile = {
    _count: BadgeOnProfileCountAggregateOutputType | null
    _min: BadgeOnProfileMinAggregateOutputType | null
    _max: BadgeOnProfileMaxAggregateOutputType | null
  }

  export type BadgeOnProfileMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    badgeId: string | null
    awardedAt: Date | null
  }

  export type BadgeOnProfileMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    badgeId: string | null
    awardedAt: Date | null
  }

  export type BadgeOnProfileCountAggregateOutputType = {
    id: number
    profileId: number
    badgeId: number
    awardedAt: number
    _all: number
  }


  export type BadgeOnProfileMinAggregateInputType = {
    id?: true
    profileId?: true
    badgeId?: true
    awardedAt?: true
  }

  export type BadgeOnProfileMaxAggregateInputType = {
    id?: true
    profileId?: true
    badgeId?: true
    awardedAt?: true
  }

  export type BadgeOnProfileCountAggregateInputType = {
    id?: true
    profileId?: true
    badgeId?: true
    awardedAt?: true
    _all?: true
  }

  export type BadgeOnProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgeOnProfile to aggregate.
     */
    where?: BadgeOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeOnProfiles to fetch.
     */
    orderBy?: BadgeOnProfileOrderByWithRelationInput | BadgeOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BadgeOnProfiles
    **/
    _count?: true | BadgeOnProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeOnProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeOnProfileMaxAggregateInputType
  }

  export type GetBadgeOnProfileAggregateType<T extends BadgeOnProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateBadgeOnProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadgeOnProfile[P]>
      : GetScalarType<T[P], AggregateBadgeOnProfile[P]>
  }




  export type BadgeOnProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeOnProfileWhereInput
    orderBy?: BadgeOnProfileOrderByWithAggregationInput | BadgeOnProfileOrderByWithAggregationInput[]
    by: BadgeOnProfileScalarFieldEnum[] | BadgeOnProfileScalarFieldEnum
    having?: BadgeOnProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeOnProfileCountAggregateInputType | true
    _min?: BadgeOnProfileMinAggregateInputType
    _max?: BadgeOnProfileMaxAggregateInputType
  }

  export type BadgeOnProfileGroupByOutputType = {
    id: string
    profileId: string
    badgeId: string
    awardedAt: Date
    _count: BadgeOnProfileCountAggregateOutputType | null
    _min: BadgeOnProfileMinAggregateOutputType | null
    _max: BadgeOnProfileMaxAggregateOutputType | null
  }

  type GetBadgeOnProfileGroupByPayload<T extends BadgeOnProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeOnProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeOnProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeOnProfileGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeOnProfileGroupByOutputType[P]>
        }
      >
    >


  export type BadgeOnProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    badgeId?: boolean
    awardedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badgeOnProfile"]>



  export type BadgeOnProfileSelectScalar = {
    id?: boolean
    profileId?: boolean
    badgeId?: boolean
    awardedAt?: boolean
  }

  export type BadgeOnProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "badgeId" | "awardedAt", ExtArgs["result"]["badgeOnProfile"]>
  export type BadgeOnProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $BadgeOnProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BadgeOnProfile"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      badgeId: string
      awardedAt: Date
    }, ExtArgs["result"]["badgeOnProfile"]>
    composites: {}
  }

  type BadgeOnProfileGetPayload<S extends boolean | null | undefined | BadgeOnProfileDefaultArgs> = $Result.GetResult<Prisma.$BadgeOnProfilePayload, S>

  type BadgeOnProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeOnProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeOnProfileCountAggregateInputType | true
    }

  export interface BadgeOnProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BadgeOnProfile'], meta: { name: 'BadgeOnProfile' } }
    /**
     * Find zero or one BadgeOnProfile that matches the filter.
     * @param {BadgeOnProfileFindUniqueArgs} args - Arguments to find a BadgeOnProfile
     * @example
     * // Get one BadgeOnProfile
     * const badgeOnProfile = await prisma.badgeOnProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeOnProfileFindUniqueArgs>(args: SelectSubset<T, BadgeOnProfileFindUniqueArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BadgeOnProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeOnProfileFindUniqueOrThrowArgs} args - Arguments to find a BadgeOnProfile
     * @example
     * // Get one BadgeOnProfile
     * const badgeOnProfile = await prisma.badgeOnProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeOnProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeOnProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeOnProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileFindFirstArgs} args - Arguments to find a BadgeOnProfile
     * @example
     * // Get one BadgeOnProfile
     * const badgeOnProfile = await prisma.badgeOnProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeOnProfileFindFirstArgs>(args?: SelectSubset<T, BadgeOnProfileFindFirstArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeOnProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileFindFirstOrThrowArgs} args - Arguments to find a BadgeOnProfile
     * @example
     * // Get one BadgeOnProfile
     * const badgeOnProfile = await prisma.badgeOnProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeOnProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeOnProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BadgeOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BadgeOnProfiles
     * const badgeOnProfiles = await prisma.badgeOnProfile.findMany()
     * 
     * // Get first 10 BadgeOnProfiles
     * const badgeOnProfiles = await prisma.badgeOnProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeOnProfileWithIdOnly = await prisma.badgeOnProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeOnProfileFindManyArgs>(args?: SelectSubset<T, BadgeOnProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BadgeOnProfile.
     * @param {BadgeOnProfileCreateArgs} args - Arguments to create a BadgeOnProfile.
     * @example
     * // Create one BadgeOnProfile
     * const BadgeOnProfile = await prisma.badgeOnProfile.create({
     *   data: {
     *     // ... data to create a BadgeOnProfile
     *   }
     * })
     * 
     */
    create<T extends BadgeOnProfileCreateArgs>(args: SelectSubset<T, BadgeOnProfileCreateArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BadgeOnProfiles.
     * @param {BadgeOnProfileCreateManyArgs} args - Arguments to create many BadgeOnProfiles.
     * @example
     * // Create many BadgeOnProfiles
     * const badgeOnProfile = await prisma.badgeOnProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeOnProfileCreateManyArgs>(args?: SelectSubset<T, BadgeOnProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BadgeOnProfile.
     * @param {BadgeOnProfileDeleteArgs} args - Arguments to delete one BadgeOnProfile.
     * @example
     * // Delete one BadgeOnProfile
     * const BadgeOnProfile = await prisma.badgeOnProfile.delete({
     *   where: {
     *     // ... filter to delete one BadgeOnProfile
     *   }
     * })
     * 
     */
    delete<T extends BadgeOnProfileDeleteArgs>(args: SelectSubset<T, BadgeOnProfileDeleteArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BadgeOnProfile.
     * @param {BadgeOnProfileUpdateArgs} args - Arguments to update one BadgeOnProfile.
     * @example
     * // Update one BadgeOnProfile
     * const badgeOnProfile = await prisma.badgeOnProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeOnProfileUpdateArgs>(args: SelectSubset<T, BadgeOnProfileUpdateArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BadgeOnProfiles.
     * @param {BadgeOnProfileDeleteManyArgs} args - Arguments to filter BadgeOnProfiles to delete.
     * @example
     * // Delete a few BadgeOnProfiles
     * const { count } = await prisma.badgeOnProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeOnProfileDeleteManyArgs>(args?: SelectSubset<T, BadgeOnProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BadgeOnProfiles
     * const badgeOnProfile = await prisma.badgeOnProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeOnProfileUpdateManyArgs>(args: SelectSubset<T, BadgeOnProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BadgeOnProfile.
     * @param {BadgeOnProfileUpsertArgs} args - Arguments to update or create a BadgeOnProfile.
     * @example
     * // Update or create a BadgeOnProfile
     * const badgeOnProfile = await prisma.badgeOnProfile.upsert({
     *   create: {
     *     // ... data to create a BadgeOnProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BadgeOnProfile we want to update
     *   }
     * })
     */
    upsert<T extends BadgeOnProfileUpsertArgs>(args: SelectSubset<T, BadgeOnProfileUpsertArgs<ExtArgs>>): Prisma__BadgeOnProfileClient<$Result.GetResult<Prisma.$BadgeOnProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BadgeOnProfiles that matches the filter.
     * @param {BadgeOnProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const badgeOnProfile = await prisma.badgeOnProfile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BadgeOnProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BadgeOnProfile.
     * @param {BadgeOnProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const badgeOnProfile = await prisma.badgeOnProfile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BadgeOnProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BadgeOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileCountArgs} args - Arguments to filter BadgeOnProfiles to count.
     * @example
     * // Count the number of BadgeOnProfiles
     * const count = await prisma.badgeOnProfile.count({
     *   where: {
     *     // ... the filter for the BadgeOnProfiles we want to count
     *   }
     * })
    **/
    count<T extends BadgeOnProfileCountArgs>(
      args?: Subset<T, BadgeOnProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeOnProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BadgeOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeOnProfileAggregateArgs>(args: Subset<T, BadgeOnProfileAggregateArgs>): Prisma.PrismaPromise<GetBadgeOnProfileAggregateType<T>>

    /**
     * Group by BadgeOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeOnProfileGroupByArgs} args - Group by arguments.
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
      T extends BadgeOnProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeOnProfileGroupByArgs['orderBy'] }
        : { orderBy?: BadgeOnProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeOnProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeOnProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BadgeOnProfile model
   */
  readonly fields: BadgeOnProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BadgeOnProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeOnProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BadgeOnProfile model
   */
  interface BadgeOnProfileFieldRefs {
    readonly id: FieldRef<"BadgeOnProfile", 'String'>
    readonly profileId: FieldRef<"BadgeOnProfile", 'String'>
    readonly badgeId: FieldRef<"BadgeOnProfile", 'String'>
    readonly awardedAt: FieldRef<"BadgeOnProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BadgeOnProfile findUnique
   */
  export type BadgeOnProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which BadgeOnProfile to fetch.
     */
    where: BadgeOnProfileWhereUniqueInput
  }

  /**
   * BadgeOnProfile findUniqueOrThrow
   */
  export type BadgeOnProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which BadgeOnProfile to fetch.
     */
    where: BadgeOnProfileWhereUniqueInput
  }

  /**
   * BadgeOnProfile findFirst
   */
  export type BadgeOnProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which BadgeOnProfile to fetch.
     */
    where?: BadgeOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeOnProfiles to fetch.
     */
    orderBy?: BadgeOnProfileOrderByWithRelationInput | BadgeOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgeOnProfiles.
     */
    cursor?: BadgeOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgeOnProfiles.
     */
    distinct?: BadgeOnProfileScalarFieldEnum | BadgeOnProfileScalarFieldEnum[]
  }

  /**
   * BadgeOnProfile findFirstOrThrow
   */
  export type BadgeOnProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which BadgeOnProfile to fetch.
     */
    where?: BadgeOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeOnProfiles to fetch.
     */
    orderBy?: BadgeOnProfileOrderByWithRelationInput | BadgeOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BadgeOnProfiles.
     */
    cursor?: BadgeOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BadgeOnProfiles.
     */
    distinct?: BadgeOnProfileScalarFieldEnum | BadgeOnProfileScalarFieldEnum[]
  }

  /**
   * BadgeOnProfile findMany
   */
  export type BadgeOnProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which BadgeOnProfiles to fetch.
     */
    where?: BadgeOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BadgeOnProfiles to fetch.
     */
    orderBy?: BadgeOnProfileOrderByWithRelationInput | BadgeOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BadgeOnProfiles.
     */
    cursor?: BadgeOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BadgeOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BadgeOnProfiles.
     */
    skip?: number
    distinct?: BadgeOnProfileScalarFieldEnum | BadgeOnProfileScalarFieldEnum[]
  }

  /**
   * BadgeOnProfile create
   */
  export type BadgeOnProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a BadgeOnProfile.
     */
    data: XOR<BadgeOnProfileCreateInput, BadgeOnProfileUncheckedCreateInput>
  }

  /**
   * BadgeOnProfile createMany
   */
  export type BadgeOnProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BadgeOnProfiles.
     */
    data: BadgeOnProfileCreateManyInput | BadgeOnProfileCreateManyInput[]
  }

  /**
   * BadgeOnProfile update
   */
  export type BadgeOnProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a BadgeOnProfile.
     */
    data: XOR<BadgeOnProfileUpdateInput, BadgeOnProfileUncheckedUpdateInput>
    /**
     * Choose, which BadgeOnProfile to update.
     */
    where: BadgeOnProfileWhereUniqueInput
  }

  /**
   * BadgeOnProfile updateMany
   */
  export type BadgeOnProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BadgeOnProfiles.
     */
    data: XOR<BadgeOnProfileUpdateManyMutationInput, BadgeOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which BadgeOnProfiles to update
     */
    where?: BadgeOnProfileWhereInput
    /**
     * Limit how many BadgeOnProfiles to update.
     */
    limit?: number
  }

  /**
   * BadgeOnProfile upsert
   */
  export type BadgeOnProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the BadgeOnProfile to update in case it exists.
     */
    where: BadgeOnProfileWhereUniqueInput
    /**
     * In case the BadgeOnProfile found by the `where` argument doesn't exist, create a new BadgeOnProfile with this data.
     */
    create: XOR<BadgeOnProfileCreateInput, BadgeOnProfileUncheckedCreateInput>
    /**
     * In case the BadgeOnProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeOnProfileUpdateInput, BadgeOnProfileUncheckedUpdateInput>
  }

  /**
   * BadgeOnProfile delete
   */
  export type BadgeOnProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
    /**
     * Filter which BadgeOnProfile to delete.
     */
    where: BadgeOnProfileWhereUniqueInput
  }

  /**
   * BadgeOnProfile deleteMany
   */
  export type BadgeOnProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BadgeOnProfiles to delete
     */
    where?: BadgeOnProfileWhereInput
    /**
     * Limit how many BadgeOnProfiles to delete.
     */
    limit?: number
  }

  /**
   * BadgeOnProfile findRaw
   */
  export type BadgeOnProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BadgeOnProfile aggregateRaw
   */
  export type BadgeOnProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BadgeOnProfile without action
   */
  export type BadgeOnProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeOnProfile
     */
    select?: BadgeOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BadgeOnProfile
     */
    omit?: BadgeOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeOnProfileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    name: 'name',
    username: 'username',
    avatarConfig: 'avatarConfig',
    bio: 'bio',
    socialLinks: 'socialLinks',
    pixelArtCount: 'pixelArtCount',
    likesReceivedCount: 'likesReceivedCount',
    pixelArtLikedCount: 'pixelArtLikedCount',
    commentCount: 'commentCount',
    currentStreak: 'currentStreak',
    maxStreakCount: 'maxStreakCount',
    lastActivity: 'lastActivity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PixelArtScalarFieldEnum: {
    id: 'id',
    data: 'data',
    gridSize: 'gridSize',
    imageUrl: 'imageUrl',
    title: 'title',
    editable: 'editable',
    addToTodaysPixelArts: 'addToTodaysPixelArts',
    likesCount: 'likesCount',
    profileId: 'profileId',
    dailyPromptId: 'dailyPromptId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PixelArtScalarFieldEnum = (typeof PixelArtScalarFieldEnum)[keyof typeof PixelArtScalarFieldEnum]


  export const DailyPromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    promptDescription: 'promptDescription',
    promptDate: 'promptDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyPromptScalarFieldEnum = (typeof DailyPromptScalarFieldEnum)[keyof typeof DailyPromptScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    pixelArtId: 'pixelArtId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    profileId: 'profileId',
    pixelArtId: 'pixelArtId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const StreakScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    startDate: 'startDate',
    endDate: 'endDate',
    count: 'count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    requirement: 'requirement',
    type: 'type'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const BadgeOnProfileScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    badgeId: 'badgeId',
    awardedAt: 'awardedAt'
  };

  export type BadgeOnProfileScalarFieldEnum = (typeof BadgeOnProfileScalarFieldEnum)[keyof typeof BadgeOnProfileScalarFieldEnum]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    email?: StringNullableFilter<"Profile"> | string | null
    name?: StringNullableFilter<"Profile"> | string | null
    username?: StringNullableFilter<"Profile"> | string | null
    avatarConfig?: JsonNullableFilter<"Profile">
    bio?: StringNullableFilter<"Profile"> | string | null
    socialLinks?: JsonNullableFilter<"Profile">
    pixelArtCount?: IntFilter<"Profile"> | number
    likesReceivedCount?: IntFilter<"Profile"> | number
    pixelArtLikedCount?: IntFilter<"Profile"> | number
    commentCount?: IntFilter<"Profile"> | number
    currentStreak?: IntFilter<"Profile"> | number
    maxStreakCount?: IntFilter<"Profile"> | number
    lastActivity?: DateTimeNullableFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pixelArts?: PixelArtListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    streaks?: StreakListRelationFilter
    badges?: BadgeOnProfileListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatarConfig?: SortOrder
    bio?: SortOrder
    socialLinks?: SortOrder
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    pixelArts?: PixelArtOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    followers?: FollowOrderByRelationAggregateInput
    following?: FollowOrderByRelationAggregateInput
    streaks?: StreakOrderByRelationAggregateInput
    badges?: BadgeOnProfileOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    username?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringNullableFilter<"Profile"> | string | null
    avatarConfig?: JsonNullableFilter<"Profile">
    bio?: StringNullableFilter<"Profile"> | string | null
    socialLinks?: JsonNullableFilter<"Profile">
    pixelArtCount?: IntFilter<"Profile"> | number
    likesReceivedCount?: IntFilter<"Profile"> | number
    pixelArtLikedCount?: IntFilter<"Profile"> | number
    commentCount?: IntFilter<"Profile"> | number
    currentStreak?: IntFilter<"Profile"> | number
    maxStreakCount?: IntFilter<"Profile"> | number
    lastActivity?: DateTimeNullableFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pixelArts?: PixelArtListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    streaks?: StreakListRelationFilter
    badges?: BadgeOnProfileListRelationFilter
  }, "id" | "userId" | "email" | "username">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatarConfig?: SortOrder
    bio?: SortOrder
    socialLinks?: SortOrder
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    username?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarConfig?: JsonNullableWithAggregatesFilter<"Profile">
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"Profile">
    pixelArtCount?: IntWithAggregatesFilter<"Profile"> | number
    likesReceivedCount?: IntWithAggregatesFilter<"Profile"> | number
    pixelArtLikedCount?: IntWithAggregatesFilter<"Profile"> | number
    commentCount?: IntWithAggregatesFilter<"Profile"> | number
    currentStreak?: IntWithAggregatesFilter<"Profile"> | number
    maxStreakCount?: IntWithAggregatesFilter<"Profile"> | number
    lastActivity?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type PixelArtWhereInput = {
    AND?: PixelArtWhereInput | PixelArtWhereInput[]
    OR?: PixelArtWhereInput[]
    NOT?: PixelArtWhereInput | PixelArtWhereInput[]
    id?: StringFilter<"PixelArt"> | string
    data?: StringFilter<"PixelArt"> | string
    gridSize?: IntFilter<"PixelArt"> | number
    imageUrl?: StringFilter<"PixelArt"> | string
    title?: StringFilter<"PixelArt"> | string
    editable?: BoolFilter<"PixelArt"> | boolean
    addToTodaysPixelArts?: BoolFilter<"PixelArt"> | boolean
    likesCount?: IntFilter<"PixelArt"> | number
    profileId?: StringFilter<"PixelArt"> | string
    dailyPromptId?: StringNullableFilter<"PixelArt"> | string | null
    createdAt?: DateTimeFilter<"PixelArt"> | Date | string
    updatedAt?: DateTimeFilter<"PixelArt"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    dailyPrompt?: XOR<DailyPromptNullableScalarRelationFilter, DailyPromptWhereInput> | null
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type PixelArtOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    gridSize?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    editable?: SortOrder
    addToTodaysPixelArts?: SortOrder
    likesCount?: SortOrder
    profileId?: SortOrder
    dailyPromptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    dailyPrompt?: DailyPromptOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PixelArtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PixelArtWhereInput | PixelArtWhereInput[]
    OR?: PixelArtWhereInput[]
    NOT?: PixelArtWhereInput | PixelArtWhereInput[]
    data?: StringFilter<"PixelArt"> | string
    gridSize?: IntFilter<"PixelArt"> | number
    imageUrl?: StringFilter<"PixelArt"> | string
    title?: StringFilter<"PixelArt"> | string
    editable?: BoolFilter<"PixelArt"> | boolean
    addToTodaysPixelArts?: BoolFilter<"PixelArt"> | boolean
    likesCount?: IntFilter<"PixelArt"> | number
    profileId?: StringFilter<"PixelArt"> | string
    dailyPromptId?: StringNullableFilter<"PixelArt"> | string | null
    createdAt?: DateTimeFilter<"PixelArt"> | Date | string
    updatedAt?: DateTimeFilter<"PixelArt"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    dailyPrompt?: XOR<DailyPromptNullableScalarRelationFilter, DailyPromptWhereInput> | null
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type PixelArtOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    gridSize?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    editable?: SortOrder
    addToTodaysPixelArts?: SortOrder
    likesCount?: SortOrder
    profileId?: SortOrder
    dailyPromptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PixelArtCountOrderByAggregateInput
    _avg?: PixelArtAvgOrderByAggregateInput
    _max?: PixelArtMaxOrderByAggregateInput
    _min?: PixelArtMinOrderByAggregateInput
    _sum?: PixelArtSumOrderByAggregateInput
  }

  export type PixelArtScalarWhereWithAggregatesInput = {
    AND?: PixelArtScalarWhereWithAggregatesInput | PixelArtScalarWhereWithAggregatesInput[]
    OR?: PixelArtScalarWhereWithAggregatesInput[]
    NOT?: PixelArtScalarWhereWithAggregatesInput | PixelArtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PixelArt"> | string
    data?: StringWithAggregatesFilter<"PixelArt"> | string
    gridSize?: IntWithAggregatesFilter<"PixelArt"> | number
    imageUrl?: StringWithAggregatesFilter<"PixelArt"> | string
    title?: StringWithAggregatesFilter<"PixelArt"> | string
    editable?: BoolWithAggregatesFilter<"PixelArt"> | boolean
    addToTodaysPixelArts?: BoolWithAggregatesFilter<"PixelArt"> | boolean
    likesCount?: IntWithAggregatesFilter<"PixelArt"> | number
    profileId?: StringWithAggregatesFilter<"PixelArt"> | string
    dailyPromptId?: StringNullableWithAggregatesFilter<"PixelArt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PixelArt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PixelArt"> | Date | string
  }

  export type DailyPromptWhereInput = {
    AND?: DailyPromptWhereInput | DailyPromptWhereInput[]
    OR?: DailyPromptWhereInput[]
    NOT?: DailyPromptWhereInput | DailyPromptWhereInput[]
    id?: StringFilter<"DailyPrompt"> | string
    prompt?: StringFilter<"DailyPrompt"> | string
    promptDescription?: StringFilter<"DailyPrompt"> | string
    promptDate?: DateTimeFilter<"DailyPrompt"> | Date | string
    createdAt?: DateTimeFilter<"DailyPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPrompt"> | Date | string
    pixelArts?: PixelArtListRelationFilter
  }

  export type DailyPromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    promptDescription?: SortOrder
    promptDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pixelArts?: PixelArtOrderByRelationAggregateInput
  }

  export type DailyPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    promptDate?: Date | string
    AND?: DailyPromptWhereInput | DailyPromptWhereInput[]
    OR?: DailyPromptWhereInput[]
    NOT?: DailyPromptWhereInput | DailyPromptWhereInput[]
    prompt?: StringFilter<"DailyPrompt"> | string
    promptDescription?: StringFilter<"DailyPrompt"> | string
    createdAt?: DateTimeFilter<"DailyPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"DailyPrompt"> | Date | string
    pixelArts?: PixelArtListRelationFilter
  }, "id" | "promptDate">

  export type DailyPromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    promptDescription?: SortOrder
    promptDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyPromptCountOrderByAggregateInput
    _max?: DailyPromptMaxOrderByAggregateInput
    _min?: DailyPromptMinOrderByAggregateInput
  }

  export type DailyPromptScalarWhereWithAggregatesInput = {
    AND?: DailyPromptScalarWhereWithAggregatesInput | DailyPromptScalarWhereWithAggregatesInput[]
    OR?: DailyPromptScalarWhereWithAggregatesInput[]
    NOT?: DailyPromptScalarWhereWithAggregatesInput | DailyPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyPrompt"> | string
    prompt?: StringWithAggregatesFilter<"DailyPrompt"> | string
    promptDescription?: StringWithAggregatesFilter<"DailyPrompt"> | string
    promptDate?: DateTimeWithAggregatesFilter<"DailyPrompt"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyPrompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyPrompt"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    profileId?: StringFilter<"Like"> | string
    pixelArtId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    pixelArt?: XOR<PixelArtScalarRelationFilter, PixelArtWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    pixelArt?: PixelArtOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_pixelArtId?: LikeProfileIdPixelArtIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    profileId?: StringFilter<"Like"> | string
    pixelArtId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    pixelArt?: XOR<PixelArtScalarRelationFilter, PixelArtWhereInput>
  }, "id" | "profileId_pixelArtId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    profileId?: StringWithAggregatesFilter<"Like"> | string
    pixelArtId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: StringFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    following?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    follower?: ProfileOrderByWithRelationInput
    following?: ProfileOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    followerId_followingId?: FollowFollowerIdFollowingIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    following?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "followerId_followingId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Follow"> | string
    followerId?: StringWithAggregatesFilter<"Follow"> | string
    followingId?: StringWithAggregatesFilter<"Follow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    profileId?: StringFilter<"Comment"> | string
    pixelArtId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    pixelArt?: XOR<PixelArtScalarRelationFilter, PixelArtWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    pixelArt?: PixelArtOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    profileId?: StringFilter<"Comment"> | string
    pixelArtId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    pixelArt?: XOR<PixelArtScalarRelationFilter, PixelArtWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    profileId?: StringWithAggregatesFilter<"Comment"> | string
    pixelArtId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type StreakWhereInput = {
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    id?: StringFilter<"Streak"> | string
    profileId?: StringFilter<"Streak"> | string
    startDate?: DateTimeFilter<"Streak"> | Date | string
    endDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    count?: IntFilter<"Streak"> | number
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type StreakOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type StreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    profileId?: StringFilter<"Streak"> | string
    startDate?: DateTimeFilter<"Streak"> | Date | string
    endDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    count?: IntFilter<"Streak"> | number
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type StreakOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreakCountOrderByAggregateInput
    _avg?: StreakAvgOrderByAggregateInput
    _max?: StreakMaxOrderByAggregateInput
    _min?: StreakMinOrderByAggregateInput
    _sum?: StreakSumOrderByAggregateInput
  }

  export type StreakScalarWhereWithAggregatesInput = {
    AND?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    OR?: StreakScalarWhereWithAggregatesInput[]
    NOT?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streak"> | string
    profileId?: StringWithAggregatesFilter<"Streak"> | string
    startDate?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Streak"> | Date | string | null
    count?: IntWithAggregatesFilter<"Streak"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    requirement?: IntFilter<"Badge"> | number
    type?: StringFilter<"Badge"> | string
    profiles?: BadgeOnProfileListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    requirement?: SortOrder
    type?: SortOrder
    profiles?: BadgeOnProfileOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    requirement?: IntFilter<"Badge"> | number
    type?: StringFilter<"Badge"> | string
    profiles?: BadgeOnProfileListRelationFilter
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    requirement?: SortOrder
    type?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    icon?: StringWithAggregatesFilter<"Badge"> | string
    requirement?: IntWithAggregatesFilter<"Badge"> | number
    type?: StringWithAggregatesFilter<"Badge"> | string
  }

  export type BadgeOnProfileWhereInput = {
    AND?: BadgeOnProfileWhereInput | BadgeOnProfileWhereInput[]
    OR?: BadgeOnProfileWhereInput[]
    NOT?: BadgeOnProfileWhereInput | BadgeOnProfileWhereInput[]
    id?: StringFilter<"BadgeOnProfile"> | string
    profileId?: StringFilter<"BadgeOnProfile"> | string
    badgeId?: StringFilter<"BadgeOnProfile"> | string
    awardedAt?: DateTimeFilter<"BadgeOnProfile"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }

  export type BadgeOnProfileOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeId?: SortOrder
    awardedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
  }

  export type BadgeOnProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_badgeId?: BadgeOnProfileProfileIdBadgeIdCompoundUniqueInput
    AND?: BadgeOnProfileWhereInput | BadgeOnProfileWhereInput[]
    OR?: BadgeOnProfileWhereInput[]
    NOT?: BadgeOnProfileWhereInput | BadgeOnProfileWhereInput[]
    profileId?: StringFilter<"BadgeOnProfile"> | string
    badgeId?: StringFilter<"BadgeOnProfile"> | string
    awardedAt?: DateTimeFilter<"BadgeOnProfile"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }, "id" | "profileId_badgeId">

  export type BadgeOnProfileOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeId?: SortOrder
    awardedAt?: SortOrder
    _count?: BadgeOnProfileCountOrderByAggregateInput
    _max?: BadgeOnProfileMaxOrderByAggregateInput
    _min?: BadgeOnProfileMinOrderByAggregateInput
  }

  export type BadgeOnProfileScalarWhereWithAggregatesInput = {
    AND?: BadgeOnProfileScalarWhereWithAggregatesInput | BadgeOnProfileScalarWhereWithAggregatesInput[]
    OR?: BadgeOnProfileScalarWhereWithAggregatesInput[]
    NOT?: BadgeOnProfileScalarWhereWithAggregatesInput | BadgeOnProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BadgeOnProfile"> | string
    profileId?: StringWithAggregatesFilter<"BadgeOnProfile"> | string
    badgeId?: StringWithAggregatesFilter<"BadgeOnProfile"> | string
    awardedAt?: DateTimeWithAggregatesFilter<"BadgeOnProfile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PixelArtCreateInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutPixelArtsInput
    dailyPrompt?: DailyPromptCreateNestedOneWithoutPixelArtsInput
    likes?: LikeCreateNestedManyWithoutPixelArtInput
    comments?: CommentCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtUncheckedCreateInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    profileId: string
    dailyPromptId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPixelArtInput
    comments?: CommentUncheckedCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutPixelArtsNestedInput
    dailyPrompt?: DailyPromptUpdateOneWithoutPixelArtsNestedInput
    likes?: LikeUpdateManyWithoutPixelArtNestedInput
    comments?: CommentUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    profileId?: StringFieldUpdateOperationsInput | string
    dailyPromptId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPixelArtNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtCreateManyInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    profileId: string
    dailyPromptId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PixelArtUpdateManyMutationInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PixelArtUncheckedUpdateManyInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    profileId?: StringFieldUpdateOperationsInput | string
    dailyPromptId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPromptCreateInput = {
    id?: string
    prompt: string
    promptDescription: string
    promptDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtCreateNestedManyWithoutDailyPromptInput
  }

  export type DailyPromptUncheckedCreateInput = {
    id?: string
    prompt: string
    promptDescription: string
    promptDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutDailyPromptInput
  }

  export type DailyPromptUpdateInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    promptDescription?: StringFieldUpdateOperationsInput | string
    promptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUpdateManyWithoutDailyPromptNestedInput
  }

  export type DailyPromptUncheckedUpdateInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    promptDescription?: StringFieldUpdateOperationsInput | string
    promptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutDailyPromptNestedInput
  }

  export type DailyPromptCreateManyInput = {
    id?: string
    prompt: string
    promptDescription: string
    promptDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPromptUpdateManyMutationInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    promptDescription?: StringFieldUpdateOperationsInput | string
    promptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPromptUncheckedUpdateManyInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    promptDescription?: StringFieldUpdateOperationsInput | string
    promptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutLikesInput
    pixelArt: PixelArtCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    profileId: string
    pixelArtId: string
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutLikesNestedInput
    pixelArt?: PixelArtUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    profileId: string
    pixelArtId: string
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    id?: string
    createdAt?: Date | string
    follower: ProfileCreateNestedOneWithoutFollowingInput
    following: ProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateInput = {
    id?: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: ProfileUpdateOneRequiredWithoutFollowingNestedInput
    following?: ProfileUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyInput = {
    id?: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutCommentsInput
    pixelArt: PixelArtCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    profileId: string
    pixelArtId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutCommentsNestedInput
    pixelArt?: PixelArtUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    profileId: string
    pixelArtId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutStreaksInput
  }

  export type StreakUncheckedCreateInput = {
    id?: string
    profileId: string
    startDate: Date | string
    endDate?: Date | string | null
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutStreaksNestedInput
  }

  export type StreakUncheckedUpdateInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateManyInput = {
    id?: string
    profileId: string
    startDate: Date | string
    endDate?: Date | string | null
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateManyInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    id: string
    name: string
    description: string
    icon: string
    requirement?: number
    type: string
    profiles?: BadgeOnProfileCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id: string
    name: string
    description: string
    icon: string
    requirement?: number
    type: string
    profiles?: BadgeOnProfileUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    requirement?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    profiles?: BadgeOnProfileUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    requirement?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    profiles?: BadgeOnProfileUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id: string
    name: string
    description: string
    icon: string
    requirement?: number
    type: string
  }

  export type BadgeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    requirement?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    requirement?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeOnProfileCreateInput = {
    id?: string
    awardedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutBadgesInput
    badge: BadgeCreateNestedOneWithoutProfilesInput
  }

  export type BadgeOnProfileUncheckedCreateInput = {
    id?: string
    profileId: string
    badgeId: string
    awardedAt?: Date | string
  }

  export type BadgeOnProfileUpdateInput = {
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutBadgesNestedInput
    badge?: BadgeUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type BadgeOnProfileUncheckedUpdateInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeOnProfileCreateManyInput = {
    id?: string
    profileId: string
    badgeId: string
    awardedAt?: Date | string
  }

  export type BadgeOnProfileUpdateManyMutationInput = {
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeOnProfileUncheckedUpdateManyInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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
    isSet?: boolean
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
    isSet?: boolean
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PixelArtListRelationFilter = {
    every?: PixelArtWhereInput
    some?: PixelArtWhereInput
    none?: PixelArtWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type StreakListRelationFilter = {
    every?: StreakWhereInput
    some?: StreakWhereInput
    none?: StreakWhereInput
  }

  export type BadgeOnProfileListRelationFilter = {
    every?: BadgeOnProfileWhereInput
    some?: BadgeOnProfileWhereInput
    none?: BadgeOnProfileWhereInput
  }

  export type PixelArtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeOnProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatarConfig?: SortOrder
    bio?: SortOrder
    socialLinks?: SortOrder
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    pixelArtCount?: SortOrder
    likesReceivedCount?: SortOrder
    pixelArtLikedCount?: SortOrder
    commentCount?: SortOrder
    currentStreak?: SortOrder
    maxStreakCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type DailyPromptNullableScalarRelationFilter = {
    is?: DailyPromptWhereInput | null
    isNot?: DailyPromptWhereInput | null
  }

  export type PixelArtCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    gridSize?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    editable?: SortOrder
    addToTodaysPixelArts?: SortOrder
    likesCount?: SortOrder
    profileId?: SortOrder
    dailyPromptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PixelArtAvgOrderByAggregateInput = {
    gridSize?: SortOrder
    likesCount?: SortOrder
  }

  export type PixelArtMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    gridSize?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    editable?: SortOrder
    addToTodaysPixelArts?: SortOrder
    likesCount?: SortOrder
    profileId?: SortOrder
    dailyPromptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PixelArtMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    gridSize?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    editable?: SortOrder
    addToTodaysPixelArts?: SortOrder
    likesCount?: SortOrder
    profileId?: SortOrder
    dailyPromptId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PixelArtSumOrderByAggregateInput = {
    gridSize?: SortOrder
    likesCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DailyPromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    promptDescription?: SortOrder
    promptDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    promptDescription?: SortOrder
    promptDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyPromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    promptDescription?: SortOrder
    promptDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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
    isSet?: boolean
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type PixelArtScalarRelationFilter = {
    is?: PixelArtWhereInput
    isNot?: PixelArtWhereInput
  }

  export type LikeProfileIdPixelArtIdCompoundUniqueInput = {
    profileId: string
    pixelArtId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: string
    followingId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    profileId?: SortOrder
    pixelArtId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type StreakMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    requirement?: SortOrder
    type?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    requirement?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    requirement?: SortOrder
    type?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    requirement?: SortOrder
    type?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    requirement?: SortOrder
  }

  export type BadgeScalarRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type BadgeOnProfileProfileIdBadgeIdCompoundUniqueInput = {
    profileId: string
    badgeId: string
  }

  export type BadgeOnProfileCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeId?: SortOrder
    awardedAt?: SortOrder
  }

  export type BadgeOnProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeId?: SortOrder
    awardedAt?: SortOrder
  }

  export type BadgeOnProfileMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeId?: SortOrder
    awardedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type PixelArtCreateNestedManyWithoutProfileInput = {
    create?: XOR<PixelArtCreateWithoutProfileInput, PixelArtUncheckedCreateWithoutProfileInput> | PixelArtCreateWithoutProfileInput[] | PixelArtUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutProfileInput | PixelArtCreateOrConnectWithoutProfileInput[]
    createMany?: PixelArtCreateManyProfileInputEnvelope
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutProfileInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutProfileInput = {
    create?: XOR<CommentCreateWithoutProfileInput, CommentUncheckedCreateWithoutProfileInput> | CommentCreateWithoutProfileInput[] | CommentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProfileInput | CommentCreateOrConnectWithoutProfileInput[]
    createMany?: CommentCreateManyProfileInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type StreakCreateNestedManyWithoutProfileInput = {
    create?: XOR<StreakCreateWithoutProfileInput, StreakUncheckedCreateWithoutProfileInput> | StreakCreateWithoutProfileInput[] | StreakUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutProfileInput | StreakCreateOrConnectWithoutProfileInput[]
    createMany?: StreakCreateManyProfileInputEnvelope
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
  }

  export type BadgeOnProfileCreateNestedManyWithoutProfileInput = {
    create?: XOR<BadgeOnProfileCreateWithoutProfileInput, BadgeOnProfileUncheckedCreateWithoutProfileInput> | BadgeOnProfileCreateWithoutProfileInput[] | BadgeOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutProfileInput | BadgeOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: BadgeOnProfileCreateManyProfileInputEnvelope
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
  }

  export type PixelArtUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PixelArtCreateWithoutProfileInput, PixelArtUncheckedCreateWithoutProfileInput> | PixelArtCreateWithoutProfileInput[] | PixelArtUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutProfileInput | PixelArtCreateOrConnectWithoutProfileInput[]
    createMany?: PixelArtCreateManyProfileInputEnvelope
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<CommentCreateWithoutProfileInput, CommentUncheckedCreateWithoutProfileInput> | CommentCreateWithoutProfileInput[] | CommentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProfileInput | CommentCreateOrConnectWithoutProfileInput[]
    createMany?: CommentCreateManyProfileInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type StreakUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<StreakCreateWithoutProfileInput, StreakUncheckedCreateWithoutProfileInput> | StreakCreateWithoutProfileInput[] | StreakUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutProfileInput | StreakCreateOrConnectWithoutProfileInput[]
    createMany?: StreakCreateManyProfileInputEnvelope
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
  }

  export type BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<BadgeOnProfileCreateWithoutProfileInput, BadgeOnProfileUncheckedCreateWithoutProfileInput> | BadgeOnProfileCreateWithoutProfileInput[] | BadgeOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutProfileInput | BadgeOnProfileCreateOrConnectWithoutProfileInput[]
    createMany?: BadgeOnProfileCreateManyProfileInputEnvelope
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type PixelArtUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PixelArtCreateWithoutProfileInput, PixelArtUncheckedCreateWithoutProfileInput> | PixelArtCreateWithoutProfileInput[] | PixelArtUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutProfileInput | PixelArtCreateOrConnectWithoutProfileInput[]
    upsert?: PixelArtUpsertWithWhereUniqueWithoutProfileInput | PixelArtUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PixelArtCreateManyProfileInputEnvelope
    set?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    disconnect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    delete?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    update?: PixelArtUpdateWithWhereUniqueWithoutProfileInput | PixelArtUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PixelArtUpdateManyWithWhereWithoutProfileInput | PixelArtUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PixelArtScalarWhereInput | PixelArtScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutProfileInput | LikeUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutProfileInput | LikeUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutProfileInput | LikeUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutProfileNestedInput = {
    create?: XOR<CommentCreateWithoutProfileInput, CommentUncheckedCreateWithoutProfileInput> | CommentCreateWithoutProfileInput[] | CommentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProfileInput | CommentCreateOrConnectWithoutProfileInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProfileInput | CommentUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: CommentCreateManyProfileInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProfileInput | CommentUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProfileInput | CommentUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type StreakUpdateManyWithoutProfileNestedInput = {
    create?: XOR<StreakCreateWithoutProfileInput, StreakUncheckedCreateWithoutProfileInput> | StreakCreateWithoutProfileInput[] | StreakUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutProfileInput | StreakCreateOrConnectWithoutProfileInput[]
    upsert?: StreakUpsertWithWhereUniqueWithoutProfileInput | StreakUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: StreakCreateManyProfileInputEnvelope
    set?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    disconnect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    delete?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    update?: StreakUpdateWithWhereUniqueWithoutProfileInput | StreakUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: StreakUpdateManyWithWhereWithoutProfileInput | StreakUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: StreakScalarWhereInput | StreakScalarWhereInput[]
  }

  export type BadgeOnProfileUpdateManyWithoutProfileNestedInput = {
    create?: XOR<BadgeOnProfileCreateWithoutProfileInput, BadgeOnProfileUncheckedCreateWithoutProfileInput> | BadgeOnProfileCreateWithoutProfileInput[] | BadgeOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutProfileInput | BadgeOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: BadgeOnProfileUpsertWithWhereUniqueWithoutProfileInput | BadgeOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: BadgeOnProfileCreateManyProfileInputEnvelope
    set?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    disconnect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    delete?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    update?: BadgeOnProfileUpdateWithWhereUniqueWithoutProfileInput | BadgeOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: BadgeOnProfileUpdateManyWithWhereWithoutProfileInput | BadgeOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: BadgeOnProfileScalarWhereInput | BadgeOnProfileScalarWhereInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PixelArtUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PixelArtCreateWithoutProfileInput, PixelArtUncheckedCreateWithoutProfileInput> | PixelArtCreateWithoutProfileInput[] | PixelArtUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutProfileInput | PixelArtCreateOrConnectWithoutProfileInput[]
    upsert?: PixelArtUpsertWithWhereUniqueWithoutProfileInput | PixelArtUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PixelArtCreateManyProfileInputEnvelope
    set?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    disconnect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    delete?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    update?: PixelArtUpdateWithWhereUniqueWithoutProfileInput | PixelArtUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PixelArtUpdateManyWithWhereWithoutProfileInput | PixelArtUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PixelArtScalarWhereInput | PixelArtScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput> | LikeCreateWithoutProfileInput[] | LikeUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProfileInput | LikeCreateOrConnectWithoutProfileInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutProfileInput | LikeUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LikeCreateManyProfileInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutProfileInput | LikeUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutProfileInput | LikeUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<CommentCreateWithoutProfileInput, CommentUncheckedCreateWithoutProfileInput> | CommentCreateWithoutProfileInput[] | CommentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProfileInput | CommentCreateOrConnectWithoutProfileInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProfileInput | CommentUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: CommentCreateManyProfileInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProfileInput | CommentUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProfileInput | CommentUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type StreakUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<StreakCreateWithoutProfileInput, StreakUncheckedCreateWithoutProfileInput> | StreakCreateWithoutProfileInput[] | StreakUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutProfileInput | StreakCreateOrConnectWithoutProfileInput[]
    upsert?: StreakUpsertWithWhereUniqueWithoutProfileInput | StreakUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: StreakCreateManyProfileInputEnvelope
    set?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    disconnect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    delete?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    update?: StreakUpdateWithWhereUniqueWithoutProfileInput | StreakUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: StreakUpdateManyWithWhereWithoutProfileInput | StreakUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: StreakScalarWhereInput | StreakScalarWhereInput[]
  }

  export type BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<BadgeOnProfileCreateWithoutProfileInput, BadgeOnProfileUncheckedCreateWithoutProfileInput> | BadgeOnProfileCreateWithoutProfileInput[] | BadgeOnProfileUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutProfileInput | BadgeOnProfileCreateOrConnectWithoutProfileInput[]
    upsert?: BadgeOnProfileUpsertWithWhereUniqueWithoutProfileInput | BadgeOnProfileUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: BadgeOnProfileCreateManyProfileInputEnvelope
    set?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    disconnect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    delete?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    update?: BadgeOnProfileUpdateWithWhereUniqueWithoutProfileInput | BadgeOnProfileUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: BadgeOnProfileUpdateManyWithWhereWithoutProfileInput | BadgeOnProfileUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: BadgeOnProfileScalarWhereInput | BadgeOnProfileScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutPixelArtsInput = {
    create?: XOR<ProfileCreateWithoutPixelArtsInput, ProfileUncheckedCreateWithoutPixelArtsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPixelArtsInput
    connect?: ProfileWhereUniqueInput
  }

  export type DailyPromptCreateNestedOneWithoutPixelArtsInput = {
    create?: XOR<DailyPromptCreateWithoutPixelArtsInput, DailyPromptUncheckedCreateWithoutPixelArtsInput>
    connectOrCreate?: DailyPromptCreateOrConnectWithoutPixelArtsInput
    connect?: DailyPromptWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutPixelArtInput = {
    create?: XOR<LikeCreateWithoutPixelArtInput, LikeUncheckedCreateWithoutPixelArtInput> | LikeCreateWithoutPixelArtInput[] | LikeUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPixelArtInput | LikeCreateOrConnectWithoutPixelArtInput[]
    createMany?: LikeCreateManyPixelArtInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPixelArtInput = {
    create?: XOR<CommentCreateWithoutPixelArtInput, CommentUncheckedCreateWithoutPixelArtInput> | CommentCreateWithoutPixelArtInput[] | CommentUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPixelArtInput | CommentCreateOrConnectWithoutPixelArtInput[]
    createMany?: CommentCreateManyPixelArtInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutPixelArtInput = {
    create?: XOR<LikeCreateWithoutPixelArtInput, LikeUncheckedCreateWithoutPixelArtInput> | LikeCreateWithoutPixelArtInput[] | LikeUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPixelArtInput | LikeCreateOrConnectWithoutPixelArtInput[]
    createMany?: LikeCreateManyPixelArtInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPixelArtInput = {
    create?: XOR<CommentCreateWithoutPixelArtInput, CommentUncheckedCreateWithoutPixelArtInput> | CommentCreateWithoutPixelArtInput[] | CommentUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPixelArtInput | CommentCreateOrConnectWithoutPixelArtInput[]
    createMany?: CommentCreateManyPixelArtInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileUpdateOneRequiredWithoutPixelArtsNestedInput = {
    create?: XOR<ProfileCreateWithoutPixelArtsInput, ProfileUncheckedCreateWithoutPixelArtsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPixelArtsInput
    upsert?: ProfileUpsertWithoutPixelArtsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPixelArtsInput, ProfileUpdateWithoutPixelArtsInput>, ProfileUncheckedUpdateWithoutPixelArtsInput>
  }

  export type DailyPromptUpdateOneWithoutPixelArtsNestedInput = {
    create?: XOR<DailyPromptCreateWithoutPixelArtsInput, DailyPromptUncheckedCreateWithoutPixelArtsInput>
    connectOrCreate?: DailyPromptCreateOrConnectWithoutPixelArtsInput
    upsert?: DailyPromptUpsertWithoutPixelArtsInput
    disconnect?: boolean
    delete?: DailyPromptWhereInput | boolean
    connect?: DailyPromptWhereUniqueInput
    update?: XOR<XOR<DailyPromptUpdateToOneWithWhereWithoutPixelArtsInput, DailyPromptUpdateWithoutPixelArtsInput>, DailyPromptUncheckedUpdateWithoutPixelArtsInput>
  }

  export type LikeUpdateManyWithoutPixelArtNestedInput = {
    create?: XOR<LikeCreateWithoutPixelArtInput, LikeUncheckedCreateWithoutPixelArtInput> | LikeCreateWithoutPixelArtInput[] | LikeUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPixelArtInput | LikeCreateOrConnectWithoutPixelArtInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPixelArtInput | LikeUpsertWithWhereUniqueWithoutPixelArtInput[]
    createMany?: LikeCreateManyPixelArtInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPixelArtInput | LikeUpdateWithWhereUniqueWithoutPixelArtInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPixelArtInput | LikeUpdateManyWithWhereWithoutPixelArtInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPixelArtNestedInput = {
    create?: XOR<CommentCreateWithoutPixelArtInput, CommentUncheckedCreateWithoutPixelArtInput> | CommentCreateWithoutPixelArtInput[] | CommentUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPixelArtInput | CommentCreateOrConnectWithoutPixelArtInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPixelArtInput | CommentUpsertWithWhereUniqueWithoutPixelArtInput[]
    createMany?: CommentCreateManyPixelArtInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPixelArtInput | CommentUpdateWithWhereUniqueWithoutPixelArtInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPixelArtInput | CommentUpdateManyWithWhereWithoutPixelArtInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutPixelArtNestedInput = {
    create?: XOR<LikeCreateWithoutPixelArtInput, LikeUncheckedCreateWithoutPixelArtInput> | LikeCreateWithoutPixelArtInput[] | LikeUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPixelArtInput | LikeCreateOrConnectWithoutPixelArtInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPixelArtInput | LikeUpsertWithWhereUniqueWithoutPixelArtInput[]
    createMany?: LikeCreateManyPixelArtInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPixelArtInput | LikeUpdateWithWhereUniqueWithoutPixelArtInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPixelArtInput | LikeUpdateManyWithWhereWithoutPixelArtInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPixelArtNestedInput = {
    create?: XOR<CommentCreateWithoutPixelArtInput, CommentUncheckedCreateWithoutPixelArtInput> | CommentCreateWithoutPixelArtInput[] | CommentUncheckedCreateWithoutPixelArtInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPixelArtInput | CommentCreateOrConnectWithoutPixelArtInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPixelArtInput | CommentUpsertWithWhereUniqueWithoutPixelArtInput[]
    createMany?: CommentCreateManyPixelArtInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPixelArtInput | CommentUpdateWithWhereUniqueWithoutPixelArtInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPixelArtInput | CommentUpdateManyWithWhereWithoutPixelArtInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PixelArtCreateNestedManyWithoutDailyPromptInput = {
    create?: XOR<PixelArtCreateWithoutDailyPromptInput, PixelArtUncheckedCreateWithoutDailyPromptInput> | PixelArtCreateWithoutDailyPromptInput[] | PixelArtUncheckedCreateWithoutDailyPromptInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutDailyPromptInput | PixelArtCreateOrConnectWithoutDailyPromptInput[]
    createMany?: PixelArtCreateManyDailyPromptInputEnvelope
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
  }

  export type PixelArtUncheckedCreateNestedManyWithoutDailyPromptInput = {
    create?: XOR<PixelArtCreateWithoutDailyPromptInput, PixelArtUncheckedCreateWithoutDailyPromptInput> | PixelArtCreateWithoutDailyPromptInput[] | PixelArtUncheckedCreateWithoutDailyPromptInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutDailyPromptInput | PixelArtCreateOrConnectWithoutDailyPromptInput[]
    createMany?: PixelArtCreateManyDailyPromptInputEnvelope
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
  }

  export type PixelArtUpdateManyWithoutDailyPromptNestedInput = {
    create?: XOR<PixelArtCreateWithoutDailyPromptInput, PixelArtUncheckedCreateWithoutDailyPromptInput> | PixelArtCreateWithoutDailyPromptInput[] | PixelArtUncheckedCreateWithoutDailyPromptInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutDailyPromptInput | PixelArtCreateOrConnectWithoutDailyPromptInput[]
    upsert?: PixelArtUpsertWithWhereUniqueWithoutDailyPromptInput | PixelArtUpsertWithWhereUniqueWithoutDailyPromptInput[]
    createMany?: PixelArtCreateManyDailyPromptInputEnvelope
    set?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    disconnect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    delete?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    update?: PixelArtUpdateWithWhereUniqueWithoutDailyPromptInput | PixelArtUpdateWithWhereUniqueWithoutDailyPromptInput[]
    updateMany?: PixelArtUpdateManyWithWhereWithoutDailyPromptInput | PixelArtUpdateManyWithWhereWithoutDailyPromptInput[]
    deleteMany?: PixelArtScalarWhereInput | PixelArtScalarWhereInput[]
  }

  export type PixelArtUncheckedUpdateManyWithoutDailyPromptNestedInput = {
    create?: XOR<PixelArtCreateWithoutDailyPromptInput, PixelArtUncheckedCreateWithoutDailyPromptInput> | PixelArtCreateWithoutDailyPromptInput[] | PixelArtUncheckedCreateWithoutDailyPromptInput[]
    connectOrCreate?: PixelArtCreateOrConnectWithoutDailyPromptInput | PixelArtCreateOrConnectWithoutDailyPromptInput[]
    upsert?: PixelArtUpsertWithWhereUniqueWithoutDailyPromptInput | PixelArtUpsertWithWhereUniqueWithoutDailyPromptInput[]
    createMany?: PixelArtCreateManyDailyPromptInputEnvelope
    set?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    disconnect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    delete?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    connect?: PixelArtWhereUniqueInput | PixelArtWhereUniqueInput[]
    update?: PixelArtUpdateWithWhereUniqueWithoutDailyPromptInput | PixelArtUpdateWithWhereUniqueWithoutDailyPromptInput[]
    updateMany?: PixelArtUpdateManyWithWhereWithoutDailyPromptInput | PixelArtUpdateManyWithWhereWithoutDailyPromptInput[]
    deleteMany?: PixelArtScalarWhereInput | PixelArtScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ProfileCreateNestedOneWithoutLikesInput = {
    create?: XOR<ProfileCreateWithoutLikesInput, ProfileUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLikesInput
    connect?: ProfileWhereUniqueInput
  }

  export type PixelArtCreateNestedOneWithoutLikesInput = {
    create?: XOR<PixelArtCreateWithoutLikesInput, PixelArtUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PixelArtCreateOrConnectWithoutLikesInput
    connect?: PixelArtWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ProfileCreateWithoutLikesInput, ProfileUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLikesInput
    upsert?: ProfileUpsertWithoutLikesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutLikesInput, ProfileUpdateWithoutLikesInput>, ProfileUncheckedUpdateWithoutLikesInput>
  }

  export type PixelArtUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PixelArtCreateWithoutLikesInput, PixelArtUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PixelArtCreateOrConnectWithoutLikesInput
    upsert?: PixelArtUpsertWithoutLikesInput
    connect?: PixelArtWhereUniqueInput
    update?: XOR<XOR<PixelArtUpdateToOneWithWhereWithoutLikesInput, PixelArtUpdateWithoutLikesInput>, PixelArtUncheckedUpdateWithoutLikesInput>
  }

  export type ProfileCreateNestedOneWithoutFollowingInput = {
    create?: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowingInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowersInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowingInput
    upsert?: ProfileUpsertWithoutFollowingInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFollowingInput, ProfileUpdateWithoutFollowingInput>, ProfileUncheckedUpdateWithoutFollowingInput>
  }

  export type ProfileUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFollowersInput
    upsert?: ProfileUpsertWithoutFollowersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFollowersInput, ProfileUpdateWithoutFollowersInput>, ProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type ProfileCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PixelArtCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PixelArtCreateWithoutCommentsInput, PixelArtUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PixelArtCreateOrConnectWithoutCommentsInput
    connect?: PixelArtWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput
    upsert?: ProfileUpsertWithoutCommentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCommentsInput, ProfileUpdateWithoutCommentsInput>, ProfileUncheckedUpdateWithoutCommentsInput>
  }

  export type PixelArtUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PixelArtCreateWithoutCommentsInput, PixelArtUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PixelArtCreateOrConnectWithoutCommentsInput
    upsert?: PixelArtUpsertWithoutCommentsInput
    connect?: PixelArtWhereUniqueInput
    update?: XOR<XOR<PixelArtUpdateToOneWithWhereWithoutCommentsInput, PixelArtUpdateWithoutCommentsInput>, PixelArtUncheckedUpdateWithoutCommentsInput>
  }

  export type ProfileCreateNestedOneWithoutStreaksInput = {
    create?: XOR<ProfileCreateWithoutStreaksInput, ProfileUncheckedCreateWithoutStreaksInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutStreaksInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutStreaksNestedInput = {
    create?: XOR<ProfileCreateWithoutStreaksInput, ProfileUncheckedCreateWithoutStreaksInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutStreaksInput
    upsert?: ProfileUpsertWithoutStreaksInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutStreaksInput, ProfileUpdateWithoutStreaksInput>, ProfileUncheckedUpdateWithoutStreaksInput>
  }

  export type BadgeOnProfileCreateNestedManyWithoutBadgeInput = {
    create?: XOR<BadgeOnProfileCreateWithoutBadgeInput, BadgeOnProfileUncheckedCreateWithoutBadgeInput> | BadgeOnProfileCreateWithoutBadgeInput[] | BadgeOnProfileUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutBadgeInput | BadgeOnProfileCreateOrConnectWithoutBadgeInput[]
    createMany?: BadgeOnProfileCreateManyBadgeInputEnvelope
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
  }

  export type BadgeOnProfileUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<BadgeOnProfileCreateWithoutBadgeInput, BadgeOnProfileUncheckedCreateWithoutBadgeInput> | BadgeOnProfileCreateWithoutBadgeInput[] | BadgeOnProfileUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutBadgeInput | BadgeOnProfileCreateOrConnectWithoutBadgeInput[]
    createMany?: BadgeOnProfileCreateManyBadgeInputEnvelope
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
  }

  export type BadgeOnProfileUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<BadgeOnProfileCreateWithoutBadgeInput, BadgeOnProfileUncheckedCreateWithoutBadgeInput> | BadgeOnProfileCreateWithoutBadgeInput[] | BadgeOnProfileUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutBadgeInput | BadgeOnProfileCreateOrConnectWithoutBadgeInput[]
    upsert?: BadgeOnProfileUpsertWithWhereUniqueWithoutBadgeInput | BadgeOnProfileUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: BadgeOnProfileCreateManyBadgeInputEnvelope
    set?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    disconnect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    delete?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    update?: BadgeOnProfileUpdateWithWhereUniqueWithoutBadgeInput | BadgeOnProfileUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: BadgeOnProfileUpdateManyWithWhereWithoutBadgeInput | BadgeOnProfileUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: BadgeOnProfileScalarWhereInput | BadgeOnProfileScalarWhereInput[]
  }

  export type BadgeOnProfileUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<BadgeOnProfileCreateWithoutBadgeInput, BadgeOnProfileUncheckedCreateWithoutBadgeInput> | BadgeOnProfileCreateWithoutBadgeInput[] | BadgeOnProfileUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: BadgeOnProfileCreateOrConnectWithoutBadgeInput | BadgeOnProfileCreateOrConnectWithoutBadgeInput[]
    upsert?: BadgeOnProfileUpsertWithWhereUniqueWithoutBadgeInput | BadgeOnProfileUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: BadgeOnProfileCreateManyBadgeInputEnvelope
    set?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    disconnect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    delete?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    connect?: BadgeOnProfileWhereUniqueInput | BadgeOnProfileWhereUniqueInput[]
    update?: BadgeOnProfileUpdateWithWhereUniqueWithoutBadgeInput | BadgeOnProfileUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: BadgeOnProfileUpdateManyWithWhereWithoutBadgeInput | BadgeOnProfileUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: BadgeOnProfileScalarWhereInput | BadgeOnProfileScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutBadgesInput = {
    create?: XOR<ProfileCreateWithoutBadgesInput, ProfileUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBadgesInput
    connect?: ProfileWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutProfilesInput = {
    create?: XOR<BadgeCreateWithoutProfilesInput, BadgeUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutProfilesInput
    connect?: BadgeWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<ProfileCreateWithoutBadgesInput, ProfileUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutBadgesInput
    upsert?: ProfileUpsertWithoutBadgesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutBadgesInput, ProfileUpdateWithoutBadgesInput>, ProfileUncheckedUpdateWithoutBadgesInput>
  }

  export type BadgeUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<BadgeCreateWithoutProfilesInput, BadgeUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutProfilesInput
    upsert?: BadgeUpsertWithoutProfilesInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutProfilesInput, BadgeUpdateWithoutProfilesInput>, BadgeUncheckedUpdateWithoutProfilesInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type PixelArtCreateWithoutProfileInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyPrompt?: DailyPromptCreateNestedOneWithoutPixelArtsInput
    likes?: LikeCreateNestedManyWithoutPixelArtInput
    comments?: CommentCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtUncheckedCreateWithoutProfileInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    dailyPromptId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPixelArtInput
    comments?: CommentUncheckedCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtCreateOrConnectWithoutProfileInput = {
    where: PixelArtWhereUniqueInput
    create: XOR<PixelArtCreateWithoutProfileInput, PixelArtUncheckedCreateWithoutProfileInput>
  }

  export type PixelArtCreateManyProfileInputEnvelope = {
    data: PixelArtCreateManyProfileInput | PixelArtCreateManyProfileInput[]
  }

  export type LikeCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    pixelArt: PixelArtCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutProfileInput = {
    id?: string
    pixelArtId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutProfileInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput>
  }

  export type LikeCreateManyProfileInputEnvelope = {
    data: LikeCreateManyProfileInput | LikeCreateManyProfileInput[]
  }

  export type CommentCreateWithoutProfileInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArt: PixelArtCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutProfileInput = {
    id?: string
    content: string
    pixelArtId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutProfileInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutProfileInput, CommentUncheckedCreateWithoutProfileInput>
  }

  export type CommentCreateManyProfileInputEnvelope = {
    data: CommentCreateManyProfileInput | CommentCreateManyProfileInput[]
  }

  export type FollowCreateWithoutFollowingInput = {
    id?: string
    createdAt?: Date | string
    follower: ProfileCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateWithoutFollowingInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowCreateManyFollowingInputEnvelope = {
    data: FollowCreateManyFollowingInput | FollowCreateManyFollowingInput[]
  }

  export type FollowCreateWithoutFollowerInput = {
    id?: string
    createdAt?: Date | string
    following: ProfileCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
  }

  export type StreakCreateWithoutProfileInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakUncheckedCreateWithoutProfileInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakCreateOrConnectWithoutProfileInput = {
    where: StreakWhereUniqueInput
    create: XOR<StreakCreateWithoutProfileInput, StreakUncheckedCreateWithoutProfileInput>
  }

  export type StreakCreateManyProfileInputEnvelope = {
    data: StreakCreateManyProfileInput | StreakCreateManyProfileInput[]
  }

  export type BadgeOnProfileCreateWithoutProfileInput = {
    id?: string
    awardedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutProfilesInput
  }

  export type BadgeOnProfileUncheckedCreateWithoutProfileInput = {
    id?: string
    badgeId: string
    awardedAt?: Date | string
  }

  export type BadgeOnProfileCreateOrConnectWithoutProfileInput = {
    where: BadgeOnProfileWhereUniqueInput
    create: XOR<BadgeOnProfileCreateWithoutProfileInput, BadgeOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type BadgeOnProfileCreateManyProfileInputEnvelope = {
    data: BadgeOnProfileCreateManyProfileInput | BadgeOnProfileCreateManyProfileInput[]
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PixelArtUpsertWithWhereUniqueWithoutProfileInput = {
    where: PixelArtWhereUniqueInput
    update: XOR<PixelArtUpdateWithoutProfileInput, PixelArtUncheckedUpdateWithoutProfileInput>
    create: XOR<PixelArtCreateWithoutProfileInput, PixelArtUncheckedCreateWithoutProfileInput>
  }

  export type PixelArtUpdateWithWhereUniqueWithoutProfileInput = {
    where: PixelArtWhereUniqueInput
    data: XOR<PixelArtUpdateWithoutProfileInput, PixelArtUncheckedUpdateWithoutProfileInput>
  }

  export type PixelArtUpdateManyWithWhereWithoutProfileInput = {
    where: PixelArtScalarWhereInput
    data: XOR<PixelArtUpdateManyMutationInput, PixelArtUncheckedUpdateManyWithoutProfileInput>
  }

  export type PixelArtScalarWhereInput = {
    AND?: PixelArtScalarWhereInput | PixelArtScalarWhereInput[]
    OR?: PixelArtScalarWhereInput[]
    NOT?: PixelArtScalarWhereInput | PixelArtScalarWhereInput[]
    id?: StringFilter<"PixelArt"> | string
    data?: StringFilter<"PixelArt"> | string
    gridSize?: IntFilter<"PixelArt"> | number
    imageUrl?: StringFilter<"PixelArt"> | string
    title?: StringFilter<"PixelArt"> | string
    editable?: BoolFilter<"PixelArt"> | boolean
    addToTodaysPixelArts?: BoolFilter<"PixelArt"> | boolean
    likesCount?: IntFilter<"PixelArt"> | number
    profileId?: StringFilter<"PixelArt"> | string
    dailyPromptId?: StringNullableFilter<"PixelArt"> | string | null
    createdAt?: DateTimeFilter<"PixelArt"> | Date | string
    updatedAt?: DateTimeFilter<"PixelArt"> | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutProfileInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutProfileInput, LikeUncheckedUpdateWithoutProfileInput>
    create: XOR<LikeCreateWithoutProfileInput, LikeUncheckedCreateWithoutProfileInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutProfileInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutProfileInput, LikeUncheckedUpdateWithoutProfileInput>
  }

  export type LikeUpdateManyWithWhereWithoutProfileInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutProfileInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    profileId?: StringFilter<"Like"> | string
    pixelArtId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutProfileInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutProfileInput, CommentUncheckedUpdateWithoutProfileInput>
    create: XOR<CommentCreateWithoutProfileInput, CommentUncheckedCreateWithoutProfileInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutProfileInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutProfileInput, CommentUncheckedUpdateWithoutProfileInput>
  }

  export type CommentUpdateManyWithWhereWithoutProfileInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutProfileInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    profileId?: StringFilter<"Comment"> | string
    pixelArtId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowingInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: StringFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type StreakUpsertWithWhereUniqueWithoutProfileInput = {
    where: StreakWhereUniqueInput
    update: XOR<StreakUpdateWithoutProfileInput, StreakUncheckedUpdateWithoutProfileInput>
    create: XOR<StreakCreateWithoutProfileInput, StreakUncheckedCreateWithoutProfileInput>
  }

  export type StreakUpdateWithWhereUniqueWithoutProfileInput = {
    where: StreakWhereUniqueInput
    data: XOR<StreakUpdateWithoutProfileInput, StreakUncheckedUpdateWithoutProfileInput>
  }

  export type StreakUpdateManyWithWhereWithoutProfileInput = {
    where: StreakScalarWhereInput
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyWithoutProfileInput>
  }

  export type StreakScalarWhereInput = {
    AND?: StreakScalarWhereInput | StreakScalarWhereInput[]
    OR?: StreakScalarWhereInput[]
    NOT?: StreakScalarWhereInput | StreakScalarWhereInput[]
    id?: StringFilter<"Streak"> | string
    profileId?: StringFilter<"Streak"> | string
    startDate?: DateTimeFilter<"Streak"> | Date | string
    endDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    count?: IntFilter<"Streak"> | number
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
  }

  export type BadgeOnProfileUpsertWithWhereUniqueWithoutProfileInput = {
    where: BadgeOnProfileWhereUniqueInput
    update: XOR<BadgeOnProfileUpdateWithoutProfileInput, BadgeOnProfileUncheckedUpdateWithoutProfileInput>
    create: XOR<BadgeOnProfileCreateWithoutProfileInput, BadgeOnProfileUncheckedCreateWithoutProfileInput>
  }

  export type BadgeOnProfileUpdateWithWhereUniqueWithoutProfileInput = {
    where: BadgeOnProfileWhereUniqueInput
    data: XOR<BadgeOnProfileUpdateWithoutProfileInput, BadgeOnProfileUncheckedUpdateWithoutProfileInput>
  }

  export type BadgeOnProfileUpdateManyWithWhereWithoutProfileInput = {
    where: BadgeOnProfileScalarWhereInput
    data: XOR<BadgeOnProfileUpdateManyMutationInput, BadgeOnProfileUncheckedUpdateManyWithoutProfileInput>
  }

  export type BadgeOnProfileScalarWhereInput = {
    AND?: BadgeOnProfileScalarWhereInput | BadgeOnProfileScalarWhereInput[]
    OR?: BadgeOnProfileScalarWhereInput[]
    NOT?: BadgeOnProfileScalarWhereInput | BadgeOnProfileScalarWhereInput[]
    id?: StringFilter<"BadgeOnProfile"> | string
    profileId?: StringFilter<"BadgeOnProfile"> | string
    badgeId?: StringFilter<"BadgeOnProfile"> | string
    awardedAt?: DateTimeFilter<"BadgeOnProfile"> | Date | string
  }

  export type ProfileCreateWithoutPixelArtsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutPixelArtsInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutPixelArtsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPixelArtsInput, ProfileUncheckedCreateWithoutPixelArtsInput>
  }

  export type DailyPromptCreateWithoutPixelArtsInput = {
    id?: string
    prompt: string
    promptDescription: string
    promptDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPromptUncheckedCreateWithoutPixelArtsInput = {
    id?: string
    prompt: string
    promptDescription: string
    promptDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyPromptCreateOrConnectWithoutPixelArtsInput = {
    where: DailyPromptWhereUniqueInput
    create: XOR<DailyPromptCreateWithoutPixelArtsInput, DailyPromptUncheckedCreateWithoutPixelArtsInput>
  }

  export type LikeCreateWithoutPixelArtInput = {
    id?: string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutPixelArtInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutPixelArtInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutPixelArtInput, LikeUncheckedCreateWithoutPixelArtInput>
  }

  export type LikeCreateManyPixelArtInputEnvelope = {
    data: LikeCreateManyPixelArtInput | LikeCreateManyPixelArtInput[]
  }

  export type CommentCreateWithoutPixelArtInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPixelArtInput = {
    id?: string
    content: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPixelArtInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPixelArtInput, CommentUncheckedCreateWithoutPixelArtInput>
  }

  export type CommentCreateManyPixelArtInputEnvelope = {
    data: CommentCreateManyPixelArtInput | CommentCreateManyPixelArtInput[]
  }

  export type ProfileUpsertWithoutPixelArtsInput = {
    update: XOR<ProfileUpdateWithoutPixelArtsInput, ProfileUncheckedUpdateWithoutPixelArtsInput>
    create: XOR<ProfileCreateWithoutPixelArtsInput, ProfileUncheckedCreateWithoutPixelArtsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPixelArtsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPixelArtsInput, ProfileUncheckedUpdateWithoutPixelArtsInput>
  }

  export type ProfileUpdateWithoutPixelArtsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPixelArtsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type DailyPromptUpsertWithoutPixelArtsInput = {
    update: XOR<DailyPromptUpdateWithoutPixelArtsInput, DailyPromptUncheckedUpdateWithoutPixelArtsInput>
    create: XOR<DailyPromptCreateWithoutPixelArtsInput, DailyPromptUncheckedCreateWithoutPixelArtsInput>
    where?: DailyPromptWhereInput
  }

  export type DailyPromptUpdateToOneWithWhereWithoutPixelArtsInput = {
    where?: DailyPromptWhereInput
    data: XOR<DailyPromptUpdateWithoutPixelArtsInput, DailyPromptUncheckedUpdateWithoutPixelArtsInput>
  }

  export type DailyPromptUpdateWithoutPixelArtsInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    promptDescription?: StringFieldUpdateOperationsInput | string
    promptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPromptUncheckedUpdateWithoutPixelArtsInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    promptDescription?: StringFieldUpdateOperationsInput | string
    promptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutPixelArtInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutPixelArtInput, LikeUncheckedUpdateWithoutPixelArtInput>
    create: XOR<LikeCreateWithoutPixelArtInput, LikeUncheckedCreateWithoutPixelArtInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutPixelArtInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutPixelArtInput, LikeUncheckedUpdateWithoutPixelArtInput>
  }

  export type LikeUpdateManyWithWhereWithoutPixelArtInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutPixelArtInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutPixelArtInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPixelArtInput, CommentUncheckedUpdateWithoutPixelArtInput>
    create: XOR<CommentCreateWithoutPixelArtInput, CommentUncheckedCreateWithoutPixelArtInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPixelArtInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPixelArtInput, CommentUncheckedUpdateWithoutPixelArtInput>
  }

  export type CommentUpdateManyWithWhereWithoutPixelArtInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPixelArtInput>
  }

  export type PixelArtCreateWithoutDailyPromptInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutPixelArtsInput
    likes?: LikeCreateNestedManyWithoutPixelArtInput
    comments?: CommentCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtUncheckedCreateWithoutDailyPromptInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPixelArtInput
    comments?: CommentUncheckedCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtCreateOrConnectWithoutDailyPromptInput = {
    where: PixelArtWhereUniqueInput
    create: XOR<PixelArtCreateWithoutDailyPromptInput, PixelArtUncheckedCreateWithoutDailyPromptInput>
  }

  export type PixelArtCreateManyDailyPromptInputEnvelope = {
    data: PixelArtCreateManyDailyPromptInput | PixelArtCreateManyDailyPromptInput[]
  }

  export type PixelArtUpsertWithWhereUniqueWithoutDailyPromptInput = {
    where: PixelArtWhereUniqueInput
    update: XOR<PixelArtUpdateWithoutDailyPromptInput, PixelArtUncheckedUpdateWithoutDailyPromptInput>
    create: XOR<PixelArtCreateWithoutDailyPromptInput, PixelArtUncheckedCreateWithoutDailyPromptInput>
  }

  export type PixelArtUpdateWithWhereUniqueWithoutDailyPromptInput = {
    where: PixelArtWhereUniqueInput
    data: XOR<PixelArtUpdateWithoutDailyPromptInput, PixelArtUncheckedUpdateWithoutDailyPromptInput>
  }

  export type PixelArtUpdateManyWithWhereWithoutDailyPromptInput = {
    where: PixelArtScalarWhereInput
    data: XOR<PixelArtUpdateManyMutationInput, PixelArtUncheckedUpdateManyWithoutDailyPromptInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProfileCreateWithoutLikesInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutLikesInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutLikesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutLikesInput, ProfileUncheckedCreateWithoutLikesInput>
  }

  export type PixelArtCreateWithoutLikesInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutPixelArtsInput
    dailyPrompt?: DailyPromptCreateNestedOneWithoutPixelArtsInput
    comments?: CommentCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtUncheckedCreateWithoutLikesInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    profileId: string
    dailyPromptId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtCreateOrConnectWithoutLikesInput = {
    where: PixelArtWhereUniqueInput
    create: XOR<PixelArtCreateWithoutLikesInput, PixelArtUncheckedCreateWithoutLikesInput>
  }

  export type ProfileUpsertWithoutLikesInput = {
    update: XOR<ProfileUpdateWithoutLikesInput, ProfileUncheckedUpdateWithoutLikesInput>
    create: XOR<ProfileCreateWithoutLikesInput, ProfileUncheckedCreateWithoutLikesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutLikesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutLikesInput, ProfileUncheckedUpdateWithoutLikesInput>
  }

  export type ProfileUpdateWithoutLikesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutLikesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PixelArtUpsertWithoutLikesInput = {
    update: XOR<PixelArtUpdateWithoutLikesInput, PixelArtUncheckedUpdateWithoutLikesInput>
    create: XOR<PixelArtCreateWithoutLikesInput, PixelArtUncheckedCreateWithoutLikesInput>
    where?: PixelArtWhereInput
  }

  export type PixelArtUpdateToOneWithWhereWithoutLikesInput = {
    where?: PixelArtWhereInput
    data: XOR<PixelArtUpdateWithoutLikesInput, PixelArtUncheckedUpdateWithoutLikesInput>
  }

  export type PixelArtUpdateWithoutLikesInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutPixelArtsNestedInput
    dailyPrompt?: DailyPromptUpdateOneWithoutPixelArtsNestedInput
    comments?: CommentUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateWithoutLikesInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    profileId?: StringFieldUpdateOperationsInput | string
    dailyPromptId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPixelArtNestedInput
  }

  export type ProfileCreateWithoutFollowingInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutFollowingInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutFollowingInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
  }

  export type ProfileCreateWithoutFollowersInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutFollowersInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutFollowersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
  }

  export type ProfileUpsertWithoutFollowingInput = {
    update: XOR<ProfileUpdateWithoutFollowingInput, ProfileUncheckedUpdateWithoutFollowingInput>
    create: XOR<ProfileCreateWithoutFollowingInput, ProfileUncheckedCreateWithoutFollowingInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFollowingInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFollowingInput, ProfileUncheckedUpdateWithoutFollowingInput>
  }

  export type ProfileUpdateWithoutFollowingInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFollowingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUpsertWithoutFollowersInput = {
    update: XOR<ProfileUpdateWithoutFollowersInput, ProfileUncheckedUpdateWithoutFollowersInput>
    create: XOR<ProfileCreateWithoutFollowersInput, ProfileUncheckedCreateWithoutFollowersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFollowersInput, ProfileUncheckedUpdateWithoutFollowersInput>
  }

  export type ProfileUpdateWithoutFollowersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFollowersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutCommentsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutCommentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
  }

  export type PixelArtCreateWithoutCommentsInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutPixelArtsInput
    dailyPrompt?: DailyPromptCreateNestedOneWithoutPixelArtsInput
    likes?: LikeCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtUncheckedCreateWithoutCommentsInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    profileId: string
    dailyPromptId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPixelArtInput
  }

  export type PixelArtCreateOrConnectWithoutCommentsInput = {
    where: PixelArtWhereUniqueInput
    create: XOR<PixelArtCreateWithoutCommentsInput, PixelArtUncheckedCreateWithoutCommentsInput>
  }

  export type ProfileUpsertWithoutCommentsInput = {
    update: XOR<ProfileUpdateWithoutCommentsInput, ProfileUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCommentsInput, ProfileUncheckedUpdateWithoutCommentsInput>
  }

  export type ProfileUpdateWithoutCommentsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PixelArtUpsertWithoutCommentsInput = {
    update: XOR<PixelArtUpdateWithoutCommentsInput, PixelArtUncheckedUpdateWithoutCommentsInput>
    create: XOR<PixelArtCreateWithoutCommentsInput, PixelArtUncheckedCreateWithoutCommentsInput>
    where?: PixelArtWhereInput
  }

  export type PixelArtUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PixelArtWhereInput
    data: XOR<PixelArtUpdateWithoutCommentsInput, PixelArtUncheckedUpdateWithoutCommentsInput>
  }

  export type PixelArtUpdateWithoutCommentsInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutPixelArtsNestedInput
    dailyPrompt?: DailyPromptUpdateOneWithoutPixelArtsNestedInput
    likes?: LikeUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateWithoutCommentsInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    profileId?: StringFieldUpdateOperationsInput | string
    dailyPromptId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPixelArtNestedInput
  }

  export type ProfileCreateWithoutStreaksInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    badges?: BadgeOnProfileCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutStreaksInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    badges?: BadgeOnProfileUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutStreaksInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutStreaksInput, ProfileUncheckedCreateWithoutStreaksInput>
  }

  export type ProfileUpsertWithoutStreaksInput = {
    update: XOR<ProfileUpdateWithoutStreaksInput, ProfileUncheckedUpdateWithoutStreaksInput>
    create: XOR<ProfileCreateWithoutStreaksInput, ProfileUncheckedCreateWithoutStreaksInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutStreaksInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutStreaksInput, ProfileUncheckedUpdateWithoutStreaksInput>
  }

  export type ProfileUpdateWithoutStreaksInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    badges?: BadgeOnProfileUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutStreaksInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    badges?: BadgeOnProfileUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type BadgeOnProfileCreateWithoutBadgeInput = {
    id?: string
    awardedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutBadgesInput
  }

  export type BadgeOnProfileUncheckedCreateWithoutBadgeInput = {
    id?: string
    profileId: string
    awardedAt?: Date | string
  }

  export type BadgeOnProfileCreateOrConnectWithoutBadgeInput = {
    where: BadgeOnProfileWhereUniqueInput
    create: XOR<BadgeOnProfileCreateWithoutBadgeInput, BadgeOnProfileUncheckedCreateWithoutBadgeInput>
  }

  export type BadgeOnProfileCreateManyBadgeInputEnvelope = {
    data: BadgeOnProfileCreateManyBadgeInput | BadgeOnProfileCreateManyBadgeInput[]
  }

  export type BadgeOnProfileUpsertWithWhereUniqueWithoutBadgeInput = {
    where: BadgeOnProfileWhereUniqueInput
    update: XOR<BadgeOnProfileUpdateWithoutBadgeInput, BadgeOnProfileUncheckedUpdateWithoutBadgeInput>
    create: XOR<BadgeOnProfileCreateWithoutBadgeInput, BadgeOnProfileUncheckedCreateWithoutBadgeInput>
  }

  export type BadgeOnProfileUpdateWithWhereUniqueWithoutBadgeInput = {
    where: BadgeOnProfileWhereUniqueInput
    data: XOR<BadgeOnProfileUpdateWithoutBadgeInput, BadgeOnProfileUncheckedUpdateWithoutBadgeInput>
  }

  export type BadgeOnProfileUpdateManyWithWhereWithoutBadgeInput = {
    where: BadgeOnProfileScalarWhereInput
    data: XOR<BadgeOnProfileUpdateManyMutationInput, BadgeOnProfileUncheckedUpdateManyWithoutBadgeInput>
  }

  export type ProfileCreateWithoutBadgesInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    pixelArts?: PixelArtCreateNestedManyWithoutProfileInput
    likes?: LikeCreateNestedManyWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutProfileInput
    followers?: FollowCreateNestedManyWithoutFollowingInput
    following?: FollowCreateNestedManyWithoutFollowerInput
    streaks?: StreakCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutBadgesInput = {
    id?: string
    userId: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarConfig?: InputJsonValue | null
    bio?: string | null
    socialLinks?: InputJsonValue | null
    pixelArtCount?: number
    likesReceivedCount?: number
    pixelArtLikedCount?: number
    commentCount?: number
    currentStreak?: number
    maxStreakCount?: number
    lastActivity?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pixelArts?: PixelArtUncheckedCreateNestedManyWithoutProfileInput
    likes?: LikeUncheckedCreateNestedManyWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    streaks?: StreakUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutBadgesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutBadgesInput, ProfileUncheckedCreateWithoutBadgesInput>
  }

  export type BadgeCreateWithoutProfilesInput = {
    id: string
    name: string
    description: string
    icon: string
    requirement?: number
    type: string
  }

  export type BadgeUncheckedCreateWithoutProfilesInput = {
    id: string
    name: string
    description: string
    icon: string
    requirement?: number
    type: string
  }

  export type BadgeCreateOrConnectWithoutProfilesInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutProfilesInput, BadgeUncheckedCreateWithoutProfilesInput>
  }

  export type ProfileUpsertWithoutBadgesInput = {
    update: XOR<ProfileUpdateWithoutBadgesInput, ProfileUncheckedUpdateWithoutBadgesInput>
    create: XOR<ProfileCreateWithoutBadgesInput, ProfileUncheckedCreateWithoutBadgesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutBadgesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutBadgesInput, ProfileUncheckedUpdateWithoutBadgesInput>
  }

  export type ProfileUpdateWithoutBadgesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    pixelArts?: PixelArtUpdateManyWithoutProfileNestedInput
    likes?: LikeUpdateManyWithoutProfileNestedInput
    comments?: CommentUpdateManyWithoutProfileNestedInput
    followers?: FollowUpdateManyWithoutFollowingNestedInput
    following?: FollowUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutBadgesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarConfig?: InputJsonValue | InputJsonValue | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: InputJsonValue | InputJsonValue | null
    pixelArtCount?: IntFieldUpdateOperationsInput | number
    likesReceivedCount?: IntFieldUpdateOperationsInput | number
    pixelArtLikedCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreakCount?: IntFieldUpdateOperationsInput | number
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArts?: PixelArtUncheckedUpdateManyWithoutProfileNestedInput
    likes?: LikeUncheckedUpdateManyWithoutProfileNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type BadgeUpsertWithoutProfilesInput = {
    update: XOR<BadgeUpdateWithoutProfilesInput, BadgeUncheckedUpdateWithoutProfilesInput>
    create: XOR<BadgeCreateWithoutProfilesInput, BadgeUncheckedCreateWithoutProfilesInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutProfilesInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutProfilesInput, BadgeUncheckedUpdateWithoutProfilesInput>
  }

  export type BadgeUpdateWithoutProfilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    requirement?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeUncheckedUpdateWithoutProfilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    requirement?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PixelArtCreateManyProfileInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    dailyPromptId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyProfileInput = {
    id?: string
    pixelArtId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyProfileInput = {
    id?: string
    content: string
    pixelArtId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowCreateManyFollowingInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
  }

  export type FollowCreateManyFollowerInput = {
    id?: string
    followingId: string
    createdAt?: Date | string
  }

  export type StreakCreateManyProfileInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeOnProfileCreateManyProfileInput = {
    id?: string
    badgeId: string
    awardedAt?: Date | string
  }

  export type PixelArtUpdateWithoutProfileInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyPrompt?: DailyPromptUpdateOneWithoutPixelArtsNestedInput
    likes?: LikeUpdateManyWithoutPixelArtNestedInput
    comments?: CommentUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateWithoutProfileInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    dailyPromptId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPixelArtNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateManyWithoutProfileInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    dailyPromptId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArt?: PixelArtUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutProfileInput = {
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutProfileInput = {
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutProfileInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pixelArt?: PixelArtUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutProfileInput = {
    content?: StringFieldUpdateOperationsInput | string
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutProfileInput = {
    content?: StringFieldUpdateOperationsInput | string
    pixelArtId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFollowingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: ProfileUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowingInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowingInput = {
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFollowerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: ProfileUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUpdateWithoutProfileInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateWithoutProfileInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateManyWithoutProfileInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeOnProfileUpdateWithoutProfileInput = {
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type BadgeOnProfileUncheckedUpdateWithoutProfileInput = {
    badgeId?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeOnProfileUncheckedUpdateManyWithoutProfileInput = {
    badgeId?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyPixelArtInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyPixelArtInput = {
    id?: string
    content: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateWithoutPixelArtInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutPixelArtInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutPixelArtInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPixelArtInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPixelArtInput = {
    content?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPixelArtInput = {
    content?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PixelArtCreateManyDailyPromptInput = {
    id?: string
    data: string
    gridSize?: number
    imageUrl: string
    title: string
    editable?: boolean
    addToTodaysPixelArts?: boolean
    likesCount?: number
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PixelArtUpdateWithoutDailyPromptInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutPixelArtsNestedInput
    likes?: LikeUpdateManyWithoutPixelArtNestedInput
    comments?: CommentUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateWithoutDailyPromptInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPixelArtNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPixelArtNestedInput
  }

  export type PixelArtUncheckedUpdateManyWithoutDailyPromptInput = {
    data?: StringFieldUpdateOperationsInput | string
    gridSize?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    editable?: BoolFieldUpdateOperationsInput | boolean
    addToTodaysPixelArts?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeOnProfileCreateManyBadgeInput = {
    id?: string
    profileId: string
    awardedAt?: Date | string
  }

  export type BadgeOnProfileUpdateWithoutBadgeInput = {
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type BadgeOnProfileUncheckedUpdateWithoutBadgeInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeOnProfileUncheckedUpdateManyWithoutBadgeInput = {
    profileId?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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