import { Employee } from "@/app/dashboard/(pages)/employees/columns";
import rö from "@/public/images/rö.jpg";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";


// Mockdata for the eployees page, employees table (if adding more add image for avatar)
export const employees: Employee[] = [
    {
      id: 1,
      firstName: "Ragnar",
      lastName: "Öst",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/rö.jpg",
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Phillips",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 3,
      firstName: "Liam",
      lastName: "Fuentes",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 4,
      firstName: "Tina",
      lastName: "Fey",
      teamName: "canary",
      isTeamLeader: true,
      avatar: "/images/tf.jpg",
    },
    {
      id: 5,
      firstName: "Katie",
      lastName: "Johnson",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 6,
      firstName: "Tina",
      lastName: "Jones",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 7,
      firstName: "Amy",
      lastName: "Adams",
      teamName: "delta",
      isTeamLeader: true,
    },
    {
      id: 8,
      firstName: "Ryan",
      lastName: "Lopez",
      teamName: "delta",
      isTeamLeader: false,
      avatar: "/images/rl.jpg",
    },
    {
      id: 9,
      firstName: "Jenny",
      lastName: "Jones",
      teamName: "delta",
      isTeamLeader: false,
    },
    {
      id: 10,
      firstName: "Colin",
      lastName: "Murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
  ];

// Mockdata for the teams stats page, Support ticket resolved line diagram
export const supportTicket = [
    {
      name: "Jan",
      delta: 40,
      alpha: 24,
      canary: 24,
    },
    {
      name: "Feb",
      delta: 30,
      alpha: 13,
      canary: 22,
    },
    {
      name: "Mar",
      delta: 20,
      alpha: 58,
      canary: 29,
    },
    {
      name: "Apr",
      delta: 14,
      alpha: 30,
      canary: 15,
    },
    {
      name: "May",
      delta: 29,
      alpha: 28,
      canary: 18,
    },
    {
      name: "Jun",
      delta: 19,
      alpha: 19,
      canary: 10,
    },
    {
      name: "Jul",
      delta: 34,
      alpha: 24,
      canary: 14,
    },
    {
      name: "Aug",
      delta: 21,
      alpha: 20,
      canary: 19,
    },
    {
      name: "Sep",
      delta: 49,
      alpha: 43,
      canary: 20,
    },
    {
      name: "Oct",
      delta: 43,
      alpha: 55,
      canary: 4,
    },
    {
      name: "Nov",
      delta: 39,
      alpha: 40,
      canary: 25,
    },
    {
      name: "Dec",
      delta: 34,
      alpha: 43,
      canary: 11,
    },
  ];

// Mockdata for the employee stats page, Employee work location trends diagram
export const workLocationTrends = [
    {
      name: "Jan",
      office: 82,
      wfh: 44,
    },
    {
      name: "Feb",
      office: 80,
      wfh: 40,
    },
    {
      name: "Mar",
      office: 83,
      wfh: 42,
    },
    {
      name: "Apr",
      office: 50,
      wfh: 50,
    },
    {
      name: "May",
      office: 40,
      wfh: 60,
    },
    {
      name: "Jun",
      office: 60,
      wfh: 40,
    },
    {
      name: "Jul",
      office: 55,
      wfh: 55,
    },
    {
      name: "Aug",
      office: 49,
      wfh: 61,
    },
    {
      name: "Sep",
      office: 44,
      wfh: 70,
    },
    {
      name: "Oct",
      office: 40,
      wfh: 40,
    },
    {
      name: "Nov",
      office: 50,
      wfh: 50,
    },
    {
      name: "Dec",
      office: 50,
      wfh: 50,
    },
  ];

  // Mockdata for the teams stats page, Team distrubution pie diagram
export const pieDiagramData = [
{
  id:"1",
  name: "Delta",
  value: 55,
  color: "#84cc16",
},
{
  id:"2",
  name: "Alpha",
  value: 34,
  color: "#3b82f6",
},
{
  id:"3",
  name: "Canary",
  value: 11,
  color: "#f97316",
},
];

// Mockdata for the teams stats page, Team leaders card
export const teamleaders = [
{
    firstName: "Ragnar",
    lastName: "Öst",
    avatar: rö,
},
{
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
},
{
    firstName: "Tom",
    lastName: "Phillips",
},
{
    firstName: "Liam",
    lastName: "Fuentes",
},
{
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
},
{
    firstName: "Katie",
    lastName: "Johnson",
},
{
    firstName: "Tina",
    lastName: "Jones",
},
{
    firstName: "Amy",
    lastName: "Adams",
},
{
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
},
{
    firstName: "Jenny",
    lastName: "Jones",
},
];


// Mockdata for the employee stats page, (Total employees, Employees present) cards
export const companyData = {
  totalEmployees: 100,
  employeesPressent: 80,
  getEmployeesPressentPercentage: function() {
    return (this.employeesPressent / this.totalEmployees) * 100;
  }
};