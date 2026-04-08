import { options as baseOptions, default as userFlow } from '../tests/userFlow.ts'
import { Options } from 'k6/options'

export const options: Options = {
    ...baseOptions,
    stages: [
        { duration: '30s', target: 5 },
        { duration: '10s', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '10s', target: 5 },
        { duration: '30s', target: 5 },
    ],
}

export default userFlow
