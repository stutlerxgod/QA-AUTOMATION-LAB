import { options as baseOptions, default as userFlow } from '../tests/userFlow.ts'
import { Options } from 'k6/options'

export const options: Options = {
    ...baseOptions,
    stages: [
        { duration: '1m', target: 20 },
        { duration: '1m', target: 50 },
        { duration: '1m', target: 100 },
        { duration: '1m', target: 150 },
        { duration: '1m', target: 0 },
    ],
}

export default userFlow
