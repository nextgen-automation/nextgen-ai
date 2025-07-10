import React from 'react';
import VoiceDemoLayout from './components/VoiceDemoLayout';

const VoiceDemoReminders: React.FC = () => {
  return (
    <VoiceDemoLayout
      title="Appointment Reminders Via Call"
      description="Experience our AI appointment reminder agent that can automatically call clients to remind them of upcoming appointments, reducing no-shows and improving your business efficiency."
      instructions="Yes, I'll be there, I need to reschedule, What time was my appointment?, Can you confirm the location?"
    />
  );
};

export default VoiceDemoReminders;