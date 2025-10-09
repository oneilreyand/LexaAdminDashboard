import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { setBuddies } from '../store/action/buddyActions';
import Table from '../components/atoms/Table';
import Button from '../components/atoms/Button';
import TabsNav from '../components/molecules/TabsNav';
import Avatar from '../components/atoms/Avatar';
import BuddyInfoTab from '../components/organisms/BuddyInfoTab';
import BuddyBalance from '../components/molecules/BuddyBalance';
import BuddyAnalyticsTab from '../components/organisms/BuddyAnalyticsTab';
import BuddyVideosTab from '../components/organisms/BuddyVideosTab';

const BuddyListPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const buddies = useSelector((state) => state.buddies.buddies);
  const [selectedBuddy, setSelectedBuddy] = useState(null);

  useEffect(() => {
    dispatch(setBuddies());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('pathVideo', location.pathname);
  }, [location])

    const columns = [
      { key: 'id', label: 'ID' },
      {
        key: 'avatar',
        label: 'Avatar',
        render: (value, row) => {
          const avatarSrc = row.avatar && row.avatar.startsWith('https://i.pravatar.cc/')
            ? row.avatar
            : `https://i.pravatar.cc/40?u=${row.id}`;
          return <Avatar src={avatarSrc} alt={row.name} size="small" />;
        }
      },
      { key: 'name', label: 'Name' },
      { key: 'stack', label: 'Stack' },
      { key: 'joinDate', label: 'Join Date' },
      { key: 'experience', label: 'Experience' },
      {
        key: 'actions',
        label: 'Actions',
        render: (value, row) => (
          <Button
            variant="primary"
            size="small"
            onClick={() => setSelectedBuddy(row)}
          >
            View Details
          </Button>
        ),
      },
    ];

  if (selectedBuddy) {
    return <BuddyDetailPage buddy={selectedBuddy} onBack={() => setSelectedBuddy(null)} />;
  }

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 w-full mx-auto">
        <div className="text-center">
         
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <Table
            data={buddies}
            columns={columns}
            pagination={true}
            pageSize={3}
            showPageSizeOptions={true}
            pageSizeOptions={[5, 10, 20]}
            striped={true}
            hover={true}
            bordered={true}
            className="border-collapse"
          />
        </div>

        {buddies.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No buddies found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const BuddyDetailPage = ({ buddy, onBack }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('balance');

  const tabs = [
    { id: 'balance', label: 'Balance' },
    { id: 'videos', label: 'Videos' },
    { id: 'analytics', label: 'Analytics' },
  ];

  return (
    <div className="h-full">
      <div className="space-y-8 p-1 w-full mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="flex items-center gap-4 p-6">
            <Button
              styleType="outline"
              variant="secondary"
              size="small"
              borderless={false}
              onClick={onBack}>
              ← Back to List
            </Button>
          </div>
          <div className="flex">
            <div className="w-[30%] p-6 dark:border-gray-700">
              <BuddyInfoTab buddy={buddy} />
            </div>
            <div className="w-[70%] p-8">
              <TabsNav tabs={tabs} onTabChange={setActiveTab} />
              <div className="p-6">
                {activeTab === 'balance' && <BuddyBalance projects={buddy.projects} />}
                {activeTab === 'videos' && <BuddyVideosTab videos={buddy.videos} navigate={navigate} />}
                {activeTab === 'analytics' && <BuddyAnalyticsTab analytics={buddy.analytics} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BuddyListPage;
