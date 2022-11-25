namespace ScrumboardApi.Models
{
	public class Board
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public ICollection<Column>? Columns { get; set; }
		public int? OwnerId { get; set; }
	}
}
