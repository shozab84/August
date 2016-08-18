using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsForms1stDemo
{
    public partial class Form1 : Form
    {

        string name = "";// declaring a string variable, name
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //get the name from text box
            name = textBoxName.Text;

            //we wil work out how old the person is
            DateTime today = DateTime.Now.Date;
            TimeSpan ageDays = today - dateTimePicker1.Value;


            //working out his age in years

            int years = ((int)ageDays.TotalDays) / 365;


            //get date from date time picker to use in message
            int day = dateTimePicker1.Value.Day;

            //get the month as as word
            string month = dateTimePicker1.Value.ToString("MMMMM");

            //assemble message
            label3.Text = "Hello," + name + "! You will be" + (years + 1) + "years old on" + day + " " + month + " ";

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
