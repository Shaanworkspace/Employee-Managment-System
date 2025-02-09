const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix API Serialization Issue",
        "taskDescription": "Resolve incorrect API responses by debugging serialization issues and ensuring data accuracy through testing.",
        "taskDate": "2025-02-18",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize Database Queries",
        "taskDescription": "Analyze slow queries, optimize indexing, and enhance performance through caching techniques.",
        "taskDate": "2025-02-20",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Integrate Secure Payment Gateway",
        "taskDescription": "Implement and test a secure payment gateway ensuring transaction safety and fraud prevention.",
        "taskDate": "2025-02-25",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Implement OAuth Authentication",
        "taskDescription": "Integrate OAuth for secure user authentication and authorization.",
        "taskDate": "2025-02-28",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests for API",
        "taskDescription": "Develop unit tests for API endpoints to ensure reliability.",
        "taskDate": "2025-03-02",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Refactor Legacy Code",
        "taskDescription": "Improve code readability and maintainability by refactoring outdated modules.",
        "taskDate": "2025-03-05",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Enhance Logging Mechanism",
        "taskDescription": "Improve log tracking and debugging by implementing structured logging.",
        "taskDate": "2025-03-07",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Improve API Rate Limiting",
        "taskDescription": "Optimize API rate limits to prevent abuse and ensure scalability.",
        "taskDate": "2025-03-10",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Automate Deployment Scripts",
        "taskDescription": "Create automated scripts for seamless application deployment.",
        "taskDate": "2025-03-12",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounter": {
      "newTaskCount": 4,
      "acceptedTaskCount": 3,
      "completedTaskCount": 0,
      "avoidedTaskCount": 0,
      "failedTaskCount": 0,
      "codingTaskCount": 5
    }
  },{
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design UI for Dashboard",
        "taskDescription": "Create a responsive UI for the analytics dashboard.",
        "taskDate": "2025-02-18",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix CSS Styling Issues",
        "taskDescription": "Resolve inconsistent styling in different screen sizes.",
        "taskDate": "2025-02-20",
        "category": "Frontend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Integrate Chart.js for Reports",
        "taskDescription": "Add interactive charts to display sales reports.",
        "taskDate": "2025-02-22",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Enhance Accessibility Features",
        "taskDescription": "Improve ARIA labels and keyboard navigation support.",
        "taskDate": "2025-02-25",
        "category": "Frontend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize Image Loading",
        "taskDescription": "Implement lazy loading for better page performance.",
        "taskDate": "2025-02-28",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Develop UI Components Library",
        "taskDescription": "Create reusable UI components for consistency.",
        "taskDate": "2025-03-02",
        "category": "Frontend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Improve Navigation System",
        "taskDescription": "Redesign menu for better usability and responsiveness.",
        "taskDate": "2025-03-05",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Browser Compatibility Issues",
        "taskDescription": "Ensure compatibility with all major browsers.",
        "taskDate": "2025-03-07",
        "category": "Frontend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Implement Dark Mode",
        "taskDescription": "Add dark mode toggle for better user experience.",
        "taskDate": "2025-03-10",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounter": {
      "newTaskCount": 4,
      "acceptedTaskCount": 3,
      "completedTaskCount": 0,
      "avoidedTaskCount": 0,
      "failedTaskCount": 0,
      "codingTaskCount": 5
    }
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@gmail.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Implement Microservices Architecture",
        "taskDescription": "Break monolithic app into microservices for scalability.",
        "taskDate": "2025-02-18",
        "category": "Backend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize API Load Balancing",
        "taskDescription": "Improve request distribution using load balancer strategies.",
        "taskDate": "2025-02-20",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Secure API Endpoints",
        "taskDescription": "Apply JWT and OAuth authentication mechanisms.",
        "taskDate": "2025-02-22",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Enhance Data Encryption",
        "taskDescription": "Implement stronger encryption for user data protection.",
        "taskDate": "2025-02-25",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Create CI/CD Pipelines",
        "taskDescription": "Automate deployments using Jenkins and GitHub Actions.",
        "taskDate": "2025-02-28",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Improve API Caching Strategy",
        "taskDescription": "Use Redis for caching frequently accessed data.",
        "taskDate": "2025-03-02",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Migrate Database to PostgreSQL",
        "taskDescription": "Move from MySQL to PostgreSQL for better performance.",
        "taskDate": "2025-03-05",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize API Response Time",
        "taskDescription": "Reduce latency by optimizing query execution.",
        "taskDate": "2025-03-07",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Monitor Server Performance",
        "taskDescription": "Use Prometheus and Grafana for server health tracking.",
        "taskDate": "2025-03-10",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCounter": {
      "newTaskCount": 4,
      "acceptedTaskCount": 3,
      "completedTaskCount": 0,
      "avoidedTaskCount": 0,
      "failedTaskCount": 0,
      "codingTaskCount": 5
    }
  }
];


const admin =  [
  {
    "id": 1,
    "firstName": "Rajesh",
    "email": "admin1@gmail.com",
    "password": "123"
  }
   ,
  {
    "id": 2,
    "firstName": "Sonia",
    "email": "admin2@gmail.com",
    "password": "123"
  }
];


export  const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export  const getLocalStorage = () =>{
    let employees = JSON.parse(localStorage.getItem('employees'));
    let admin= JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}