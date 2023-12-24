import React, { useState } from "react";

interface TableProps {
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const handleCheckboxChange = (rowIndex: number) => {
    setSelectedRows({
      ...selectedRows,
      [rowIndex]: !selectedRows[rowIndex],
    });
  };

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="m-4">
      <table className="min-w-full divide-y divide-gray-200 p-4 border border-slate-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {Array.isArray(row[column])
                    ? row[column].map(
                        (
                          item: { key: string; value: string },
                          index: number
                        ) => (
                          <div key={index}>
                            <span>{item.key}: </span>
                            <span>{item.value}</span>
                          </div>
                        )
                      )
                    : row[column]}
                </td>
              ))}
              <td>
                <input
                  type="checkbox"
                  checked={!!selectedRows[rowIndex]}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
