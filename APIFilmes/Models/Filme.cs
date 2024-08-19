using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using APIFilmes.Models;

namespace APIFilmes.Models
{
    public class Filme
    {
        public int Id{get;set;}
        public string Titulo{get; set;} = null!;
        public string Date {get;set;} = null!;

        public string Genero {get;set;} = null;


    }
}