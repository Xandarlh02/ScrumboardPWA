namespace ScrumboardApi.Models
{
	public class Assignment
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public ICollection<User>? Users { get; set; }
	}
}
