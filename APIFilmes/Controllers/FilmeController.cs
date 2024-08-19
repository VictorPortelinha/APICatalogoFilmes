using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIFilmes.Data;
using APIFilmes.Models;

namespace APIFilmes.Controllers
{

    [ApiController]
    [Route("api/filmes")]
    
    public class FilmeController:ControllerBase
    {

        private readonly  AppDbContext _context;
        public FilmeController (AppDbContext context){
            // Contexto do banco de dados, um objeto que tem acesso aos membros(tabelas) e funções para a extração dos dados
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Filmes(){
            return Ok(await _context.Filmes.AsNoTracking().ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFilme(int id){
            var Filme = await _context.Filmes.FindAsync(id);
            if(Filme is null){
                return NotFound();
            }
            return Ok(Filme);
        }

        [HttpPost]
        public async Task<IActionResult> CriarFilme(Filme filme){
            // retorna código de bad request não tenha um filme para ser inserido no banco de dados
            if(filme is null){
                return BadRequest();
            }
            // Adciona o filme ao contexto do banco de dados
            await _context.Filmes.AddAsync(filme);
            // Salva as alterações no banco de dados
            await _context.SaveChangesAsync();

            return Ok(filme);
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> AtualizarFilme(Filme novoFilme, int id){
            if(id != novoFilme.Id) {
                return BadRequest();
            }
            _context.Entry(novoFilme).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeletarFilme(int id){
            var Filme = await _context.Filmes.FindAsync(id);
            if(Filme is null){
                return NotFound();
            }
            _context.Filmes.Remove(Filme);
            await _context.SaveChangesAsync();
            return Ok(Filme);
        }
    }
}