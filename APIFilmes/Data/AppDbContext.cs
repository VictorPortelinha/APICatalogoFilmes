using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmes.Models;
using Microsoft.EntityFrameworkCore;

namespace APIFilmes.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base (options){

        }
        
        // Tabelas serão geradas via migrations no sql server
        public DbSet<Filme> Filmes {get;set;}
    }
}