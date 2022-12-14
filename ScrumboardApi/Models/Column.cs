namespace ScrumboardApi.Models
{
	public class Column
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string? Description { get; set; }
		public ICollection<Assignment>? Assignments { get; set; }
		public int? BoardId { get; set; }
	}
}
