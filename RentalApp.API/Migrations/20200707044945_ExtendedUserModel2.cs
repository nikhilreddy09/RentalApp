using Microsoft.EntityFrameworkCore.Migrations;

namespace RentalApp.API.Migrations
{
    public partial class ExtendedUserModel2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NickName",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "city",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "NickName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "city",
                table: "Users");
        }
    }
}
