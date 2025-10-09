import React, { useState } from 'react';
import { User, Shield, CreditCard } from 'lucide-react';
import TabsNav from '../components/molecules/TabsNav';
import AccountSettings from './AccountSettings';
import SecuritySettings from './SecuritySettings';
import BillingSettings from './BillingSettings';

function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account', icon: <User className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'billing', label: 'Billing & Plans', icon: <CreditCard className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'billing':
        return <BillingSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full">
      {/* Header */}
      {/* <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sidebar-text dark:text-dark-text">Settings</h1>
      </div> */}

      {/* Tabs */}
      <div className="h-full mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full">
          <TabsNav tabs={tabs} onTabChange={setActiveTab} />
          {/* Content */}
          <div className="flex-grow w-full overflow-auto">
            {renderContent()}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Settings;
