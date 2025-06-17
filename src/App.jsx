import React, { useState } from 'react';
import './app.css';

// Mock AI function to categorize complaints
const categorizeComplaint = (complaint) => {
  const text = complaint.toLowerCase();
  
  // Agriculture & Farming
  if (text.includes('agriculture') || text.includes('farming') || text.includes('crop') || text.includes('farmer') || text.includes('seed') || text.includes('fertilizer')) {
    return 'Agriculture Department';
  }
  // Animal & Veterinary
  else if (text.includes('animal') || text.includes('veterinary') || text.includes('livestock') || text.includes('cattle') || text.includes('pet') || text.includes('vaccination')) {
    return 'Animal Husbandry & Veterinary Services Department';
  }
  // Buildings & Housing
  else if (text.includes('building') || text.includes('housing') || text.includes('construction') || text.includes('apartment') || text.includes('house') || text.includes('property')) {
    return 'Buildings & Housing Department';
  }
  // Commerce & Industries
  else if (text.includes('business') || text.includes('industry') || text.includes('commerce') || text.includes('trade') || text.includes('shop') || text.includes('market')) {
    return 'Commerce & Industries Department';
  }
  // Culture
  else if (text.includes('culture') || text.includes('art') || text.includes('festival') || text.includes('heritage') || text.includes('museum') || text.includes('cultural')) {
    return 'Culture Department';
  }
  // Education
  else if (text.includes('school') || text.includes('education') || text.includes('teacher') || text.includes('student') || text.includes('college') || text.includes('university')) {
    return 'Education Department';
  }
  // Electricity & Power
  else if (text.includes('electricity') || text.includes('power') || text.includes('light') || text.includes('electric') || text.includes('transformer') || text.includes('voltage')) {
    return 'Power Department';
  }
  // Finance & Tax
  else if (text.includes('tax') || text.includes('finance') || text.includes('money') || text.includes('payment') || text.includes('bill') || text.includes('revenue')) {
    return 'Finance Department';
  }
  // Forest & Environment
  else if (text.includes('forest') || text.includes('tree') || text.includes('environment') || text.includes('pollution') || text.includes('wildlife') || text.includes('green')) {
    return 'Forest & Environment Department';
  }
  // Health
  else if (text.includes('health') || text.includes('hospital') || text.includes('medical') || text.includes('doctor') || text.includes('medicine') || text.includes('clinic')) {
    return 'Health & Family Welfare Department';
  }
  // Horticulture
  else if (text.includes('garden') || text.includes('flower') || text.includes('plant') || text.includes('horticulture') || text.includes('nursery') || text.includes('landscaping')) {
    return 'Horticulture Department';
  }
  // Information Technology
  else if (text.includes('computer') || text.includes('internet') || text.includes('website') || text.includes('digital') || text.includes('software') || text.includes('technology')) {
    return 'Information Technology Department';
  }
  // Labour
  else if (text.includes('labour') || text.includes('worker') || text.includes('employment') || text.includes('job') || text.includes('wage') || text.includes('labor')) {
    return 'Labour Department';
  }
  // Land & Revenue
  else if (text.includes('land') || text.includes('property') || text.includes('revenue') || text.includes('record') || text.includes('mutation') || text.includes('ownership')) {
    return 'Land Revenue & Disaster Management Department';
  }
  // Law & Legal
  else if (text.includes('law') || text.includes('legal') || text.includes('court') || text.includes('lawyer') || text.includes('justice') || text.includes('police')) {
    return 'Law Department';
  }
  // Planning & Development
  else if (text.includes('planning') || text.includes('development') || text.includes('project') || text.includes('scheme') || text.includes('urban') || text.includes('rural')) {
    return 'Planning & Development Department';
  }
  // Public Health Engineering
  else if (text.includes('water') || text.includes('sewage') || text.includes('drainage') || text.includes('plumbing') || text.includes('sanitation') || text.includes('pipeline')) {
    return 'Public Health Engineering Department';
  }
  // Roads & Bridges
  else if (text.includes('road') || text.includes('bridge') || text.includes('highway') || text.includes('street') || text.includes('path') || text.includes('pothole')) {
    return 'Roads & Bridges Department';
  }
  // Transport
  else if (text.includes('transport') || text.includes('vehicle') || text.includes('bus') || text.includes('taxi') || text.includes('traffic') || text.includes('parking')) {
    return 'Transport Department';
  }
  // Tourism
  else if (text.includes('tourism') || text.includes('tourist') || text.includes('hotel') || text.includes('travel') || text.includes('destination') || text.includes('aviation')) {
    return 'Tourism & Civil Aviation Department';
  }
  // Women & Child Welfare
  else if (text.includes('women') || text.includes('child') || text.includes('senior') || text.includes('welfare') || text.includes('elderly') || text.includes('pension')) {
    return 'Women, Child, Senior Citizen and Divyangjan Welfare Department';
  }
  // Sports & Youth
  else if (text.includes('sports') || text.includes('youth') || text.includes('game') || text.includes('playground') || text.includes('stadium') || text.includes('fitness')) {
    return 'Sports & Youth Affairs Department';
  }
  // Skill Development
  else if (text.includes('skill') || text.includes('training') || text.includes('vocational') || text.includes('employment') || text.includes('course') || text.includes('certification')) {
    return 'Skill Development Department';
  }
  // Social Welfare
  else if (text.includes('social') || text.includes('welfare') || text.includes('charity') || text.includes('help') || text.includes('assistance') || text.includes('benefit')) {
    return 'Social Welfare Department';
  }
  // Water Resources
  else if (text.includes('water') || text.includes('irrigation') || text.includes('dam') || text.includes('reservoir') || text.includes('canal') || text.includes('river')) {
    return 'Water Resources Department';
  }
  // Mines & Geology
  else if (text.includes('mine') || text.includes('geology') || text.includes('mineral') || text.includes('stone') || text.includes('quarry') || text.includes('excavation')) {
    return 'Mines & Geology Department';
  }
  // Food & Civil Supplies
  else if (text.includes('food') || text.includes('ration') || text.includes('supply') || text.includes('grain') || text.includes('distribution') || text.includes('pds')) {
    return 'Food & Civil Supplies Department';
  }
  // Fisheries
  else if (text.includes('fish') || text.includes('fisheries') || text.includes('pond') || text.includes('aquaculture') || text.includes('fishing') || text.includes('marine')) {
    return 'Fisheries Department';
  }
  // Election
  else if (text.includes('election') || text.includes('voting') || text.includes('ballot') || text.includes('candidate') || text.includes('polling') || text.includes('electoral')) {
    return 'Election Department (Office of Chief Electoral Officer)';
  }
  // Default
  else {
    return 'Home Department';
  }
};

// Complaint Form Component
const ComplaintForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaint: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.complaint) {
      const department = categorizeComplaint(formData.complaint);
      const newComplaint = {
        id: Date.now(),
        ...formData,
        department,
        status: 'Pending',
        submittedAt: new Date().toLocaleDateString()
      };
      onSubmit(newComplaint);
      setFormData({ name: '', email: '', phone: '', complaint: '' });
      alert(`Complaint submitted successfully!\nAssigned to: ${department} Department`);
    }
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Submit Your Complaint</h2>
      <div className="form-card">
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label>Complaint Description *</label>
          <textarea
            value={formData.complaint}
            onChange={(e) => setFormData({...formData, complaint: e.target.value})}
            placeholder="Describe your complaint in detail..."
            rows="4"
            required
          />
        </div>
        
        <button 
          onClick={handleSubmit}
          className="submit-button"
        >
          Submit Complaint
        </button>
      </div>
    </div>
  );
};

// Individual Complaint Card Component
const ComplaintCard = ({ complaint }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Resolved': return '#28a745';
      case 'In Progress': return '#007bff';
      case 'Pending': return '#ffc107';
      default: return '#6c757d';
    }
  };

  return (
    <div className="complaint-card">
      <div className="complaint-header">
        <span className="complaint-id">#{complaint.id}</span>
        <span className="complaint-status" style={{ backgroundColor: getStatusColor(complaint.status) }}>
          {complaint.status}
        </span>
      </div>
      <h4 className="complaint-name">{complaint.name}</h4>
      <p className="complaint-description">{complaint.complaint}</p>
      <div className="complaint-footer">
        <span className="complaint-department">
          {complaint.department}
        </span>
        <span className="complaint-date">{complaint.submittedAt}</span>
      </div>
      {complaint.email && <p className="complaint-contact">📧 {complaint.email}</p>}
      {complaint.phone && <p className="complaint-contact">📞 {complaint.phone}</p>}
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ complaints }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  
  const departments = ['All', ...new Set(complaints.map(c => c.department))];
  
  const filteredComplaints = selectedDepartment === 'All' 
    ? complaints 
    : complaints.filter(c => c.department === selectedDepartment);

  const getStatusCount = (status) => {
    return filteredComplaints.filter(c => c.status === status).length;
  };

  return (
    <div className="dashboard-container">
      <h2 className="section-title">Complaint Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>{filteredComplaints.length}</h3>
          <p>Total Complaints</p>
        </div>
        <div className="stat-card pending">
          <h3>{getStatusCount('Pending')}</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card resolved">
          <h3>{getStatusCount('Resolved')}</h3>
          <p>Resolved</p>
        </div>
        <div className="stat-card in-progress">
          <h3>{getStatusCount('In Progress')}</h3>
          <p>In Progress</p>
        </div>
      </div>

      {/* Department Filter */}
      <div className="department-filter">
        <label>Filter by Department:</label>
        <select 
          value={selectedDepartment} 
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {/* Department Header */}
      {selectedDepartment !== 'All' && (
        <h3 className="department-header">
          {selectedDepartment} Department ({filteredComplaints.length} complaints)
        </h3>
      )}

      {/* Complaints List */}
      <div className="complaints-grid">
        {filteredComplaints.length > 0 ? (
          filteredComplaints.map(complaint => (
            <ComplaintCard key={complaint.id} complaint={complaint} />
          ))
        ) : (
          <p className="no-complaints">
            No complaints found for the selected department.
          </p>
        )}
      </div>
    </div>
  );
};

// Department Overview Component
const DepartmentOverview = ({ complaints }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  
  // Get all unique departments from complaints and their case counts
  const allDepartments = [
    'Agriculture Department',
    'Animal Husbandry & Veterinary Services Department',
    'Buildings & Housing Department',
    'Commerce & Industries Department',
    'Culture Department',
    'Education Department',
    'Power Department',
    'Finance Department',
    'Forest & Environment Department',
    'Health & Family Welfare Department',
    'Horticulture Department',
    'Information Technology Department',
    'Labour Department',
    'Land Revenue & Disaster Management Department',
    'Law Department',
    'Planning & Development Department',
    'Public Health Engineering Department',
    'Roads & Bridges Department',
    'Transport Department',
    'Tourism & Civil Aviation Department',
    'Women, Child, Senior Citizen and Divyangjan Welfare Department',
    'Sports & Youth Affairs Department',
    'Skill Development Department',
    'Social Welfare Department',
    'Water Resources Department',
    'Mines & Geology Department',
    'Food & Civil Supplies Department',
    'Fisheries Department',
    'Election Department (Office of Chief Electoral Officer)',
    'Home Department'
  ];

  const getDepartmentComplaints = (deptName) => {
    return complaints.filter(complaint => complaint.department === deptName);
  };

  const getDepartmentCaseCount = (deptName) => {
    return getDepartmentComplaints(deptName).length;
  };

  if (selectedDepartment) {
    const departmentComplaints = getDepartmentComplaints(selectedDepartment);
    
    return (
      <div className="department-details">
        <div className="back-button-container">
          <button 
            onClick={() => setSelectedDepartment(null)}
            className="back-button"
          >
            ← Back to Overview
          </button>
        </div>
        
        <h2 className="department-title">
          {selectedDepartment}
        </h2>
        <p className="department-subtitle">
          {departmentComplaints.length} complaint{departmentComplaints.length !== 1 ? 's' : ''}
        </p>
        
        {/* Complaints List */}
        <div className="department-complaints-grid">
          {departmentComplaints.length > 0 ? (
            departmentComplaints.map(complaint => (
              <ComplaintCard key={complaint.id} complaint={complaint} />
            ))
          ) : (
            <p className="no-complaints">
              No complaints found for this department.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overview-container">
      <h2 className="section-title">Department Overview</h2>
      
      {/* Department Cards Grid */}
      <div className="departments-grid">
        {allDepartments.map((deptName, index) => {
          const caseCount = getDepartmentCaseCount(deptName);
          return (
            <div 
              key={index}
              onClick={() => setSelectedDepartment(deptName)}
              className="department-card"
            >
              <h3>
                {deptName}
              </h3>
              <div className="case-count">
                {caseCount}
              </div>
              <p>
                No of cases : {caseCount}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      complaint: "Street lights are not working in my area for the past week",
      department: "Power Department",
      status: "Pending",
      submittedAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "9876543211",
      complaint: "Water supply is irregular and sometimes dirty water comes",
      department: "Public Health Engineering Department",
      status: "In Progress",
      submittedAt: "2024-01-14"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "9876543212",
      complaint: "Road has big potholes and needs urgent repair",
      department: "Roads & Bridges Department",
      status: "Resolved",
      submittedAt: "2024-01-13"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "9876543213",
      complaint: "School building needs maintenance for children safety",
      department: "Education Department",
      status: "Pending",
      submittedAt: "2024-01-12"
    },
    {
      id: 5,
      name: "Raj Kumar",
      email: "raj@example.com",
      phone: "9876543214",
      complaint: "Need help with farming subsidies and crop insurance",
      department: "Agriculture Department",
      status: "In Progress",
      submittedAt: "2024-01-11"
    }
  ]);
  
  const [currentView, setCurrentView] = useState('dashboard');

  const handleComplaintSubmit = (newComplaint) => {
    setComplaints([...complaints, newComplaint]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🏛️ AI Complaint Management System</h1>
        <nav>
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`nav-button ${currentView === 'dashboard' ? 'active' : ''}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('overview')}
            className={`nav-button ${currentView === 'overview' ? 'active' : ''}`}
          >
            Department Overview
          </button>
          <button 
            onClick={() => setCurrentView('submit')}
            className={`nav-button ${currentView === 'submit' ? 'active' : ''}`}
          >
            Submit Complaint
          </button>
        </nav>
      </header>

      <main className="app-main">
        {currentView === 'dashboard' && <Dashboard complaints={complaints} />}
        {currentView === 'overview' && <DepartmentOverview complaints={complaints} />}
        {currentView === 'submit' && <ComplaintForm onSubmit={handleComplaintSubmit} />}
      </main>
    </div>
  );
};

export default App;
