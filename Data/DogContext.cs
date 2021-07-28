using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Dogpedia;

    public class DogContext : DbContext
    {
        public DogContext (DbContextOptions<DogContext> options)
            : base(options)
        {
        }

        public DbSet<Dog> Dog { get; set; }
    }
