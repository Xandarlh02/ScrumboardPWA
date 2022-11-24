using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ScrumboardApi.Models;

namespace ScrumboardApi.Data
{
    public class ScrumboardApiContext : DbContext
    {
        public ScrumboardApiContext(DbContextOptions<ScrumboardApiContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Board>()
                .HasMany(e => e.Columns);

            modelBuilder
                .Entity<Column>()
                .HasMany(e => e.Assignments);
        }

        public DbSet<ScrumboardApi.Models.Board> Board { get; set; } = default!;

        public DbSet<ScrumboardApi.Models.Column> Column { get; set; }

        public DbSet<ScrumboardApi.Models.Assignment> Assignment { get; set; }

        public DbSet<ScrumboardApi.Models.User> User { get; set; }
    }
}
