//priority: 10

function Datagen(event) {
    this.event = event

    this.blockModel = function () {
        return BlockModelDatagen()
    }

    return this
}
