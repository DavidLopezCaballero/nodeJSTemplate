'use strict'

export function error404(req, res, next) {
  const error = {
    tittle: "Error 404",
    description: "Resource not found"
  }
  res.status(404).send(error)
}
