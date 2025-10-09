import React, { useState } from "react";
import { OffCanvas } from "../atoms/OffCanvas";
import KanbanCardHeader from "../molecules/KanbanCardHeader";
import KanbanCardContent from "../molecules/KanbanCardContent";
import KanbanAvatar from "../atoms/KanbanAvatar";
import KanbanLabel from "../atoms/KanbanLabel";
import Button from "../atoms/Button";
import TabsNav from "../molecules/TabsNav";
import { Calendar, MessageSquare, Paperclip, Edit, Activity } from "lucide-react";
import { format } from "date-fns";

export default function KanbanCardOffCanvas({
  isOpen,
  onClose,
  card = null
}) {
  const [activeTab, setActiveTab] = useState("edit");

  // Don't render anything if not open, but allow the OffCanvas to handle the animation

  // Show loading state if card is not available yet
  if (!card) {
    return (
      <OffCanvas isOpen={isOpen} onClose={onClose} position="right" size="large">
        <div className="h-full flex flex-col animate-in slide-in-from-right duration-300">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Loading Task Details...
            </h2>
          </div>
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading task information...</p>
            </div>
          </div>
        </div>
      </OffCanvas>
    );
  }

  // Mock activity data
  const activities = [
    {
      id: 1,
      userId: "john.doe",
      userName: "John Doe",
      userAvatar: "JD",
      action: "created this task",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    },
    {
      id: 2,
      userId: "jane.smith",
      userName: "Jane Smith",
      userAvatar: "JS",
      action: "added a comment",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    },
    {
      id: 3,
      userId: "mike.wilson",
      userName: "Mike Wilson",
      userAvatar: "MW",
      action: "updated the due date",
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    },
  ];

  const tabs = [
    {
      id: "edit",
      label: "Edit",
      icon: <Edit className="h-4 w-4" />,
    },
    {
      id: "activity",
      label: "Activity",
      icon: <Activity className="h-4 w-4" />,
    },
  ];

  return (
    <OffCanvas isOpen={isOpen} onClose={onClose} position="right" size="large">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Task Details
          </h2>
        </div>

        {/* Tabs Navigation */}
        <TabsNav tabs={tabs} onTabChange={setActiveTab} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "edit" && (
            <div className="space-y-6">
              {/* Card Header */}
              <div>
                <KanbanCardHeader
                  title={card.title}
                  priority={card.priority}
                  assignee={card.assignee}
                  labels={card.labels}
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Description
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {card.description || "No description provided."}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Due Date
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {card.dueDate || "No due date"}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Assignee
                  </h3>
                  <div className="flex items-center">
                    <KanbanAvatar name={card.assignee} size="small" />
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      {card.assignee || "Unassigned"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Labels */}
              {card.labels && card.labels.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Labels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {card.labels.map((label, index) => (
                      <KanbanLabel key={index} text={label} color="blue" />
                    ))}
                  </div>
                </div>
              )}

              {/* Comments */}
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Comments ({card.comments || 0})
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  {card.comments && card.comments > 0 ? (
                    <div className="space-y-3">
                      {/* Mock comments */}
                      <div className="flex space-x-3">
                        <KanbanAvatar name="John Doe" userId="john.doe" size="small" className="rounded-full" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900 dark:text-white text-sm">
                              John Doe
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                              2 hours ago
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                            Great progress on this task! The design looks really good.
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <KanbanAvatar name="Jane Smith" userId="jane.smith" size="small" className="rounded-full" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900 dark:text-white text-sm">
                              Jane Smith
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                              1 hour ago
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                            I agree! Let's make sure to test this thoroughly before deployment.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      No comments yet
                    </div>
                  )}
                </div>

                {/* Add Comment Form */}
                <div className="mt-4">
                  <textarea
                    placeholder="Add a comment..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <Button
                      styleType="basic"
                      variant="primary"
                      size="small"
                    >
                      Add Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Attachments */}
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Attachments (0)
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Paperclip className="h-4 w-4 mr-2" />
                    No attachments
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <KanbanAvatar name={activity.userName} size="sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {activity.userName}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {activity.userId}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                        {activity.action}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                        {format(activity.timestamp, "MMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <div className="flex space-x-3">
            <Button styleType="basic" variant="primary" size="small">
              Edit Task
            </Button>
            <Button styleType="outline" variant="secondary" size="small">
              Add Comment
            </Button>
          </div>
        </div>
      </div>
    </OffCanvas>
  );
}
