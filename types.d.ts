import * as functools_kit from 'functools-kit';

interface ITest {
    pass(msg?: string): void;
    fail(msg?: string): void;
}
declare const test: (testName: string, cb: (t: ITest) => void) => Promise<void>;
declare const run: ((__filename: string, cb?: () => void) => Promise<void>) & functools_kit.ISingleshotClearable<(__filename: string, cb?: () => void) => Promise<void>>;

export { run, test };
