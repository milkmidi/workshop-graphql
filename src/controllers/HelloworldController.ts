import { Request, Response } from 'express';

export default class HelloworldController {
  echo(req: Request, res: Response) {
    res.send('echo');
  }
}
