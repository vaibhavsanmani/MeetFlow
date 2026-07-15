import React from 'react';
import '../styles/EmptyState.module.css';

const EmptyState = ({
  title = 'No data available',
  description = 'There\'s nothing to show here yet.',
  icon = '📭',
  action = null,
  actionLabel = 'Take Action',
}) => {
  return (
    <div className="empty-state" role="status" aria-label={`Empty state: ${title}`}>
      <div className="empty-state-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-description">{description}</p>
      {action && (
        <button 
          className="empty-state-action"
          onClick={action}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

// Preset empty states
export const EmptyMeetings = (props) => (
  <EmptyState
    title="No meetings yet"
    description="You haven't attended any meetings. Start by joining or creating one!"
    icon="📞"
    {...props}
  />
);

export const EmptyHistory = (props) => (
  <EmptyState
    title="No call history"
    description="Your call history is empty. Connect with someone to get started!"
    icon="📋"
    {...props}
  />
);

export const EmptySearch = (props) => (
  <EmptyState
    title="No results found"
    description="Try searching with different keywords."
    icon="🔍"
    {...props}
  />
);

export const EmptyError = (props) => (
  <EmptyState
    title="Something went wrong"
    description="An error occurred while loading data. Please try again."
    icon="⚠️"
    {...props}
  />
);

export default EmptyState;
