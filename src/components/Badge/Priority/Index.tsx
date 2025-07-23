interface BadgeProps {
    idPriority: number;
}

const getPriorityInfo = (idPriority: string | number) => {
    switch (idPriority) {
        case 1:
            return { colorClass: 'bg-label-success', label: 'Baixa' };
        case 2:
            return { colorClass: 'bg-label-error', label: 'Média' };
        case 3:
            return { colorClass: 'bg-label-warning', label: 'Alta' };
        default:
            return { colorClass: 'bg-label-success', label: 'Urgente' };
    }
};

export default function Badge({ idPriority }: BadgeProps) {
    const { colorClass, label } = getPriorityInfo(idPriority);

    return (
        <div className="d-flex flex-column">
            <small className={`text-truncate d-none d-sm-block badge ${colorClass}`}>
                {label}
            </small>
        </div>
    );
}