const express = require('express')
const router = express.Router()

const Curso = require('../models/Curso')

router.get('/cursos', (req, res) => {
    Curso.query()
        .then(cursos => {
            res.json(cursos)
        })
})

router.get('/cursos/:id', (req, res) => {
    const { id } = req.params
    Curso.query()
        .findById(id)
        .withGraphFetched('alunos')
        .then(cursos => {
            res.json(cursos)
        })
})

router.post('/cursos', (req, res) => {
    const { name,Descricao, quantidade_matriculados} = req.body
    const quantCursos = []
    if (alunos) {
        alunos.forEach(aluno => {
            quantCursos.push({aluno_id: aluno})
        })
    }
    const data = []
    try {
        const transac =  async() => {
            const result = await Curso.transaction(async trx => {
                const curso = await Curso.query(trx).insert({ name });          
                if(quantCursos && quantCursos.length){
                    const relation = await curso
                        .$relatedQuery('cursos_alunos', trx)
                        .insert(quantCursos);
                    data.push(curso)
                    data[0].alunos = relation.map(aluno => { return aluno.aluno_id })
                }else{
                    data.push(curso)
                }
                return data;
            });
            res.json(result)
        }
        transac()
    }catch (error) {
        console.log('Oops ! An error ocurred');
    }
})

module.exports = { router: router }