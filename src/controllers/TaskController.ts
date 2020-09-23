//Importações
import {Request, Response} from 'express';
import db from '../database/connection';

//Metodos
export async function index(request:Request,response:Response){
  const tasks= await db('task').select('*');
  return response.json(tasks);
}

export async function create(request:Request,response:Response){
const{plan}=request.body;
const insertTask=await db('task').insert({
  plan
});
console.log(insertTask)
return response.json(insertTask);

}



export async function destroy(request:Request,response:Response){
  const {id}=request.params
console.log(id)
  await db('task').where('id',id).delete();
  return response.status(204).send('Apagado')
}