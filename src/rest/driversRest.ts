/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Request, Response } from 'express'
import type { Driver } from '../model/driver'

export async function drivers (req: Request, res: Response) {
  const data = req.app.locals.drivers
  res.status(200).json({
    status: 'success',
    data
  })
}

export async function overtake (req: Request, res: Response) {
  try {
    const drivers: Driver[] = req.app.locals.drivers
    const id = parseInt(req.params.driverId, 10)
    if (id >= 0) {
      const driverA = drivers.find((driver) => driver.id === id)
      if (driverA == null) {
        console.log(
          `Bad request: driver with corresponding id=${id} was not found`
        )
        return res.status(404).send({
          error:
            `Bad request: driver with corresponding id=${id} was not found`
        })
      }
      if (driverA.place <= 1) {
        console.log('Bad request: driver place value must be bigger than 1')
        return res.status(400).send({
          error: 'Bad request: driver place value must be bigger than 1'
        })
      }

      const driverB = drivers.find(
        (driver) => driver.place === driverA.place - 1
      )

      if (driverB == null) {
        console.log('Internal server error: driver to overtake was not found')
        return res.status(500).send({
          error: 'Internal server error: driver to overtake was not found'
        })
      }

      [driverA.place, driverB.place] = [driverB.place, driverA.place]

      req.app.locals.drivers = drivers
      res.status(200).json({
        status: 'success'
      })
    } else {
      console.log('Bad request: invalid driver id')
      res.status(400).send({
        error: 'Bad request: invalid driver id'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Internal server error' })
  }
}
