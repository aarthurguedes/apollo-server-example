import { readFile, writeFile } from 'fs'
import { resolve } from 'path'

const createRepository = name => {
    const path = resolve(__dirname, `../../data/${name}.json`)

    return {
        read: () => new Promise((resolve, reject) => {
            readFile(path, (error, data) => {
                error ? reject(error) : resolve(JSON.parse(data))
            })
        }),
        write: data => new Promise((resolve, reject) => {
            writeFile(path, JSON.stringify(data), error => {
                error ? reject(error) : resolve()
            })
        })
    }
}

export default createRepository
