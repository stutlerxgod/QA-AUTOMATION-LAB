import { options as baseOptions, default as userFlow } from '../tests/userFlow.ts'
import { Options } from 'k6/options'

export const options: Options = {
    ...baseOptions,
    stages: [
        { duration: '5m', target: 20 },
        { duration: '30m', target: 20 },
        { duration: '5m', target: 0 },
    ],
}

export default userFlow
