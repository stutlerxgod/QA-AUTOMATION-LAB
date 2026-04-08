import http from 'k6/http'
import { check, group, sleep } from 'k6'
import { Trend, Rate } from 'k6/metrics'
import { Options } from 'k6/options'

const responseTrend = new Trend('response_time', true)
const errorRate = new Rate('error_rate')

const BASE_URL = 'https://automationexercise.com'

export const options: Options = {
    thresholds: {
        response_time: ['p(95)<2000'],
        error_rate: ['rate<0.05'],
        http_req_duration: ['p(95)<2000'],
    },
}

export default function (): void {
    group('Home Page', () => {
        const res = http.get(BASE_URL)

        const ok = check(res, {
            'home: status 200': (r) => r.status === 200,
            'home: response < 2s': (r) => r.timings.duration < 2000,
        })

        responseTrend.add(res.timings.duration)
        errorRate.add(!ok)
        sleep(1)
    })

    group('Products Page', () => {
        const res = http.get(`${BASE_URL}/products`)

        const ok = check(res, {
            'products: status 200': (r) => r.status === 200,
            'products: response < 2s': (r) => r.timings.duration < 2000,
        })

        responseTrend.add(res.timings.duration)
        errorRate.add(!ok)
        sleep(1)
    })

    group('Search Product', () => {
        const res = http.get(`${BASE_URL}/products?search=dress`)

        const ok = check(res, {
            'search: status 200': (r) => r.status === 200,
            'search: response < 2s': (r) => r.timings.duration < 2000,
        })

        responseTrend.add(res.timings.duration)
        errorRate.add(!ok)
        sleep(1)
    })

    group('Product Details', () => {
        const res = http.get(`${BASE_URL}/product_details/1`)

        const ok = check(res, {
            'product details: status 200': (r) => r.status === 200,
            'product details: response < 2s': (r) => r.timings.duration < 2000,
        })

        responseTrend.add(res.timings.duration)
        errorRate.add(!ok)
        sleep(1)
    })

    group('Cart Page', () => {
        const res = http.get(`${BASE_URL}/view_cart`)

        const ok = check(res, {
            'cart: status 200': (r) => r.status === 200,
            'cart: response < 2s': (r) => r.timings.duration < 2000,
        })

        responseTrend.add(res.timings.duration)
        errorRate.add(!ok)
        sleep(1)
    })
}
