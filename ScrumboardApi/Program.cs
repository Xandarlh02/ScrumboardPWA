using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ScrumboardApi.Data;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ScrumboardApiContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ScrumboardApiContext") ?? throw new InvalidOperationException("Connection string 'ScrumboardApiContext' not found.")));

// Add policy
builder.Services.AddCors(options =>
{
	options.AddDefaultPolicy(policy =>
	{
		policy.AllowAnyOrigin() // or AllowAnyOrigin()
		.AllowAnyHeader()
		.AllowAnyMethod()
		.AllowAnyOrigin();
	});
});

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable policy
app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
