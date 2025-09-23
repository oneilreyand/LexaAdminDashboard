import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const AddEventForm = ({ onClose, onAddEvent, defaultDate, title = '', startTime = '', endTime = '', type = 'personal', description = '' }) => {
  const isEditing = title !== '';
  const formatDate = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const [formData, setFormData] = useState({
    title: title,
    date: defaultDate ? formatDate(defaultDate) : '',
    startTime: startTime,
    endTime: endTime,
    type: type,
    description: description,
  });

  useEffect(() => {
    if (defaultDate) {
      setFormData(prev => ({
        ...prev,
        date: formatDate(defaultDate)
      }));
    }
  }, [defaultDate]);

  useEffect(() => {
    setFormData({
      title: title,
      date: defaultDate ? formatDate(defaultDate) : '',
      startTime: startTime,
      endTime: endTime,
      type: type,
      description: description,
    });
  }, [title, startTime, endTime, type, description, defaultDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...formData,
      date: new Date(formData.date),
    };
    onAddEvent(newEvent);
    onClose();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Event' : 'Add New Event'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            disabled
          />
        </div>
        <div>
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            id="startTime"
            name="startTime"
            type="time"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="endTime">End Time</Label>
          <Input
            id="endTime"
            name="endTime"
            type="time"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="family">Family</option>
            <option value="holiday">Holiday</option>
          </select>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit">{isEditing ? 'Edit Event' : 'Add Event'}</Button>
          <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
