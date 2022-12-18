export const asyncStorageService = {
    query,
    post,
    get,
    put,
    remove,
    _save
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, 500)
    })
}

async function post(entityType, newEntity) {
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

export function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}



function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}