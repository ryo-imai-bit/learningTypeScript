type ActivityLog = {
  lastEvent: Date
  events: {
    id: string
    timestamp: Date
    type: 'Read' | 'Write'
  }[]
};

const activitylog: ActivityLog = {
  lastEvent: new Date(Math.random()),
  events: [{
    id: '2',
    timestamp: new Date(Math.random()),
    type: 'Read',
  }],
};

type Get = {
  <
    O extends object,
    K1 extends keyof O
  > (o: O, k1: K1): O[K1]
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1]
  > (o: O, k1: K1, k2: K2): O[K1][K2]
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2]
  > (o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
}

const get: Get = (object: any, ...keys: string[]) => {
  let result = object;
  keys.forEach(k => result = result[k]);
  return result;
};

console.log(get(activitylog, 'events', 0, 'type'));

// fail
// get(activitylog, 'bad');

// mapped type

type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}

type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}

type ReadonlyAccount = {
  -readonly [K in keyof Account]: Account[K]
}

type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K]
}

type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K]
}
