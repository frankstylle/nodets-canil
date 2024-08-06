import { Request, Response } from 'express';

export const home = (req:Request, res:Response)=> {
    // res.render('pages/page');

    res.send('Page controller');
}

export const dogs = (req:Request, res:Response) => {

    res.send('Page dogs');
}

export const cats = (req:Request, res:Response) => {

    res.send('Page cats');
}

export const fishes = (req:Request, res:Response) => {

    res.send('Page fishes');
}
