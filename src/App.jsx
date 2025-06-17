import React, { useState } from 'react';

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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Submit Your Complaint</h2>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px' }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Complaint Description *</label>
          <textarea
            value={formData.complaint}
            onChange={(e) => setFormData({...formData, complaint: e.target.value})}
            placeholder="Describe your complaint in detail..."
            rows="4"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', resize: 'vertical' }}
            required
          />
        </div>
        
        <button 
          onClick={handleSubmit}
          style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            fontSize: '16px', 
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
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
    <div style={{ 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)', 
      marginBottom: '15px',
      border: `3px solid #007bff20`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '14px', color: '#666' }}>#{complaint.id}</span>
        <span style={{ 
          padding: '4px 8px', 
          borderRadius: '12px', 
          fontSize: '12px', 
          backgroundColor: getStatusColor(complaint.status),
          color: 'white'
        }}>
          {complaint.status}
        </span>
      </div>
      <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>{complaint.name}</h4>
      <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>{complaint.complaint}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ 
          padding: '4px 8px', 
          borderRadius: '12px', 
          fontSize: '12px', 
          backgroundColor: '#6c757d',
          color: 'white'
        }}>
          {complaint.department}
        </span>
        <span style={{ fontSize: '14px', color: '#666' }}>{complaint.submittedAt}</span>
      </div>
      {complaint.email && <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>📧 {complaint.email}</p>}
      {complaint.phone && <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>📞 {complaint.phone}</p>}
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
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Complaint Dashboard</h2>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#007bff', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>{filteredComplaints.length}</h3>
          <p style={{ margin: 0 }}>Total Complaints</p>
        </div>
        <div style={{ backgroundColor: '#ffc107', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>{getStatusCount('Pending')}</h3>
          <p style={{ margin: 0 }}>Pending</p>
        </div>
        <div style={{ backgroundColor: '#28a745', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>{getStatusCount('Resolved')}</h3>
          <p style={{ margin: 0 }}>Resolved</p>
        </div>
        <div style={{ backgroundColor: '#17a2b8', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>{getStatusCount('In Progress')}</h3>
          <p style={{ margin: 0 }}>In Progress</p>
        </div>
      </div>

      {/* Department Filter */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter by Department:</label>
        <select 
          value={selectedDepartment} 
          onChange={(e) => setSelectedDepartment(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ddd' }}
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {/* Department Header */}
      {selectedDepartment !== 'All' && (
        <h3 style={{ color: '#333', marginBottom: '20px' }}>
          {selectedDepartment} Department ({filteredComplaints.length} complaints)
        </h3>
      )}

      {/* Complaints List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {filteredComplaints.length > 0 ? (
          filteredComplaints.map(complaint => (
            <ComplaintCard key={complaint.id} complaint={complaint} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#666', gridColumn: '1 / -1' }}>
            No complaints found for the selected department.
          </p>
        )}
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <header style={{ 
        backgroundColor: '#343a40', 
        color: 'white', 
        padding: '20px', 
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: '0 0 20px 0' }}>🏛️ AI Complaint Management System</h1>
        <nav>
          <button 
            onClick={() => setCurrentView('dashboard')}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: currentView === 'dashboard' ? '#007bff' : 'transparent',
              color: 'white',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('submit')}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: currentView === 'submit' ? '#007bff' : 'transparent',
              color: 'white',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit Complaint
          </button>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        {currentView === 'dashboard' ? (
          <Dashboard complaints={complaints} />
        ) : (
          <ComplaintForm onSubmit={handleComplaintSubmit} />
        )}
      </main>
    </div>
  );
};

export default App;