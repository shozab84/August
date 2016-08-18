using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsForms2ndDemo
{
    public partial class Form1 : Form
    {
        int timeLeft = 60;
        bool q1Correct = false;
        bool q2Correct = false;
        bool q3correct = false;
        



        public Form1()
        {
            InitializeComponent();

            pictureBox1.Visible = false;

        }

        private void radioButton4_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if(q1Correct && q2Correct && q3correct)
            {
                timer1.Stop();
                MessageBox.Show("You got everything right.");
            }
            else if (timeLeft > 0)
            {
                // update  & display time left
                timeLeft--;
                labelTimeLeft.Text = timeLeft + "seconds"
            }

            else
            {
                // if the user runs out of time
                timer1.Stop();
                labelTimeLeft.Text = "Time's up!";
                MessageBox.Show("You ran out of time");
            }

        }
    }
}
