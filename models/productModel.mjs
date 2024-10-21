import dataFileManager from '../utils/DataFileManager.mjs'

class Product {
  static getAll() {
    return dataFileManager.loadData()
  }

  static getById(id) {
    return dataFileManager.getItemById(id)
  }

  static create(product) {
    dataFileManager.addItem({ id: new Date().getTime(), ...product })
  }

  static update(id, updatedProduct) {
    console.log('updatedProduct')
    console.log(updatedProduct)

    dataFileManager.updateItemById(id, updatedProduct)
  }

  static delete(id) {
    dataFileManager.deleteItemById(id)
  }
}

export default Product
