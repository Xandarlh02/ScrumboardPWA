using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ScrumboardApi.Data;
using ScrumboardApi.Models;

namespace ScrumboardApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardsController : ControllerBase
    {
        private readonly ScrumboardApiContext _context;

        public BoardsController(ScrumboardApiContext context)
        {
            _context = context;
        }

        // GET: api/Boards - Get all boards
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Board>>> GetBoard()
        {
            return await _context.Board
                .Include(e => e.Columns)
                .ThenInclude(e => e.Assignments)
                .ThenInclude(e => e.Users)
                .ToListAsync();
        }

        // GET: api/Boards/5 - Get specific board on Id
        [HttpGet("{id}")]
        public async Task<ActionResult<Board>> GetBoard(int id)
        {
            var board = _context.Board
                .Include(e => e.Columns)
                .ThenInclude(e => e.Assignments)
                .ThenInclude(e => e.Users)
                .FirstOrDefault(e => e.Id == id);

            if (board == null)
            {
                return NotFound();
            }

            return board;
        }

        // PUT: api/Boards/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoard(int id, Board board)
        {
            if (id != board.Id)
            {
                return BadRequest();
            }

            _context.Entry(board).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Boards
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Board>> PostBoard(Board board)
        {
            _context.Board.Add(board);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBoard", new { id = board.Id }, board);
        }


        // DELETE: api/Boards/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBoard(int id)
        {
            var board = await _context.Board.FindAsync(id);
            if (board == null)
            {
                return NotFound();
            }

            _context.Board.Remove(board);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BoardExists(int id)
        {
            return _context.Board.Any(e => e.Id == id);
        }
    }
}
