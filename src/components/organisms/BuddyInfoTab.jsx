import React from 'react';
import Card from '../atoms/Card';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Avatar from '../atoms/Avatar';
import Progress from '../atoms/Progress';
import { Check, Layout } from 'lucide-react';

const BuddyInfoTab = ({ buddy }) => {
  const avatarSrc = buddy.avatar && buddy.avatar.startsWith('https://i.pravatar.cc/')
    ? buddy.avatar
    : `https://i.pravatar.cc/96?u=${buddy.id}`;

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <Card>
        <div className="pt-6">
          <div className="flex flex-col items-center text-center mb-6">
            <Avatar src={avatarSrc} alt={buddy.name} size="xlarge" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-1">{buddy.name}</h3>
            <Badge variant="secondary" style={{paddingLeft: '10px', paddingRight: '10px'}}>{buddy.stack} Developer</Badge>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 p-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-lg font-semibold">{buddy.analytics.totalProjects}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Video</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-lg font-semibold">{buddy.analytics.completedProjects}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Completed</div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold">Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Username:</span>
                <span className="font-medium">@{buddy.name.toLowerCase().replace(' ', '')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Email:</span>
                <span className="font-medium">{buddy.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Status:</span>
                <Badge variant="success" size="small">Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Role:</span>
                <span className="font-medium">{buddy.stack} Developer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Experience:</span>
                <span className="font-medium">{buddy.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Contact:</span>
                <span className="font-medium">{buddy.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Location:</span>
                <span className="font-medium">{buddy.location}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button className="flex-1">Edit</Button>
          </div>
        </div>
      </Card>

      {/* Analytics Card */}
      <Card variant="primary">
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">Analytics</Badge>
            <div>
              <span className="text-3xl font-bold">{buddy.analytics.averageRating}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">/5 Rating</span>
            </div>
          </div>

          <ul className="space-y-2 text-sm mb-6">
            <li>• Total Video: {buddy.analytics.totalProjects}</li>
            <li>• Completed: {buddy.analytics.completedProjects}</li>
            <li>• Total Views: {buddy.analytics.totalViews.toLocaleString()}</li>
          </ul>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Growth</span>
              <span className="font-medium">{buddy.analytics.monthlyGrowth}%</span>
            </div>
            <Progress value={buddy.analytics.monthlyGrowth} />
            <p className="text-xs text-gray-500 dark:text-gray-400">Monthly Growth</p>
          </div>

          <Button className="w-full">View Details</Button>
        </div>
      </Card>
    </div>
  );
};

export default BuddyInfoTab;
