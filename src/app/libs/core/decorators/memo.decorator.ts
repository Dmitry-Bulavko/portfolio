function memoize(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache: Map<string, any> = new Map<string, any>();

    descriptor.value = function(...args: any[]) {
        const cacheKey = key + JSON.stringify(args);
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        } else {
            const result = originalMethod.apply(this, args);
            cache.set(cacheKey, result);
            if (result instanceof Promise) {
                result.catch(() => {
                    cache.delete(cacheKey)
                });
            }
            return result;
        }
    };

    return descriptor;
}

export function Memo() {
    return memoize;
}
