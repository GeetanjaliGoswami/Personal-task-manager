import TaskCard from "./TaskCard";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

export default function TaskList({
  tasks,
  onDelete,
  onToggle,
  onEdit,
  onDragEnd,
}) {
  if (!tasks.length) {
    return (
      <div className="bg-white rounded-2xl shadow p-12 text-center">
        <div className="text-6xl">
          📋
        </div>

        <h2 className="text-2xl font-bold mt-4">
          No Tasks Found
        </h2>

        <p className="text-gray-500 mt-2">
          Create your first task to get started.
        </p>
      </div>
    );
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            {tasks.map(
              (task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={
                        provided.innerRef
                      }
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskCard
                        task={task}
                        onDelete={
                          onDelete
                        }
                        onToggle={
                          onToggle
                        }
                        onEdit={
                          onEdit
                        }
                      />
                    </div>
                  )}
                </Draggable>
              )
            )}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}