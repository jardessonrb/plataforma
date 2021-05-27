const { response } = require('express')
const express = require('express')
const router = express.Router()

const Aluno = require('../models/Aluno')

router.get('/alunos', (req, res) => {
    Aluno.query()
        .then(alunos => {
            res.json(alunos)
        })
})

router.get('/alunos/:id', (req, res) => {
    const { id } = req.params

    Aluno.query()
        .findById(id)
        .withGraphFetched('cursos')
        .then(alunos => {
            res.json(alunos)
        })
})

router.post('/alunos', (req, res) => {
    const { name, Email, birthdate, quantidade_cursos } = req.body
    const quantCursos = []
    if (quantidade_cursos) {
        quantidade_cursos.forEach(curso => {
            quantCursos.push({curso_id: curso})
        })
    }
    const data = []
    try {
        const transac =  async() => {
            const result = await Aluno.transaction(async trx => {
                const aluno = await Aluno.query(trx).insert({name,Email, birthdate});          
                if(quantCursos && quantCursos.length){
                    const relation = await aluno
                        .$relatedQuery('cursos_alunos', trx)
                        .insert(quantCursos);
                    data.push(aluno)
                    data[0].cursos = relation.map(project => { return curso.curso_id })
                }else{
                    data.push(aluno)
                }
                return data;
            });
            res.json(result)
        }
        transac()
      }catch (error) {
        console.log(
            'Oops ! An error ocurred'
        );
      }
})


module.exports = { router: router }