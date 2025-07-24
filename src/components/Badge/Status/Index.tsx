interface BadgeProps {
    status: number;
}

const getStatus = (status: string | number) => {
    switch (status) {
        case 1:
            return { colorClass: 'bg-label-success', label: 'Ativo' };
        case 2:
            return { colorClass: 'bg-label-error', label: 'Inativo' };
        case 3:
            return { colorClass: 'bg-label-warning', label: 'Suspenso' };
        case 4:
            return { colorClass: 'bg-label-warning', label: 'Aberto' };
        case 5:
            return { colorClass: 'bg-label-warning', label: 'Pendente' };
        case 6:
            return { colorClass: 'bg-label-warning', label: 'Aguardando' };
        case 7:
            return { colorClass: 'bg-label-warning', label: 'Finalizado' };
        default:
            return { colorClass: 'bg-label-success', label: 'Urgente' };
    }
};

export default function Badge({ status }: BadgeProps) {
    const { colorClass, label } = getStatus(status);

    return (
        <div className="d-flex flex-column">
            <small className={`text-truncate d-none d-sm-block badge ${colorClass}`}>
                {label}
            </small>
        </div>
    );
}