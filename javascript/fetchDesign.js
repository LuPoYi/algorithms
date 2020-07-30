// Get all color and return average color

function fetchDesign(id) {
  return Promise.resolve({
    designId: id,
    shapes: [
      { shapeId: 'basic-shape', color: { r: 55, g: 40, b: 255 }, children: [] },
      {
        shapeId: 'person', color: { r: 255, g: 255, b: 252 }, children: [
          { shapeId: 'person-head', color: { r: 255, g: 255, b: 255 }, children: [] },
          { shapeId: 'person-body', color: { r: 205, g: 255, b: 252 }, children: [] },
          { shapeId: 'person-legs', color: { r: 100, g: 255, b: 252 }, children: [] },
        ]
      },
      { shapeId: 'zigzag-polygon', color: { r: 205, g: 255, b: 252 }, children: [] },
      {
        shapeId: 'fish', color: { r: 205, g: 255, b: 252 }, children: [
          { shapeId: 'fish-eyes', color: { r: 255, g: 255, b: 255 }, children: [] },
          {
            shapeId: 'fish-fin', color: { r: 100, g: 66, b: 74 }, children: [
              { shapeId: 'fish-fin-part-1', color: { r: 93, g: 54, b: 55 }, children: [] },
              { shapeId: 'fish-fin-part-2', color: { r: 33, g: 255, b: 255 }, children: [] },
              { shapeId: 'fish-fin-part-3', color: { r: 128, g: 53, b: 255 }, children: [] },
            ]
          },
          { shapeId: 'fish-tail', color: { r: 255, g: 5, b: 255 }, children: [] },
        ]
      },
      {
        shapeId: 'person', color: { r: 255, g: 255, b: 252 }, children: [
          { shapeId: 'person-head', color: { r: 255, g: 255, b: 255 }, children: [] },
          { shapeId: 'person-body', color: { r: 205, g: 255, b: 252 }, children: [] },
          { shapeId: 'person-legs', color: { r: 100, g: 255, b: 252 }, children: [] },
        ]
      },
    ]
  })
}


let totalRed = 0
let totalGreen = 0
let totalBlue = 0
let count = 0

fetchDesign(1).then((value) => {
  calColor(value.shapes)
  console.log("red", totalRed / count)
  console.log("green", totalGreen / count)
  console.log("blue", totalBlue / count)
})

function calColor(children) {
  for (let item of children) {
    count++
    totalRed += item.color.r
    totalGreen += item.color.g
    totalBlue += item.color.b
    if (item.children.length > 0) {
      calColor(item.children) // recursive
    }
  }
}

// red 174.05882352941177
// green 192.8235294117647
// blue 231.1764705882353